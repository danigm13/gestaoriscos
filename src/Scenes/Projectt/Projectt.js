import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import firebase from "../../../firebaseconection";

// import EditProjectHome from "./EditProject/EditProject";
// import PreResultProjectHome from "./PreResult/PreResult";
// import PosResultProjectHome from "./PosResult/PosResult";
// import RisksMenuHome from "./Risk/RisksMenu/RisksMenu";

const Projectt = (props) => {
  const [projectId, setProjectId] = useState(props.projectId);
  const [userId, setUserId] = useState(props.userId);

  return (
    <View>
      <Text style={{ fontSize: 15 }}>Nome</Text>
      <Text>{props.projectName}</Text>
      <Text style={{ fontSize: 15 }}>Valor Base</Text>
      <Text>{props.projectVB}</Text>
      <Button
        title="Editar Projeto"
        onPress={() =>
          Actions.EditProject({ userId: userId, projectId: projectId })
        }
      />
      <Button
        title="Registro de Riscos"
        onPress={() =>
          Actions.RisksMenu({ userId: userId, projectId: projectId })
        }
      />
      <Button
        title="Resultado Pre Gestao"
        onPress={() =>
          Actions.PreResult({ userId: userId, projectId: projectId })
        }
      />
      <Button
        title="Resultado Pos Gestao"
        onPress={() =>
          Actions.PosResult({ userId: userId, projectId: projectId })
        }
      />
    </View>
  );
};

export default Projectt;
