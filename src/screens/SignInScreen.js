//import liraries
import React, { useContext } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	SafeAreaView,
	Dimensions,
	ActivityIndicator,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import CustomInput from '../components/CustomInput';
import Button from '../components/Button';
import { AuthContext } from '../context/authContext';

const validationSchema = yup.object().shape({
	email: yup.string().required('Please enter your email').label('Email'),
	password: yup.string().required('Duh, you need to enter a password').label('Password'),
});

// create a component
const SignInScreen = ({ navigation }) => {
	const { auth, changeAuth } = useContext(AuthContext);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Image
					source={require('../assets/images/background.png')}
					resizeMode="cover"
					style={styles.image}
				/>
			</View>


			<View style={styles.formContainer}>
				<Text style={styles.textHeading}>Welcome Back</Text>
				<Formik
					initialValues={{ email: '', password: '' }}
					validationSchema={validationSchema}
					onSubmit={(values) => {
						console.log(values);
						changeAuth();
					}}
				>
					{(formikProps) => (
						<View>
							<CustomInput
								value={formikProps.values.email}
								placeholder="johndoe@email.com"
								onChangeText={formikProps.handleChange('email')}
								onBlur={formikProps.handleBlur('email')}
								keyboardType="email-address"
								label="Email"
								error={formikProps.errors.email}
								touched={formikProps.touched.email}
							/>
							<CustomInput
								value={formikProps.values.password}
								placeholder="Enter Your Password"
								onChangeText={formikProps.handleChange('password')}
								onBlur={formikProps.handleBlur('password')}
								secureTextEntry
								label="Password"
								error={formikProps.errors.password}
								touched={formikProps.touched.password}
							/>
							<View>
								{auth.isLoading ? (
									<ActivityIndicator />
								) : (
									<Button
										title="Sign In"
										color="white"
										bgColor="#FDC82D"
										onPress={() => formikProps.handleSubmit()}
									/>
								)}
							</View>
						</View>
					)}
				</Formik>
				<Button
					onPress={() => {
						navigation.navigate('Sign Up');
					}}
					title="Don't Have an Account yet? Sign Up"
					outline
					color="#FDC82D"
					borderColor="#FDC82D"
				/>
			</View>
		</SafeAreaView>
	);
};

const { width, height } = Dimensions.get('window');

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#fff',
	},
	header: {
		backgroundColor: '#fff',
		flex: 2,
		alignItems: 'center',
	},
	image: {
		height: height / 2.5,
		width: width,
		borderBottomRightRadius: 70,
		borderBottomLeftRadius: 70,
	},
	textHeading: {
		color: '#000',
		fontSize: 18,
		fontWeight: 'bold',
	},
	formContainer: {
		backgroundColor: '#fff',
		flex: 2,
		paddingVertical: 10,
		alignItems: 'center',
		// borderTopRightRadius: 30,
		// borderTopLeftRadius: 30,
	},
});

//make this component available to the app
export default SignInScreen;
