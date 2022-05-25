import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../../../../firebaseconection";
import { Actions } from "react-native-router-flux";

// import AddRisksHome from "../../Risk/AddRisks/AddRisks";

const CreateProject = (props) => {
  const [userId, setUserId] = useState(props.userId);

  const [name, setName] = useState("");
  const [baseValue, setbaseValue] = useState("");

  const onChangeName = (txtName) => {
    setName(txtName);
  };
  const onChangeBaseValue = (txtBaseValue) => {
    setbaseValue(txtBaseValue);
  };

  const Create = () => {
    // if (name == null || baseValue == null )
    // {
    // 	navegar ERROR
    // }
    const newProject = firebase.database().ref("Projetos").push();

    console.log("Auto generated key: ", newProject.key);
    newProject
      .set({
        UserId: userId,
        Nome: name,
        ValorBase: baseValue,
        Riscos: [0],
      })
      .then(() => console.log("Data updated."));

    Actions.AddRisks({ projectId: newProject.key });
  };

  return (
    <View>
      <Text style={{ fontSize: 15 }}>Nome</Text>
      <TextInput
        value={name}
        onChangeText={(txtName) => onChangeName(txtName)}
      ></TextInput>
      <Text style={{ fontSize: 15 }}>Valor Base</Text>
      <TextInput
        value={baseValue}
        onChangeText={(txtBaseValue) => onChangeBaseValue(txtBaseValue)}
      ></TextInput>
      <Button title="Criar Projeto" onPress={Create}></Button>
    </View>
  );
};

export default CreateProject;
