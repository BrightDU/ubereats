import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

const LinksScreen = () => {
	return (
		<ScrollView style={styles.container}>
			{/* Go ahead and delete ExpoLinksView and replace it with your
			 * content, we just wanted to provide you with some helpful links */}
			<Text>Link Screen</Text>
		</ScrollView>
	);
};

export default LinksScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff',
	},
});
