import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SetReminder from "../screens/onBoarding/SetReminder";
import Subscription from "../screens/onBoarding/Subscription";

const Stack = createStackNavigator();

function OnboardStack(){
    return (
        <Stack.Navigator screenOptions={{gestureEnabled : false, headerShown : false}}>
            <Stack.Screen name="setReminder" component={SetReminder} />
            <Stack.Screen name="subscription" component={Subscription} />
        </Stack.Navigator>
    )
}

export default OnboardStack;