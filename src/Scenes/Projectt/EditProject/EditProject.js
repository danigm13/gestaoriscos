import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../../../../firebaseconection";
import { database } from "firebase";

//import AddRisksHome from './addRisks/AddRisks';

const EditProject = (props) => {
  const [projectId, setProjectId] = useState(props.projectId);
  const [userId, setUserId] = useState(props.userId);
  const [name, setName] = useState("");
  const [baseValue, setbaseValue] = useState("");

  const onChangeName = (txtName) => {
    setName(txtName);
  };
  const onChangeBaseValue = (txtBaseValue) => {
    setbaseValue(txtBaseValue);
  };

  const Edit = () => {
    if (name != null) {
      database().ref(`/Projetos/${projectId}`).update({
        Nome: name,
      });
    }
    if (baseValue != null) {
      database().ref(`/Projetos/${projectId}`).update({
        ValorBase: baseValue,
      });
    }

    Actions.Projectt({
      projectId: projectId,
      projectName: name,
      projectVB: baseValue,
    });
  };

  return (
    <View>
      <Text style={{ fontSize: 15 }}>Nome</Text>
      <TextInput
        defaultValue="Teste"
        value={name}
        onChangeText={(txtName) => onChangeName(txtName)}
      />
      <Text style={{ fontSize: 15 }}>Valor Base</Text>
      <TextInput
        defaultValue="teste"
        value={baseValue}
        onChangeText={(txtBaseValue) => onChangeBaseValue(txtBaseValue)}
      />
      <Button title="Editar" onPress={Edit}></Button>
    </View>
  );
};

export default EditProject;
