import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '../../../firebaseconection';

import EditRiskHome from './editRisk/EditRisk';
import ManageHome from '../manage/Manage';

function RiskHome({ navigation }) {
	//Pegar projeto pelo id

	return (
		<View>
			<Text style={{ fontSize: 15 }}>Nome</Text>
			<Text>risco.nome</Text>
			<Text style={{ fontSize: 15 }}>Tipo</Text>
			<Text>risco.Tipo</Text>
			<Text style={{ fontSize: 15 }}>Probabilidade</Text>
			<Text>risco.Probabilidade</Text>
			<Text style={{ fontSize: 15 }}>Impacto</Text>
			<Text>risco.Impacto</Text>
			<Text style={{ fontSize: 15 }}>Data</Text>
			<Text>risco.Data</Text>
			<Button
				title="Editar"
				onPress={() => {
					navigation.navigate('Editar Risco');
				}}
			/>
			<Button
				title="Gerir"
				onPress={() => {
					navigation.navigate('Gerir');
				}}
			/>
		</View>
	);
}

const Stack = createStackNavigator();

function RiskForm() {
	return (
		<Stack.Navigator>
			<Stack.Screen options={{ headerShown: false }} name="Risco" component={RiskHome} />
			<Stack.Screen name="Editar Risco" component={EditRiskHome} />
			<Stack.Screen name="Gerir" component={ManageHome} />
		</Stack.Navigator>
	);
}

export default RiskForm;
