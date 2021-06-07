import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../../../firebaseconection';

//import AddRisksHome from './addRisks/AddRisks';

function PreResultProjectHome({ navigation }) {
	const [name, setName] = useState('');
	const [baseValue, setbaseValue] = useState('');

	const Calculate = () => {
		// if (name == null || baseValue == null )
		// {
		// 	navegar ERROR
		// }
		// const newProject = firebase.database().ref('Projetos').push();
		// console.log('Auto generated key: ', newProject.key);
		// newProject
		// 	.set({
		// 		Nome: name,
		// 		ValorBase: baseValue,
		// 		Riscos: [],
		// 	})
		// 	.then(() => console.log('Data updated.'));
	};

	return (
		<View>
			<Text style={{ fontSize: 15 }}>Valor Esperado</Text>
			<Text>R$3.210.000</Text>
			<Text style={{ fontSize: 15 }}>Pior Caso</Text>
			<Text>R$3.500.000</Text>
			<Text style={{ fontSize: 15 }}>Melhor Caso</Text>
			<Text>R$2.800.000</Text>
		</View>
	);
}

const Stack = createStackNavigator();

function PreResultProjectForm() {
	return (
		<Stack.Navigator>
			<Stack.Screen options={{ headerShown: false }} name="Editar Projeto" component={PreResultProjectHome} />
		</Stack.Navigator>
	);
}

export default PreResultProjectForm;
