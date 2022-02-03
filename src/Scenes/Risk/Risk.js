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
      <Text>risco.nome</Text>
      <Text style={{ fontSize: 15 }}>Tipo</Text>
      <Text>risco.Tipo</Text>
      <Text style={{ fontSize: 15 }}>Probabilidade</Text>
      <Text>risco.Probabilidade</Text>
      <Text style={{ fontSize: 15 }}>Impacto</Text>
      <Text>risco.Impacto</Text>
      <Text style={{ fontSize: 15 }}>Data</Text>
      <Text>risco.Data</Text>
      <Button
        title="Editar"
        onPress={() =>
          Actions.EditRisk({
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
