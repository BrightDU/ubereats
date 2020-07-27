import React, { useState } from 'react';
import { Platform, View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Tag from './Tag';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = (props) => {
	const navigation = useNavigation();
	const heartSize = new Animated.Value(1);

	const [liked, setLiked] = useState(false);

	const like = () => {
		setLiked(true);
		Animated.spring(heartSize, {
			toValue: 1.1,
			friction: 1,
		}).start();
	};

	const unlike = () => {
		setLiked(false);
		heartSize.setValue(1);
	};

	return (
		<View style={props.style}>
			<TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Menu')}>
				<View style={styles.container}>
					<View>
						<Image
							style={styles.image}
							source={{
								uri: 'https://cdn.dribbble.com/users/1846841/screenshots/4961950/epi_x.png',
							}}
						/>
						<TouchableOpacity
							hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
							activeOpacity={0.7}
							onPress={() => (liked ? unlike() : like())}
							style={styles.iconContainer}
						>
							<Animated.View style={{ transform: [{ scale: heartSize }] }}>
								<Ionicons
									name={
										(Platform.OS === 'ios' ? 'ios-heart' : 'md-heart') + (liked ? '' : '-empty')
									}
									size={32}
									color="#fff"
								/>
							</Animated.View>
						</TouchableOpacity>
					</View>
					<Text style={styles.title}>Alma Verde (Hipódromo)</Text>
					<Text style={styles.description}>$$ . Saludable</Text>
					<View style={styles.tagContainer}>
						<Tag>25-35 min</Tag>
						<Tag>4.6 (500+)</Tag>
						<Tag>Costo de envio: MXN 60.00</Tag>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

// class Card extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.heartSize = new Animated.Value(1);
// 		this.state = {
// 			liked: false,
// 		};
// 	}

// 	render() {
// 		return (

// 		);
// 	}
// }

export default Card;

const styles = StyleSheet.create({
	container: {
		width: 320,
		backgroundColor: '#fff',
		marginBottom: 10,
		padding: 10,
		shadowColor: 'rgba(0,0,0,0.1)',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 1,
		shadowRadius: 5,
	},
	image: {
		height: 150,
	},
	tagContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	title: {
		fontSize: 16,
		marginTop: 10,
	},
	description: {
		color: '#999',
		marginTop: 5,
	},
	iconContainer: {
		position: 'absolute',
		right: 20,
		bottom: 15,
	},
});
