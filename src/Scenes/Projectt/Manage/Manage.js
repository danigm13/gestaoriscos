import React, { useState } from "react";
import { Button, View, Text, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";
import firebase from "../../../../firebaseconection";
import { database } from "firebase";

//import AddRisksHome from './addRisks/AddRisks';

const Manage = (props) => {
  const [projectId, setProjectId] = useState(props.projectId);
  const [userId, setUserId] = useState(props.userId);
  const [riskId, setRiskId] = useState(props.riskId);
  const [strategic, setStrategic] = useState("");
  const [responseCost, setbaseResponseCost] = useState("");
  const [newProb, setNewProb] = useState("");
  const [newImpact, setNewImpact] = useState("");
  const [answerName, setAnswerName] = useState("");

  const onChangeAnswerName = (txtAnswerName) => {
    setAnswerName(txtAnswerName);
  };
  const onChangeStrategic = (txtStrategic) => {
    setStrategic(txtStrategic);
  };
  const onChangeResponseCost = (txtResponseCost) => {
    setbaseResponseCost(txtResponseCost);
  };
  const onChangeNewProb = (txtNewProb) => {
    setNewProb(txtNewProb);
  };
  const onChangeNewImpact = (txtNewImpact) => {
    setNewImpact(txtNewImpact);
  };

  const Manage = () => {
    database().ref(`/Riscos/${riskId}`).update({
      Resposta: answerName,
      Estrategia: strategic,
      CustoResposta: responseCost,
      NovaProbabilidade: newProb,
      NovoImpacto: newImpact,
      Gerido: true,
    });

    Alert.alert("Risco Gerido");
    // Actions.Risk({
    //   nameRisk: props.nameRisk,
    //   probRisk: props.probRisk,
    //   impactRisk: props.impactRisk,
    //   typeRisk: props.typeRisk,
    //   dateRisk: props.dateRisk,
    //   userId: userId,
    //   projectId: projectId,
    //   riskId: riskId,
    // });
  };

  return (
    <View>
      <Text style={{ fontSize: 15 }}>Resposta Planejada</Text>
      <TextInput
        value={answerName}
        onChangeText={(txtAnswerName) => onChangeAnswerName(txtAnswerName)}
      />
      <Text style={{ fontSize: 15 }}>Estrategia</Text>
      <TextInput
        value={strategic}
        onChangeText={(txtStrategic) => onChangeStrategic(txtStrategic)}
      />
      <Text style={{ fontSize: 15 }}>Custo Resposta</Text>
      <TextInput
        value={responseCost}
        onChangeText={(txtResponseCost) =>
          onChangeResponseCost(txtResponseCost)
        }
      />

      <Text style={{ fontSize: 15 }}>Nova Probabilidade</Text>
      <TextInput
        value={newProb}
        onChangeText={(txtNewProb) => onChangeNewProb(txtNewProb)}
      />

      <Text style={{ fontSize: 15 }}>Novo Impacto</Text>
      <TextInput
        value={newImpact}
        onChangeText={(txtNewImpact) => onChangeNewImpact(txtNewImpact)}
      />
      <Button title="Gerir" onPress={Manage}></Button>
    </View>
  );
};

export default Manage;
