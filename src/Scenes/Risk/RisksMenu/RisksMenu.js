import React, { useState } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import firebase from "../../../../firebaseconection";

const RisksMenu = (props) => {
  const [projectId, setProjectId] = useState(props.projectId);
  const [userId, setUserId] = useState(props.userId);

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          Actions.Risk({
            userId: userId,
            projectId: projectId,
            riskId: "teste",
          })
        }
      >
        <Text>Greve Fornecedores</Text>
        <Text>50%</Text>
        <Text>500.000</Text>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Actions.Risk({
            userId: userId,
            projectId: projectId,
            riskId: "teste",
          })
        }
      >
        <Text>Prototipo Funciona de primeira</Text>
        <Text>20%</Text>
        <Text>200.000 </Text>
        <Text></Text>
      </TouchableOpacity>

      <Button
        title="Adicionar Novo Risco"
        onPress={() =>
          Actions.AddRisks({ userId: userId, projectId: projectId })
        }
      />
    </View>
  );
};

export default RisksMenu;
