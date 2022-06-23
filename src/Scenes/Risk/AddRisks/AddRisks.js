import React, { useState, useEffect } from "react";
import { Button, View, Text, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../../../../firebaseconection";
import { database } from "firebase";
import { Actions } from "react-native-router-flux";

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

  useEffect(() => {
    database()
      .ref(`/Projetos/${projectId}`)
      .once("value")
      .then((snapshot) => {
        setProject(snapshot.val());
      });
  }, []);

  const Add = () => {
    const newRisk = firebase.database().ref("Riscos").push();

    newRisk.set({
      ProjectId: projectId,
      NomeRisco: name,
      TipoRisco: typeRisk,
      ImpactoRisco: impactRisk,
      DataValidade: dateRisk,
      Probabilidade: probability,
      Gerido: false,
    });

    if (project.Riscos[0] == 0) {
      database()
        .ref(`/Projetos/${projectId}`)
        .update({
          Riscos: [newRisk.key],
        });
    } else {
      project.Riscos.push(newRisk.key);

      database().ref(`/Projetos/${projectId}`).update({
        Riscos: project.Riscos,
      });
    }

    Actions.Projectt({
      projectId: projectId,
      projectName: project.Nome,
      projectVB: project.ValorBase,
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
