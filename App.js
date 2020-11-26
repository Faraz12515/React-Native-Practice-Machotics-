import React from 'react';
import { StyleSheet, Button } from 'react-native';
import CodePlayOn from './components/CodePlayOn';
import HomeScreen from './components/HomeScreen';
import WeatherApp from './components/WeatherApp';
import SortableList from './components/SortableList';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{
						title: 'Home',
						headerStyle: {
							backgroundColor: '#fff',
						},
						headerTintColor: 'black',
						headerTitleAlign: 'center',

						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}}
				/>
				<Stack.Screen
					name='SortableList'
					component={SortableList}
					options={{
						title: 'Sortable List',
						headerStyle: {
							backgroundColor: '#fff',
						},
						headerTintColor: 'black',
						headerTitleAlign: 'center',

						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}}
				/>
				<Stack.Screen
					name='WeatherApp'
					component={WeatherApp}
					options={{
						title: 'Weather App',
						headerStyle: {
							backgroundColor: '#fff',
						},
						headerTintColor: 'black',
						headerTitleAlign: 'center',

						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}}
				/>

				<Stack.Screen
					name='CodePlayOn'
					component={CodePlayOn}
					options={{
						title: 'Code Play On',
						headerStyle: {
							backgroundColor: '#fff',
						},
						headerTintColor: 'black',
						headerTitleAlign: 'center',

						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#222',
// 	},
// });
