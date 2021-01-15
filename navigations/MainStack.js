import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/Main/HomeScreen";
import ProfileScreen from "../screens/Main/ProfileScreen";
import SettingScreen from "../screens/Main/SettingScreen";
import FavoriteScreen from "../screens/Main/FavoriteScreen";
import ThemesScreen from "../screens/Main/ThemesScreen";
import SearchScreen from "../screens/Main/SearchScreen";
import Copyright from "../screens/Main/Copyright";
import ReminderScreen from "../screens/Main/ReminderScreen";

const Stack = createStackNavigator();

function MainStack(){
    return (
        <Stack.Navigator screenOptions={{headerShown : false, gestureEnabled : false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="Favorite" component={FavoriteScreen} />
            <Stack.Screen name="Themes" component={ThemesScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Copyright" component={Copyright} />
            <Stack.Screen name="Reminder" component={ReminderScreen} />
        </Stack.Navigator>
    )
};

export default MainStack;