import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '../../../../firebaseconection';

import AddRisksForm from '../../../createProject/addRisks/AddRisks';
import RiskHome from '../Risk';

function RisksMenuHome({ navigation }) {
	//Pegar projeto pelo id

	return (
		<View>
			<TouchableOpacity onPress={() => navigation.navigate('Risco')}>
				<Text>Greve Fornecedores</Text>
				<Text>50%</Text>
				<Text>500.000</Text>
				<Text></Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Risco')}>
				<Text>Prototipo Funciona de primeira</Text>
				<Text>20%</Text>
				<Text>200.000 </Text>
				<Text></Text>
			</TouchableOpacity>

			<Button
				title="Adicionar"
				onPress={() => {
					navigation.navigate('Adicionar Risco');
				}}
			/>
		</View>
	);
}

const Stack = createStackNavigator();

function RisksMenuForm() {
	return (
		<Stack.Navigator>
			<Stack.Screen options={{ headerShown: false }} name="Projeto" component={RisksMenuHome} />
			<Stack.Screen name="Adicionar Risco" component={AddRisksForm} />
			<Stack.Screen name="Risco" component={RiskHome} />
		</Stack.Navigator>
	);
}

export default RisksMenuForm;
