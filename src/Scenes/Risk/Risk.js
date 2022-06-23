import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import firebase from "../../../firebaseconection";

const Risk = (props) => {
  const [projectId, setProjectId] = useState(props.projectId);
  const [userId, setUserId] = useState(props.userId);
  const [riskId, setRiskId] = useState(props.riskId);

  return (
    <View>
      <Text style={{ fontSize: 15 }}>Nome</Text>
      <Text>{props.nameRisk}</Text>
      <Text style={{ fontSize: 15 }}>Tipo</Text>
      <Text>{props.typeRisk}</Text>
      <Text style={{ fontSize: 15 }}>Probabilidade</Text>
      <Text>{props.probRisk}</Text>
      <Text style={{ fontSize: 15 }}>Impacto</Text>
      <Text>{props.impactRisk}</Text>
      <Text style={{ fontSize: 15 }}>Data</Text>
      <Text>{props.dateRisk}</Text>
      <Button
        title="Editar"
        onPress={() =>
          Actions.EditRisk({
            nameRisk: props.nameRisk,
            probRisk: props.probRisk,
            impactRisk: props.impactRisk,
            typeRisk: props.typeRisk,
            dateRisk: props.dateRisk,
            userId: userId,
            projectId: projectId,
            riskId: riskId,
          })
        }
      />
      <Button
        title="Gerir"
        onPress={() =>
          Actions.Manage({
            nameRisk: props.nameRisk,
            probRisk: props.probRisk,
            impactRisk: props.impactRisk,
            typeRisk: props.typeRisk,
            dateRisk: props.dateRisk,
            userId: userId,
            projectId: projectId,
            riskId: riskId,
          })
        }
      />
    </View>
  );
};

export default Risk;
