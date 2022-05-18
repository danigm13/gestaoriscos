import React, { useState } from "react";
import { Button, View, Text, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../../../../firebaseconection";
import database from "@react-native-firebase/database";

const AddRisks = (props) => {
  const [projectId, setProjectId] = useState(props.projectId);

  const [name, setName] = useState("");
  const [typeRisk, setTypeRisk] = useState("");
  const [impactRisk, setImpactRisk] = useState("");
  const [dateRisk, setDateRisk] = useState("");
  const [probability, setProbability] = useState("");
  const [project, setProject] = useState();

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
    const newRisk = firebase.database().ref("Riscos").push();

    setProjectId("-Mi2f61x6AgJvBUXwP0Z");
    console.log("Auto generated key: ", newRisk.key);
    newRisk.set({
      ProjectId: projectId,
      NomeRisco: name,
      TipoRisco: typeRisk,
      ImpactoRisco: impactRisk,
      DataValidade: dateRisk,
      Probabilidade: probability,
    });

    firebase
      .database()
      .ref(`/Projetos/${projectId}`)
      .once("value")
      .then((snapshot) => {
        setProject(snapshot.val());
      });

    var p = new Object();
    p = project;
    console.log("Riscos antes: ", p.Riscos);
    p.Riscos.push(newRisk.key);
    console.log("Riscos dps: ", p.Riscos);

    firebase.database().ref(`/Projetos/${projectId}`).update({
      Riscos: p.Riscos,
    });
  };

  return (
    <ScrollView>
      <View>
        <Text style={{ fontSize: 15 }}>Nome</Text>
        <TextInput
          value={name}
          onChangeText={(txtName) => onChangeName(txtName)}
        ></TextInput>
        <Text style={{ fontSize: 15 }}>Tipo</Text>
        <TextInput
          value={typeRisk}
          onChangeText={(txtTypeRisk) => onChangeTypeRisk(txtTypeRisk)}
        ></TextInput>
        <Text style={{ fontSize: 15 }}>Impacto</Text>
        <TextInput
          value={impactRisk}
          onChangeText={(txtImpactRisk) => onChangeImpactRisk(txtImpactRisk)}
        ></TextInput>
        <Text style={{ fontSize: 15 }}>Data Validade</Text>
        <TextInput
          value={dateRisk}
          onChangeText={(txtDateRisk) => onChangeDateRisk(txtDateRisk)}
        ></TextInput>
        <Text style={{ fontSize: 15 }}>Probabilidade</Text>
        <TextInput
          value={probability}
          onChangeText={(txtProbability) => onChangeProbability(txtProbability)}
        ></TextInput>
        <Button title="Adicionar" onPress={Add}></Button>
      </View>
    </ScrollView>
  );
};

export default AddRisks;
