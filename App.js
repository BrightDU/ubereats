import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import NavContainer from './src/navigation/NavigationContainer';

export default function App() {
	return (
		<NavigationContainer>
			<NavContainer />
		</NavigationContainer>

		// <View style={styles.container}>
		//   {/* <Text>Open up App.js to start working on your app!</Text>
		//   <StatusBar style="auto" /> */}

		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
