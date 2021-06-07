import React, { useState } from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../../../firebaseconection';

import MenuHome from '../../menu/Menu';

function AddRisksHome({ route, navigation }) {
	// console.log('TESTE: ', route);
	// const { projectKey } = route.params;

	const [name, setName] = useState('');
	const [typeRisk, setTypeRisk] = useState('');
	const [impactRisk, setImpactRisk] = useState('');
	const [dateRisk, setDateRisk] = useState('');
	const [probability, setProbability] = useState('');

	const onChangeName = (txtName) => {
		setName(txtName);
	};
	const onChangeTypeRisk = (txtTypeRisk) => {
		setTypeRisk(txtTypeRisk);
	};
	const onChangeImpactRisk = (txtImpactRisk) => {
		setImpactRisk(txtImpactRisk);
	};
	const onChangeDateRisk = (txtDateRisk) => {
		setDateRisk(txtDateRisk);
	};
	const onChangeProbability = (txtProbability) => {
		setProbability(txtProbability);
	};

	const Add = () => {
		// if (name == null || typerisk == null || impactRisk == null || dateRisk == null || probability == null)
		// {
		//		navegar ERROR
		// }
		const newRisk = firebase.database().ref('Riscos').push();

		console.log('Auto generated key: ', newRisk.key);
		newRisk
			.set({
				Nome: name,
				TipoRisco: typeRisk,
				ImpactoRisco: impactRisk,
				DataValidade: dateRisk,
				Probabilidade: probability,
			})
			.then(() => console.log('Data updated.'));

		firestore()
			.collection('Projetos')
			.where(key == projectKey)
			.update({
				Riscos: [newRisk.key],
			})
			.then(() => {
				console.log('User updated!');
			});
	};

	return (
		<ScrollView>
			<View>
				<Text style={{ fontSize: 15 }}>Nome</Text>
				<TextInput value={name} onChangeText={(txtName) => onChangeName(txtName)}></TextInput>
				<Text style={{ fontSize: 15 }}>Tipo</Text>
				<TextInput value={typeRisk} onChangeText={(txtTypeRisk) => onChangeTypeRisk(txtTypeRisk)}></TextInput>
				<Text style={{ fontSize: 15 }}>Impacto</Text>
				<TextInput
					value={impactRisk}
					onChangeText={(txtImpactRisk) => onChangeImpactRisk(txtImpactRisk)}
				></TextInput>
				<Text style={{ fontSize: 15 }}>Data Validade</Text>
				<TextInput value={dateRisk} onChangeText={(txtDateRisk) => onChangeDateRisk(txtDateRisk)}></TextInput>
				<Text style={{ fontSize: 15 }}>Probabilidade</Text>
				<TextInput
					value={probability}
					onChangeText={(txtProbability) => onChangeProbability(txtProbability)}
				></TextInput>
				<Button title="Adicionar" onPress={Add}></Button>
			</View>
		</ScrollView>
	);
}

const Stack = createStackNavigator();

function AddRisksForm() {
	return (
		<Stack.Navigator>
			<Stack.Screen options={{ headerShown: false }} name="CriarProjeto" component={AddRisksHome} />
			<Stack.Screen options={{ headerShown: false }} name="Menu" component={MenuHome} />
		</Stack.Navigator>
	);
}

export default AddRisksForm;
