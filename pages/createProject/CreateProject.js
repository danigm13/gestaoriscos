import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../../firebaseconection';

import AddRisksHome from './addRisks/AddRisks';

function CreateProjectHome({ navigation }) {
	const [name, setName] = useState('');
	const [baseValue, setbaseValue] = useState('');

	const onChangeName = (txtName) => {
		setName(txtName);
	};
	const onChangeBaseValue = (txtBaseValue) => {
		setbaseValue(txtBaseValue);
	};

	var key = "teste";
	const Create = () => {
		// if (name == null || baseValue == null )
		// {
		// 	navegar ERROR
		// }
		const newProject = firebase.database().ref('Projetos').push();

		console.log('Auto generated key: ', newProject.key);
		newProject
			.set({
				Nome: name,
				ValorBase: baseValue,
				Riscos: [],
			})
			.then(() => console.log('Data updated.'));

		key = newProject.key
		console.log('CHAVE ', key);
	};

	return (
		<View>
			<Text style={{ fontSize: 15 }}>Nome</Text>
			<TextInput value={name} onChangeText={(txtName) => onChangeName(txtName)}></TextInput>
			<Text style={{ fontSize: 15 }}>Valor Base</Text>
			<TextInput value={baseValue} onChangeText={(txtBaseValue) => onChangeBaseValue(txtBaseValue)}></TextInput>
			<Button
				title="Adicionar Risco"
				onPress={() => {
					navigation.navigate('Adicionar Riscos', {
						projectKey: key,
					});
				}} 
			/>
			<Button title="Criar Projeto" onPress={Create}></Button>
		</View>
	);
}

const Stack = createStackNavigator();

function CreateProjectForm() {
	return (
		<Stack.Navigator>
			<Stack.Screen options={{ headerShown: false }} name="CriarProjeto" component={CreateProjectHome} />
			<Stack.Screen name="Adicionar Riscos" component={AddRisksHome} />
		</Stack.Navigator>
	);
}

export default CreateProjectForm;
