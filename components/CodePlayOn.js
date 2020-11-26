import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Alert,
} from 'react-native';

export default function CodePlayOn({ navigation }) {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [onLogin, setOnLogin] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.h1}>Welcome to</Text>
				<Text style={styles.h2}>Codeplayon.com</Text>
			</View>
			<View style={styles.textInputView}>
				<View style={{ paddingTop: 80 }}>
					<Text style={{ color: '#fff', fontSize: 15 }}>Enter username: </Text>
					<TextInput
						style={styles.userNameTextInput}
						placeholder='username'
						placeholderTextColor='#999'
						onChangeText={(text) => setUserName(text)}
						value={userName}
					/>
				</View>
				<View style={{ paddingTop: 35 }}>
					<Text style={{ color: '#fff', fontSize: 15 }}>Enter password: </Text>
					<TextInput
						style={styles.passwordTextInput}
						placeholder='password'
						placeholderTextColor='#999'
						onChangeText={(text) => setPassword(text)}
						value={password}
					/>
				</View>
				<View style={styles.buttonView}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => setOnLogin(true)}
					>
						<Text style={{ fontSize: 18, color: '#fff' }}>Login</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity>
					<Text
						style={{
							paddingTop: 5,
							paddingRight: 12,
							textAlign: 'right',
							width: '100%',
							color: '#20AF98',
						}}
					>
						Forgot Password?
					</Text>
				</TouchableOpacity>
			</View>
			{onLogin == true && (
				<Text
					style={{
						color: '#fff',
						fontSize: 20,
						textAlign: 'center',
						paddingVertical: 10,
					}}
				>
					{userName}
				</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222',
	},
	header: {
		alignItems: 'center',
		paddingTop: '30%',
	},
	h1: {
		fontSize: 27,
		color: '#24CDB2',
	},
	h2: {
		fontSize: 20,
		color: '#E75656',
	},
	textInputView: {
		width: '90%',
		alignSelf: 'center',
	},
	userNameTextInput: {
		color: 'white',
		paddingTop: 5,
		borderBottomColor: '#24CDB2',
		borderBottomWidth: 2,
	},
	passwordTextInput: {
		color: 'white',
		paddingTop: 5,
		borderBottomColor: '#24CDB2',
		borderBottomWidth: 2,
	},
	buttonView: {
		paddingTop: '15%',
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#24CDB2',
		paddingVertical: 10,
		width: '100%',
		alignSelf: 'center',
		justifyContent: 'center',
		borderRadius: 4,
	},
});
