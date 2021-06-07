import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../../firebaseconection';

import LoginHome from '../../App';
import RegisterFail from './registerFail';
import passwordsNotEqual from './passwordsNotEqual';

function RegisterHome({ navigation }) {
	function Sucess() {
		navigation.navigate('Login');
	}

	function Fail() {
		navigation.navigate('Falha');
	}
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const onChangeEmail = (txtEmail) => {
		setEmail(txtEmail);
	};
	const onChangePassword = (txtPassword) => {
		setPassword(txtPassword);
	};
	const onChangeConfirmPassword = (txtConfirmPassword) => {
		setConfirmPassword(txtConfirmPassword);
	};

	const Register = () => {
		if (password == confirmPassword){
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(() => {
					Sucess();
				})
				.catch(() => {
					Fail();
				});
		}
		else
			navigation.navigate('FalhaSenha');

	};

	return (
		<View>
			<Text style={{ fontSize: 15 }}>Email</Text>
			<TextInput value={email} onChangeText={(txtEmail) => onChangeEmail(txtEmail)}></TextInput>
			<Text style={{ fontSize: 15 }}>Senha</Text>
			<TextInput
				secureTextEntry={true}
				value={password}
				onChangeText={(txtPassword) => onChangePassword(txtPassword)}
			></TextInput>
			<Text style={{ fontSize: 15 }}>Confirme a Senha</Text>
			<TextInput
				secureTextEntry={true}
				value={confirmPassword}
				onChangeText={(txtConfirmPassword) => onChangeConfirmPassword(txtConfirmPassword)}
			></TextInput>
			<Button title="Cadastrar" onPress={Register}></Button>
		</View>
	);
}

const Stack = createStackNavigator();

function RegisterForm() {
	return (
		<Stack.Navigator>
			<Stack.Screen options={{ headerShown: false }} name="Cadastro" component={RegisterHome} />
			<Stack.Screen options={{ headerShown: false }} name="Login" component={LoginHome} />
			<Stack.Screen name="Falha" component={RegisterFail} />
			<Stack.Screen name="Confirmar Senha" component={passwordsNotEqual} />
		</Stack.Navigator>
	);
}

export default RegisterForm;
