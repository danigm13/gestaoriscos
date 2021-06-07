import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../../../../firebaseconection';

//import AddRisksHome from './addRisks/AddRisks';

function EditRiskHome({ navigation }) {
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
			<TextInput defaultValue="teste" value={name} onChangeText={(txtName) => onChangeName(txtName)} />
			<Text style={{ fontSize: 15 }}>Tipo</Text>
			<TextInput
				defaultValue="teste"
				value={typeRisk}
				onChangeText={(txtTypeRisk) => onChangeTypeRisk(txtTypeRisk)}
			/>
			<Text style={{ fontSize: 15 }}>Impacto</Text>
			<TextInput
				defaultValue="teste"
				value={impactRisk}
				onChangeText={(txtImpactRisk) => onChangeImpactRisk(txtImpactRisk)}
			/>
			<Text style={{ fontSize: 15 }}>Data Validade</Text>
			<TextInput
				defaultValue="teste"
				value={dateRisk}
				onChangeText={(txtDateRisk) => onChangeDateRisk(txtDateRisk)}
			/>
			<Text style={{ fontSize: 15 }}>Probabilidade</Text>
			<TextInput
				defaultValue="teste"
				value={probability}
				onChangeText={(txtProbability) => onChangeProbability(txtProbability)}
			/>
			<Button title="Editar" onPress={Edit}></Button>
		</View>
	);
}

const Stack = createStackNavigator();

function EditRiskForm() {
	return (
		<Stack.Navigator>
			<Stack.Screen options={{ headerShown: false }} name="Editar Risco" component={EditRiskHome} />
		</Stack.Navigator>
	);
}

export default EditRiskForm;
