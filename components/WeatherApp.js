import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function WeatherApp() {
	const weatherData = [
		{
			city: 'San Francisco',
			icon: 'cloud-showers-heavy',
			time: '16:00',
			condition: 'Heavy Rain',
			temp: '12.6°C',
		},
		{
			city: 'New York',
			icon: 'cloud-sun-rain',
			time: '19:00',
			condition: 'Light Rain',
			temp: '15.2°C',
		},
		{
			city: 'Texas',
			icon: 'cloud-sun',
			time: '15:00',
			condition: 'Cloudy',
			temp: '23°C',
		},
		{
			city: 'Florida',
			icon: 'wb-sunny',
			time: '12:00',
			condition: 'Haze',
			temp: '25°C',
		},
	];

	return (
		<View style={styles.container}>
			<ScrollView>
				{weatherData.map((v, i) => {
					return (
						<View
							key={i}
							style={[
								styles.card1,
								{ marginBottom: i == weatherData.length - 1 ? 16 : 0 },
							]}
						>
							<View style={styles.CityView}>
								<Text style={styles.City}>{v.city}</Text>
							</View>
							<View style={styles.iconAndTimeView}>
								<View style={styles.IconView}>
									{i == 3 ? (
										<MaterialIcons name={v.icon} size={50} color='#fff' />
									) : (
										<FontAwesome5
											name={v.icon}
											size={i == 0 ? 42 : 45}
											color='white'
										/>
									)}
								</View>
								<View style={styles.TimeView}>
									<Text style={styles.TimeText}>{v.time}</Text>
								</View>
							</View>
							<Text style={styles.BorderBottom}></Text>
							<View style={styles.conditionAndTempView}>
								<Text style={styles.Condition}>{v.condition}</Text>
								<Text style={styles.Temp}>{v.temp}</Text>
							</View>
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	card1: {
		alignSelf: 'center',
		width: '94%',
		// height: '25.6%',
		borderRadius: 25 / 2,

		alignItems: 'stretch',
		flexDirection: 'column',
		justifyContent: 'center',
		marginTop: 14,
		padding: 15,
		backgroundColor: '#38ACEC',
		elevation: 10,
	},
	CityView: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		color: '#fff',
		paddingBottom: 12,
	},
	City: { color: '#fff' },
	iconAndTimeView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 10,
		marginVertical: 2,
	},
	IconView: { justifyContent: 'center', flexDirection: 'row' },
	TimeView: { flexDirection: 'row', justifyContent: 'flex-end' },
	TimeText: {
		alignSelf: 'flex-end',
		color: '#fff',
		fontSize: 30,
	},
	BorderBottom: { borderBottomWidth: 1, borderBottomColor: '#fff' },
	conditionAndTempView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 10,
	},
	Condition: { alignSelf: 'flex-end', color: '#fff' },
	Temp: { alignSelf: 'flex-end', color: '#fff' },
});
