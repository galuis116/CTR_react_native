import React, { Component } from 'react';
import { RootSiblingParent } from "react-native-root-siblings";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "./screens/SplashScreen";
import OnboardStack from "./navigations/OnboardStack";
import MainStack from "./navigations/MainStack";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import messaging from "@react-native-firebase/messaging";
import { AppState } from "react-native";
import { saveUserDataToSharedStorage, getQuoteOfToday } from "./utils/SharedPreferences";
import { navigationRef, navigate } from './navigations/helper';

const store = configureStore();
const Stack = createStackNavigator();

async function requestUserPermission() {
    const authorizationStatus = await messaging().requestPermission();

    if (authorizationStatus) {
        console.log('Permission status:', authorizationStatus);
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appState : AppState.currentState
        };
    }

    async componentDidMount() {
        await requestUserPermission()
        messaging().onMessage(async remoteMessage => {
            const quote = await getQuoteOfToday();
            const widgetData = {
                title: quote.title,
                meaning: quote.quote
            }
            await saveUserDataToSharedStorage(widgetData);
        });
        AppState.addEventListener("change", this._handleAppStateChange);
    }

    _handleAppStateChange = nextAppState => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === "active") 
        {
            navigate("Main", { screen : "Home" });
        }
        this.setState({ appState : nextAppState })
    };

    componentWillUnmount() {
        AppState.removeEventListener("change", this._handleAppStateChange);
    }


    render() {
        return (
            <RootSiblingParent>
                <Provider store={store}>
                    <NavigationContainer ref={navigationRef}>
                        <Stack.Navigator screenOptions={{ gestureEnabled: false, headerShown: false }}>
                            <Stack.Screen name="Splash" component={SplashScreen} />
                            <Stack.Screen name="Onboard" component={OnboardStack} />
                            <Stack.Screen name="Main" component={MainStack} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </Provider>
            </RootSiblingParent>
        );
    }
}

export default App;
