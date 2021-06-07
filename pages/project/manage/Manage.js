import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../../../firebaseconection';

//import AddRisksHome from './addRisks/AddRisks';

function ManageHome({ navigation }) {
	const [strategic, setStrategic] = useState('');
	const [responseCost, setbaseResponseCost] = useState('');
    const [newProb, setNewProb] = useState('');
    const [newImpact, setNewImpact] = useState('');
    const [contingency, setContingency] = useState('');

	const onChangeStrategic = (txtStrategic) => {
		setStrategic(txtStrategic);
	};
	const onChangeResponseCost = (txtResponseCost) => {
		setbaseResponseCost(txtResponseCost);
	};
    const onChangeNewProb = (txtNewProb) => {
		setNewProb(txtNewProb);
	};
    const onChangeNewImpact = (txtNewImpact) => {
		setNewImpact(txtNewImpact);
	};

	const Manage = () => {
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
			<Text style={{ fontSize: 15 }}>Estrategia</Text>
			<TextInput value={strategic} onChangeText={(txtStrategic) => onChangeStrategic(txtStrategic)} />
			<Text style={{ fontSize: 15 }}>Custo Resposta</Text>
			<TextInput value={responseCost} onChangeText={(txtResponseCost) => onChangeResponseCost(txtResponseCost)} />

			<Text style={{ fontSize: 15 }}>Nova Probabilidade</Text>
			<TextInput value={newProb} onChangeText={(txtNewProb) => onChangeNewProb(txtNewProb)} />

			<Text style={{ fontSize: 15 }}>Novo Impacto</Text>
			<TextInput value={newImpact} onChangeText={(txtNewImpact) => onChangeNewImpact(txtNewImpact)} />
			<Button title="Gerir" onPress={Manage}></Button>
		</View>
	);
}

const Stack = createStackNavigator();

function ManageForm() {
	return (
		<Stack.Navigator>
			<Stack.Screen options={{ headerShown: false }} name="Editar Projeto" component={ManageHome} />
		</Stack.Navigator>
	);
}

export default ManageForm;
