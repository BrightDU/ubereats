import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//components
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/SettingsScreen';
import TabBarIcon from '../components/TabBarIcon';

const HomeStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const createHomeStack = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen name="Menu" component={MenuScreen} />
		</HomeStack.Navigator>
	);
};

const BottomTabNavigation = () => {
	return (
		<BottomTabs.Navigator>
			<BottomTabs.Screen
				name="Home"
				children={createHomeStack}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
					),
				}}
			/>
			<BottomTabs.Screen
				name="Links"
				component={LinksScreen}
				options={{
					tabBarLabel: 'Links',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon
							focused={focused}
							name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
						/>
					),
				}}
			/>
			<BottomTabs.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					tabBarLabel: 'Settings',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon
							focused={focused}
							name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'}
						/>
					),
				}}
			/>
			<BottomTabs.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon
							focused={focused}
							name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
						/>
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default BottomTabNavigation;
