import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '../../firebaseconection';

import EditProjectHome from './editProject/EditProject';
import PreResultProjectHome from './preResult/PreResult';
import PosResultProjectHome from './posResult/PosResult';
import RisksMenuHome from './risks/risksMenu/RisksMenu';

function ProjectHome({ navigation }) {
	//Pegar projeto pelo id

	return (
		<View>
			<Text style={{ fontSize: 15 }}>Nome</Text>
			<Text>Projeto Teste</Text>
			<Text style={{ fontSize: 15 }}>Valor Base</Text>
			<Text>3.000.000,00</Text>
			<Button
				title="Editar Projeto"
				onPress={() => {
					navigation.navigate('Editar Projeto');
				}}
			/>
			<Button
				title="Registro de Riscos"
				onPress={() => {
					navigation.navigate('Registro de Risco');
				}}
			/>
			<Button
				title="Resultado Pre Gestao"
				onPress={() => {
					navigation.navigate('Resultado Pre Gestao');
				}}
			/>
			{/* <Button
				title="Gerir"
				onPress={() => {
					navigation.navigate('Gerir', {
						projectKey: key,
					});
				}}
			/> */}
			<Button
				title="Resultado Pos Gestao"
				onPress={() => {
					navigation.navigate('Resultado Pos Gestao');
				}}
			/>
		</View>
	);
}

const Stack = createStackNavigator();

function ProjectForm() {
	return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Projeto"
        component={ProjectHome}
      />
      <Stack.Screen name="Editar Projeto" component={EditProjectHome} />
      <Stack.Screen
        name="Resultado Pre Gestao"
        component={PreResultProjectHome}
      />
      <Stack.Screen
        name="Resultado Pos Gestao"
        component={PosResultProjectHome}
      />
      <Stack.Screen name="Registro de Risco" component={RisksMenuHome} />
    </Stack.Navigator>
  );
}

export default ProjectForm;
