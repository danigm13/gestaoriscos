import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../../../firebaseconection';

//import AddRisksHome from './addRisks/AddRisks';

function EditProjectHome({ navigation }) {
	const [name, setName] = useState('');
	const [baseValue, setbaseValue] = useState('');

	const onChangeName = (txtName) => {
		setName(txtName);
	};
	const onChangeBaseValue = (txtBaseValue) => {
		setbaseValue(txtBaseValue);
	};

	const Edit = () => {
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
			<Text style={{ fontSize: 15 }}>Nome</Text>
			<TextInput defaultValue='Teste' value={name} onChangeText={(txtName) => onChangeName(txtName)} />
			<Text style={{ fontSize: 15 }}>Valor Base</Text>
			<TextInput defaultValue="teste" value={baseValue} onChangeText={(txtBaseValue) => onChangeBaseValue(txtBaseValue)}/>
			<Button title="Editar" onPress={Edit}></Button>
		</View>
	);
}

const Stack = createStackNavigator();

function EditProjectForm() {
	return (
		<Stack.Navigator>
			<Stack.Screen options={{ headerShown: false }} name="Editar Projeto" component={EditProjectHome} />
		</Stack.Navigator>
	);
}

export default EditProjectForm;
