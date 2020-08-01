//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';

// create a component
const CustomInput = ({ label, error, touched, ...rest }) => {
	// let errorMessage = null;
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput style={styles.input} {...rest} />
			{touched && error ? <Text style={styles.errorText}>{error}</Text> : null}
		</View>
	);
};

const { width, height } = Dimensions.get('window');

// define your styles
const styles = StyleSheet.create({
	container: {
		// flex: 1,
		justifyContent: 'center',
		paddingVertical: 20,
	},
	label: {
		fontSize: 14,
		fontWeight: '400',
		color: '#FDC82D',
		fontWeight: 'bold',
	},
	input: {
		borderWidth: 0,
		borderBottomWidth: 1,
		borderBottomColor: '#FDC82D',
		width: width - 40,
		paddingTop: 5,
	},
	errorText: {
		color: '#E52C29',
		fontSize: 14,
		textAlign: 'center',
	},
});

//make this component available to the app
export default CustomInput;
