import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../../../../firebaseconection";
import { database } from "firebase";

//import AddRisksHome from './addRisks/AddRisks';

const EditRisk = (props) => {
  const [projectId, setProjectId] = useState(props.projectId);
  const [userId, setUserId] = useState(props.userId);
  const [riskId, setRiskId] = useState(props.riskId);
  const [name, setName] = useState("");
  const [typeRisk, setTypeRisk] = useState("");
  const [impactRisk, setImpactRisk] = useState("");
  const [dateRisk, setDateRisk] = useState("");
  const [probability, setProbability] = useState("");

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
    if (name != null) {
      database().ref(`/Riscos/${riskId}`).update({
        NomeRisco: name,
      });
    }
    if (typeRisk != null) {
      database().ref(`/Riscos/${riskId}`).update({
        TipoRisco: typeRisk,
      });
    }
    if (impactRisk != null) {
      database().ref(`/Riscos/${riskId}`).update({
        ImpactoRisco: impactRisk,
      });
    }
    if (dateRisk != null) {
      database().ref(`/Riscos/${riskId}`).update({
        DataValidade: dateRisk,
      });
    }
    if (probability != null) {
      database().ref(`/Riscos/${riskId}`).update({
        Probabilidade: probability,
      });
    }

    Actions.Risk({
      nameRisk: props.nameRisk,
      probRisk: props.probRisk,
      impactRisk: props.impactRisk,
      typeRisk: props.typeRisk,
      dateRisk: props.dateRisk,
      userId: userId,
      projectId: projectId,
      riskId: riskId,
    });
  };

  return (
    <View>
      <Text style={{ fontSize: 15 }}>Nome</Text>
      <TextInput
        defaultValue="teste"
        value={name}
        onChangeText={(txtName) => onChangeName(txtName)}
      />
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
};

export default EditRisk;
