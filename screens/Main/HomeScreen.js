import React, {Component} from 'react';
import {
  View,
  Text,
  Alert,
  StatusBar,
  Platform,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Linking,
  Share,
  BackHandler,
  PermissionsAndroid,
  AppState,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import dayjs from 'dayjs';
import ViewShot from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import firestore from '@react-native-firebase/firestore';
import {months} from '../../data/basic';
import {load_user_data} from '../../redux/actions/UserActions';
import {showToast} from '../../utils';
import CalendarModal from '../../components/CalendarModal';
import Loading from '../Loading';

const {width, height} = Dimensions.get('screen');

async function hasAndroidPermission() {
  if (Platform.OS == 'ios') return true;
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) return true;
  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    const today = dayjs();
    this.state = {
      currentDate: today,
      favorited: false,
      showCalendar: false,
      loading: false,
      trialMessage: false,
      appState: AppState.currentState,
    };
    this._unsubscribe = null;
  }
  onPressShare = async () => {
    const {quote} = this.props.user;
    var message = `${months[this.props.user.month]} - ${
      this.props.user.date
    } \n${quote.title}\n${quote.quote}\n\n${quote.link}\n\n`;
    if (Platform.OS == 'android')
      message = `${message}https://ctrdailyapp.com \n`;
    const result = await Share.share({
      message: message,
      subject: quote.title,
      url: 'https://ctrdailyapp.com',
    });
  };
  onPressLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };
  onPressDownload = async () => {
    const permission = await hasAndroidPermission();
    if (!permission) return false;

    this.refs.viewShot.capture().then((uri) => {
      CameraRoll.save(uri);
      showToast('The background saved!');
    });
  };
  onPressFavorite = () => {
    const {month, date} = this.props.user;
    var {favorites} = this.props.user;
    if (favorites == null) favorites = [];
    if (!favorites.includes(`${months[month]}-${date}`)) {
      favorites.push(`${months[month]}-${date}`);
      firestore()
        .collection('users')
        .doc(this.props.user.uid)
        .update({favorites});
      const {loadUserData} = this.props;
      loadUserData({favorites});
      this.setState({favorited: true});
    }
    this.props.navigation.navigate('Favorite');
  };
  onPressCalendar = () => {
    this.setState({showCalendar: true});
  };

  onChangeDate = (date) => {
    const month = date.month();
    const year = date.year();
    const day = date.date();
    this.setState({loading: true});

    const documentID = `${months[month]}-${day}`;
    const {viewed_quotes} = this.props.user;
    if (
      this.props.user.membership == 'trial' &&
      viewed_quotes.length > 13 &&
      viewed_quotes.indexOf(documentID) == -1
    ) {
      Alert.alert(
        'CTR Daily',
        'You have reached your 14 viewing limit. Please subscribe to CTR Daily premium to have full access to all 365 CTR meanings.',
        [
          {
            text: 'Ask me later',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Subscribe Now',
            onPress: () =>
              this.props.navigation.navigate('Onboard', {
                screen: 'subscription',
                params: {showBackButton: true},
              }),
          },
        ],
        {cancelable: false},
      );
      this.setState({loading: false});
      return;
    }

    firestore()
      .collection('quotes')
      .doc(documentID)
      .get()
      .then((snap) => {
        const data = snap.data();
        const {viewed_quotes} = this.props.user;
        if (viewed_quotes.indexOf(documentID) == -1) {
          firestore()
            .collection('users')
            .doc(this.props.user.uid)
            .update({
              viewed_quotes: firestore.FieldValue.arrayUnion(documentID),
            });
          viewed_quotes.push(documentID);
        }
        const {loadUserData} = this.props;
        loadUserData({quote: data, month, year, date: day, viewed_quotes});
        this.setState({
          loading: false,
          month,
          year,
          date: day,
          currentDate: date,
        });
      })
      .catch((e) => {
        this.setState({loading: false});
      });
  };

  async componentDidMount() {
    if (
      this.props.user.membership == 'trial' &&
      this.props.user.membership_status == 'active'
    ) {
      this._unsubscribe = this.props.navigation.addListener('focus', () => {
        const idOfQuote = `${months[this.props.user.month]}-${
          this.props.user.date
        }`;
        const {viewed_quotes} = this.props.user;
        if (viewed_quotes.indexOf(idOfQuote) == -1) {
          viewed_quotes.push(idOfQuote);
          var membership_status = 'active';
          if (viewed_quotes.length > 13) {
            membership_status = 'expired';
          }
          firestore()
            .collection('users')
            .doc(this.props.user.uid)
            .update({
              viewed_quotes: firestore.FieldValue.arrayUnion(idOfQuote),
              membership_status,
            });
          const {loadUserData} = this.props;
          loadUserData({viewed_quotes, membership_status});
        }
        return null;
      });
    }

    AppState.addEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      this.props.navigation.navigate('Main', {screen: 'Home'});
      this.onChangeDate(dayjs());
    }
    this.setState({appState: nextAppState});
  };

  backAction = () => {
    return this.props.route.name == 'Home';
  };
  componentWillUnmount() {
    if (this._unsubscribe) this._unsubscribe();
    BackHandler.removeEventListener('hardwareBackPress', this.backAction);
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  render() {
    const {navigation} = this.props;
    const dynamicStyles = {
      day: {
        fontSize: 36,
        ...this.props.user.font.style,
        color: this.props.user.fontColor,
      },
      month_year: {
        ...this.props.user.font.style,
        fontSize: 18,
        color: this.props.user.fontColor,
        marginTop: -10,
      },
      quoteTitle: {
        fontSize: 22,
        ...this.props.user.font.style,
        color: this.props.user.fontColor,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      quote: {
        ...this.props.user.font.style,
        fontSize: 18,
        color: this.props.user.fontColor,
        lineHeight: 25,
        paddingVertical: 20,
        textAlign: 'center',
      },
      linkText: {
        textDecorationLine: 'underline',
        ...this.props.user.font.style,
        color: this.props.user.fontColor,
        fontSize: 20,
      },
    };
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ViewShot ref="viewShot" style={{flex: 1}}>
          <FastImage
            source={{uri: this.props.user.theme.background}}
            style={{width: width, height: height, position: 'absolute'}}
          />
          <SafeAreaView>
            <View style={styles.logoContainer}>
              <Text style={styles.title}>CTR Daily</Text>
              <FastImage
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
              />
            </View>
            {this.props.user.quote && (
              <View style={styles.quoteContainer}>
                <View style={styles.date}>
                  <Text style={dynamicStyles.day}>{this.props.user.date}</Text>
                  <Text style={dynamicStyles.month_year}>
                    {months[this.props.user.month]}, {this.props.user.year}
                  </Text>
                </View>
                <Text style={dynamicStyles.quoteTitle}>
                  {this.props.user.quote.title}
                </Text>
                <Text style={dynamicStyles.quote}>
                  {this.props.user.quote.quote}
                </Text>
                <TouchableOpacity
                  style={dynamicStyles.link}
                  onPress={() => this.onPressLink(this.props.user.quote.link)}>
                  <Text style={dynamicStyles.linkText}>
                    {this.props.user.quote.name}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </SafeAreaView>
        </ViewShot>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Search')}>
            <FIcon name="search" size={32} color="white" />
            {/* <Text style={styles.btnTitle}>Search</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.onPressDownload}>
            <FIcon name="download" size={32} color="white" />
            {/* <Text style={styles.btnTitle}>Download</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Themes')}>
            <FIcon name="grid" color="white" size={32} />
            {/* <Text style={styles.btnTitle}>Themes</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.onPressShare}>
            <FIcon name="share-2" size={32} color="white" />
            {/* <Text style={styles.btnTitle}>Share</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.onPressFavorite}>
            <Icon
              name={
                this.props.user.favorites.includes(
                  `${months[this.props.user.month]}-${this.props.user.date}`,
                )
                  ? 'heart'
                  : 'heart-outline'
              }
              size={34}
              color="white"
            />
            {/* <Text style={styles.btnTitle}>Favorite</Text> */}
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Profile')}>
            <FIcon name="disc" color="white" size={32} />
            {/* <Text style={styles.btnTitle}>Profile</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, {marginLeft: 10}]}
            onPress={this.onPressCalendar}>
            <FIcon name="calendar" color="white" size={32} />
            {/* <Text style={styles.btnTitle}>Calendar</Text> */}
          </TouchableOpacity>
        </View>

        <CalendarModal
          visible={this.state.showCalendar}
          close={() => this.setState({showCalendar: false})}
          onChangeDate={(date) => this.onChangeDate(date)}
          initialDate={this.state.currentDate}
        />

        {this.state.loading && <Loading />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    ...ifIphoneX(
      {
        top: 50,
      },
      {
        top: 20,
      },
    ),
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  footer: {
    position: 'absolute',
    ...ifIphoneX(
      {
        bottom: 60,
      },
      {
        bottom: 30,
      },
    ),
    paddingHorizontal: 30,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    fontFamily: 'DMSans-Medium',
    fontSize: 12,
    color: 'white',
  },

  logoContainer: {
    alignItems: 'center',
    ...ifIphoneX(
      {
        marginTop: 0,
      },
      {
        marginTop: 10,
      },
    ),
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'DMSans-Bold',
    color: 'white',
    marginBottom: 5,
  },
  quoteContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});

const mapDispatchToProps = (dispatch) => ({
  loadUserData: (data) => dispatch(load_user_data(data)),
});

const mapStateToProps = (state) => ({
  user: state.UserReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
