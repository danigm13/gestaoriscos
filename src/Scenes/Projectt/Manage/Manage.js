import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../../../../firebaseconection";

//import AddRisksHome from './addRisks/AddRisks';

const Manage = (props) => {
  const [projectId, setProjectId] = useState(props.projectId);
  const [userId, setUserId] = useState(props.userId);
  const [riskId, setRiskId] = useState(props.riskId);
  const [strategic, setStrategic] = useState("");
  const [responseCost, setbaseResponseCost] = useState("");
  const [newProb, setNewProb] = useState("");
  const [newImpact, setNewImpact] = useState("");
  const [answerName, setanswerName] = useState("");

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
    });
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
