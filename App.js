import * as React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import firebase from './firebaseconection';

import Cadastro from './pages/register/Register';
import LoginFail from './pages/login/loginFail';
import MenuHome from './pages/menu/Menu';

function LoginHome({ navigation }) {
	function Sucess() {
		navigation.navigate('Menu');
	}

	function Fail() {
		navigation.navigate('Falha');
	}

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onChangeEmail = (txtEmail) => {
		setEmail(txtEmail);
	};
	const onChangePassword = (txtPassword) => {
		setPassword(txtPassword);
	};

	const login = () =>
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				Sucess();
			})
			.catch(() => {
				Fail();
			});

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{ fontWeight: 'bold', fontSize: 28 }}>
				Gestão de Riscos em Projetos
				{'\n'}
			</Text>
			<Text>{'\n'}</Text>
			<Text style={{ fontSize: 15 }}>Email</Text>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				value={email}
				onChangeText={(txtEmail) => onChangeEmail(txtEmail)}
			></TextInput>
			<Text style={{ fontSize: 15 }}>Senha</Text>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				secureTextEntry={true}
				value={password}
				onChangeText={(txtPassword) => onChangePassword(txtPassword)}
			></TextInput>
			<Text>{'\n'}</Text>
			<Button title="Entrar" onPress={login}></Button>
			<Text>{'\n'}</Text>
			<Button title="Cadastro" onPress={() => navigation.navigate('Cadastro')} />
		</View>
	);
}

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator>
				<Stack.Screen options={{ headerShown: false }} name="Login" component={LoginHome} />
				<Stack.Screen name="Menu" component={MenuHome} />
				<Stack.Screen name="Falha" component={LoginFail} />
				<Stack.Screen name="Cadastro" component={Cadastro} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
