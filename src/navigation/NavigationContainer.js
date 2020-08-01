import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import AuthNagivation from './AuthNavigation';
import { AuthContext } from '../context/authContext';

const Stack = createStackNavigator();


const NavContainer = () => {
	const [auth, setAuth] = useState({
		isAuth: false,
		isLoading: false,
	});

	//changing Authentication State
	const changeAuth = () => {
		setAuth({
			...auth,
			isLoading: true,
		});
		setTimeout(() => {
			setAuth({
				...auth,
				isLoading: false,
				isAuth: true,
			});
		}, 5000);
	};

	return (
		<AuthContext.Provider value={{ auth, changeAuth }}>
			<Stack.Navigator headerMode="none">
				{auth.isAuth ? (
					<Stack.Screen name="Main" component={BottomTabNavigation} />
				) : (
					<Stack.Screen name="Auth" component={AuthNagivation} />
				)}
			</Stack.Navigator>
		</AuthContext.Provider>
	);
};

export default NavContainer;
