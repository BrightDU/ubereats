//import liraries
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import CustomInput from '../components/CustomInput';
import Button from '../components/Button';

const validationSchema = yup.object().shape({
	email: yup.string().required('Please enter a valid email').label('Email'),
	password: yup
		.string()
		.required('Uhm, you need to enter a password')
		.label('Password')
		.min(8, 'Yikes, password too short!')
		.max(15, 'Uh oh! passord too long'),
	confirmPassword: yup
		.string()
		.required('Uhm, please enter your password')
		.label('Confirm Password')
		.min(8, 'Yikes, password too short!')
		.max(15, 'Uh oh! passord too long'),
});

// create a component
const SignUpScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Image
					source={require('../assets/images/background.png')}
					resizeMode="cover"
					style={styles.image}
				/>
			</View>
			<Formik
				initialValues={{ email: '', password: '', confirmPassword: '' }}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{(formikProps) => (
					<View style={styles.formContainer}>
						<Text style={styles.textHeading}>Create your Account</Text>
						<CustomInput
							value={formikProps.values.email}
							placeholder="johndoe@email.com"
							onChangeText={formikProps.handleChange('email')}
							onBlur={formikProps.handleBlur('email')}
							error={formikProps.errors.email}
							touched={formikProps.touched.email}
							keyboardType="email-address"
							label="Enter your email"
						/>
						<CustomInput
							value={formikProps.values.password}
							placeholder="Password"
							onChangeText={formikProps.handleChange('password')}
							onBlur={formikProps.handleBlur('password')}
							error={formikProps.errors.password}
							touched={formikProps.touched.password}
							label="Password"
							secureTextEntry
						/>
						<CustomInput
							value={formikProps.values.confirmPassword}
							placeholder="Reenter your password"
							onChangeText={formikProps.handleChange('confirmPassword')}
							onBlur={formikProps.handleBlur('confirmPassword')}
							error={formikProps.errors.confirmPassword}
							touched={formikProps.touched.confirmPassword}
							label="Confirm Passowrd"
							secureTextEntry
						/>
						<View>
							<Button
								title="Create your Account"
								color="white"
								bgColor="#FDC82D"
								onPress={(values) => formikProps.handleSubmit(values)}
							/>
						</View>
					</View>
				)}
			</Formik>
		</SafeAreaView>
	);
};

const { width, height } = Dimensions.get('window');

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	header: {
		backgroundColor: '#fff',
		flex: 1,
		alignItems: 'center',
	},
	image: {
		height: height / 4,
		width: width,
		borderBottomRightRadius: 70,
		borderBottomLeftRadius: 70,
	},
	formContainer: {
		backgroundColor: '#fff',
		flex: 2,
		paddingVertical: 10,
		alignItems: 'center',
	},
	textHeading: {
		color: '#000',
		fontSize: 18,
		fontWeight: 'bold',
	},
});

//make this component available to the app
export default SignUpScreen;
