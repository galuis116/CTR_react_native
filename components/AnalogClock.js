import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import dayjs from "dayjs";

const { width } = Dimensions.get("window");
const SIZE = width * 0.7;
const TICK_INTERVAL = 1000;

class AnalogClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index : new Animated.Value(0),
            tick : new Animated.Value(0),
            scales : [...Array(6).keys()].map( () => new Animated.Value(0)),
        };

        _timer = 0;
        _ticker = null;
    }

    componentWillMount(){
        clearInterval(this._ticker);
        this._ticker = null;
    }

    componentDidMount(){

        const current = dayjs();
        const diff = current.endOf("day").diff(current, 'seconds');
        const oneDay = 24 * 60 * 60;
        this._timer = oneDay - diff;
        this.state.tick.setValue(this._timer);
        this.state.index.setValue(this._timer - 30);

        this._animate();

        this._ticker = setInterval( () => {
            this._timer += 1;
            this.state.tick.setValue(this._timer);
        }, TICK_INTERVAL);

    }

    _animate = () => {

        const scaleStaggerAnimations = this.state.scales.map(animated => {
            return Animated.spring(animated, {
                toValue : 1,
                tension : 18,
                friction : 3,
                useNativeDriver : true
            });
        })

        Animated.parallel([
            Animated.stagger(TICK_INTERVAL / this.state.scales.length, scaleStaggerAnimations),
            Animated.timing(this.state.index, {
                toValue : this.state.tick,
                duration : TICK_INTERVAL / 2,
                useNativeDriver : true
            }),
        ]).start()
    }

    render() {
        const { 
            index,
            scales : [
                smallQuadranScale,
                mediumQuadranScale,
                bigQuadranScale,
                secondsScale,
                minutesScale,
                hoursScale
            ] 
        } = this.state;
        const interpolated = {
            inputRange : [0, 360],
            outputRange : ["0deg", "360deg"]
        };
        const secondDegrees = Animated.multiply(index, 6);
        const transformSeconds = {
            transform : [{ rotate : secondDegrees.interpolate(interpolated) }, { scale : secondsScale }]
        }
        const rotateMinutes = Animated.divide(secondDegrees, new Animated.Value(60));
        const transformMinutes = {
            transform : [{ rotate : rotateMinutes.interpolate(interpolated) }, { scale : minutesScale }]
        }
        const rotateHours = Animated.divide(rotateMinutes, new Animated.Value(12));
        const transformHours = {
            transform : [{ rotate : rotateHours.interpolate(interpolated) }, { scale : hoursScale }]
        }
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.bigQuadran, { transform : [{ scale : bigQuadranScale }]}] } />
                <Animated.View style={[ styles.mediumQuadran, { transform : [{ scale : mediumQuadranScale }]}]}/>
                <Animated.View style={[styles.mover, transformHours]}>
                    <View style={[styles.hours]} />
                </Animated.View>
                <Animated.View style={[styles.mover, transformMinutes]}>
                    <View style={[styles.minutes, ]} />
                </Animated.View>
                <Animated.View style={[styles.mover, transformSeconds]}>
                    <View style={[styles.seconds ]} />
                </Animated.View>
                <Animated.View style={[styles.smallQuadran, { transform : [{ scale : smallQuadranScale }]}]} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        width : width ,
        height : SIZE * 1.1,
        backgroundColor : "transparent",
        alignItems : "center",
        justifyContent: 'center',
    },
    mover : {
        position : "absolute",
        width : SIZE,
        height : SIZE,
        borderRadius : SIZE/2,
        alignItems : "center",
        justifyContent: 'flex-start',
    },
    hours : {
        backgroundColor : "rgba(0,0,0,0.4)",
        height : "35%",
        marginTop : "15%",
        width : 4,
        borderRadius : 4
    },
    minutes : {
        backgroundColor : "rgba(0,0,0,0.8)",
        height : "45%",
        marginTop : "5%",
        width : 3,
        borderRadius : 3,
    },
    seconds : {
        backgroundColor : "rgba(227,71, 134,1)",
        height : "50%",
        width : 2,
        borderRadius : 2,
    },
    bigQuadran : {
        width : SIZE * 0.8,
        height : SIZE * 0.8,
        borderRadius : SIZE * 0.4,
        backgroundColor:  "rgba(200, 200, 200, 0.2)",
        position : "absolute"
    },
    mediumQuadran : {
        width : SIZE * 0.5,
        height : SIZE * 0.5,
        borderRadius : SIZE * 0.25,
        backgroundColor : "rgba(200, 200, 200, 0.4)",
        position : "absolute"
    },
    smallQuadran : {
        width : 10,
        height : 10,
        borderRadius : 5,
        backgroundColor : "rgba(227,71, 134,1)",
        position : "absolute"
    }
})

export default AnalogClock;
