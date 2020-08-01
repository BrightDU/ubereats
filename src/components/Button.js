//import liraries
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

// create a component
const Button = (props) => {
	return (
		<TouchableOpacity
			style={[
				styles.container,
				{
					borderWidth: props.outline ? 1 : 0,
					backgroundColor: props.bgColor,
					borderRadius: 10,
					borderColor: props.borderColor,
				},
			]}
			onPress={props.onPress}
		>
			<Text
				style={{
					color: props.color,
					fontSize: 16,
					fontWeight: 'bold',
				}}
			>
				{props.title}
			</Text>
		</TouchableOpacity>
	);
};

const { width, height } = Dimensions.get('window');

// define your styles
const styles = StyleSheet.create({
	container: {
		padding: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
		height: 50,
		width: width - 40,
	},
});

//make this component available to the app
export default Button;
