import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

const CardList = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{props.title}</Text>
			</View>
			<View style={styles.scrollViewContainer}>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<View style={styles.listContainer}>{props.children}</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default CardList;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(255,255,255,0.7)',
		marginBottom: 10,
	},
	titleContainer: {
		margin: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: '600',
	},
	scrollViewContainer: {
		marginBottom: 15,
	},
	listContainer: {
		flexDirection: 'row',
		marginHorizontal: 20,
	},
});
