import React from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView } from 'react-native';
import Card from '../components/Card';
import CardList from '../components/CardList';

const navigationOptions = {
	header: null,
};

const HomeScreen = (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollViewContainer}>
				<CardList title={'Tus Favoritos'}>
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
				</CardList>
				<CardList title={'Comida Italiana Favorita'}>
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
				</CardList>
				<CardList title={'Tus Pizzas Favoritas'}>
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
				</CardList>
				<CardList title={'Tus Tacos Favoritos'}>
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
					<Card style={styles.card} />
				</CardList>
			</ScrollView>
			{/* <View style={styles.headerContainer}></View> */}
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
	},
	scrollViewContainer: {
		flex: 1,
		backgroundColor: '#eee',
		paddingTop: 10,
	},
	headerContainer: {
		position: 'absolute',
		top: 0,
		width: '100%',
		height: 100,
		backgroundColor: '#fff',
		shadowColor: 'rgba(0,0,0,0.1)',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 1,
		shadowRadius: 5,
	},
	card: {
		marginRight: 10,
	},
});
