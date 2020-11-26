import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.homeText}>Home Screen</Text>
			<View style={styles.ButtonView}>
				<Button
					title='Go to Code Play On'
					onPress={() => navigation.navigate('CodePlayOn')}
				/>
				<Button
					title='Go to Weather App'
					onPress={() => navigation.navigate('WeatherApp')}
				/>
				<Button
					title='Go to Sortable List'
					onPress={() => navigation.navigate('SortableList')}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	homeText: {
		marginVertical: 10,
		fontSize: 20,
	},
	ButtonView: {
		paddingVertical: 5,
	},
});
