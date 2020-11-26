import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import {} from 'react-native-gesture-handler';

export default function SortableList() {
	const listData = [
		{
			img: 'https://picsum.photos/id/237/200/300',
			txt: 'Dog',
		},
		{
			img: 'https://picsum.photos/id/1005/200/300',
			txt: 'Matthew Wiebe',
		},
		{
			img: 'https://picsum.photos/id/1011/200/300',
			txt: 'Boat',
		},
		{
			img: 'https://picsum.photos/id/106/200/300',
			txt: 'Flowers',
		},
		{
			img: 'https://picsum.photos/id/1069/200/300',
			txt: 'Star Fish',
		},
		{
			img: 'https://picsum.photos/id/134/200/300',
			txt: 'Bridge',
		},
		{
			img: 'https://picsum.photos/id/1003/200/300',
			txt: 'Deer',
		},
		{
			img: 'https://picsum.photos/id/1024/200/300',
			txt: 'Vulture',
		},
		{
			img: 'https://picsum.photos/id/1072/200/300',
			txt: 'Old Car',
		},
		{
			img: 'https://picsum.photos/id/167/200/300',
			txt: 'Leaves',
		},
		{
			img: 'https://picsum.photos/id/175/200/300',
			txt: 'Clock',
		},
		{
			img: 'https://picsum.photos/id/998/200/300',
			txt: 'Drawings',
		},
		{
			img: 'https://picsum.photos/id/318/200/300',
			txt: 'Paris',
		},
		{
			img: 'https://picsum.photos/id/250/200/300',
			txt: 'Camera',
		},
		{
			img: 'https://picsum.photos/id/322/200/300',
			txt: 'Street',
		},
		{
			img: 'https://picsum.photos/id/419/200/300',
			txt: 'Tramp',
		},
		{
			img: 'https://picsum.photos/id/392/200/300',
			txt: 'Golden Gate Bridge',
		},
		{
			img: 'https://picsum.photos/id/429/200/300',
			txt: 'Raspberries',
		},
		{
			img: 'https://picsum.photos/id/486/200/300',
			txt: 'Typewritter',
		},
		{
			img: 'https://picsum.photos/id/491/200/300',
			txt: 'Tools',
		},
		{
			img: 'https://picsum.photos/id/559/200/300',
			txt: 'Winters',
		},
		{
			img: 'https://picsum.photos/id/63/200/300',
			txt: 'Tea',
		},
		{
			img: 'https://picsum.photos/id/657/200/300',
			txt: 'Ocean',
		},
		{
			img: 'https://picsum.photos/id/669/200/300',
			txt: 'Solo',
		},
		{
			img: 'https://picsum.photos/id/659/200/300',
			txt: 'Wolf',
		},
		{
			img: 'https://picsum.photos/id/903/200/300',
			txt: 'Galaxy',
		},
	];
	return (
		<View style={styles.container}>
			<ScrollView>
				{listData.map((v, i) => {
					return (
						<TouchableOpacity
							key={i}
							style={[
								styles.List,
								{ marginBottom: i == listData.length - 1 ? 16 : 0 },
							]}
						>
							<View style={styles.ImageView}>
								<View style={styles.ImageStyleView}>
									<Image source={{ uri: v.img }} style={styles.image} />
								</View>
							</View>
							<View style={styles.textView}>
								<Text style={styles.text}>{v.txt}</Text>
							</View>
						</TouchableOpacity>
					);
				})}
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ccc',
	},
	List: {
		flexDirection: 'row',
		alignSelf: 'center',
		width: '94%',
		height: 60,
		borderRadius: 5,

		// alignItems: 'stretch',
		// flexDirection: 'column',
		// justifyContent: 'center',

		marginTop: 14,
		backgroundColor: '#fff',
		elevation: 10,
	},
	ImageView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	ImageStyleView: {
		height: '75%',
		width: '65%',
		borderRadius: 50,
		overflow: 'hidden',
	},
	image: { height: '100%', width: '100%' },
	textView: {
		flex: 4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		width: '100%',
		textAlign: 'left',
		paddingLeft: '5%',
		fontSize: 18,
		fontWeight: '600',
		color: 'black',
	},
});
