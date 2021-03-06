import React, { useState, useEffect } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { database } from "firebase";

const RisksMenu = (props) => {
  const [projectId, setProjectId] = useState(props.projectId);
  const [userId, setUserId] = useState(props.userId);
  const [project, setProject] = useState();
  const [risk, setRisk] = useState();

  useEffect(() => {
    database()
      .ref(`/Projetos/${props.projectId}`)
      .once("value")
      .then((snapshot) => {
        const project2 = snapshot.val();
        // console.log("project", project2);
        const newProject = {
          ...project2,
          Riscos: [],
        };

        project2.Riscos.map((Rsid) => {
          database()
            .ref(`/Riscos/${Rsid}`)
            .on("value", (snapshot2) => {
              const risco = snapshot2.val();
              console.log("risco", risco);
              const r = {
                ...risco,
                Id: Rsid,
              };
              setRisk(r);
              console.log("r", r);
              newProject.Riscos.push(r);
            });
        });

        setProject(newProject);
        // GetRisks();
      });
  }, []);

  const GetRisks = () => {
    // console.log("risk", risk);
    // console.log("project", project);

    if (risk == undefined || project == undefined) {
      return (
        <View>
          <Text>Carregando</Text>
        </View>
      );
    } else if (project.Riscos[0] == undefined) {
      return (
        <View>
          <Text>Carregando</Text>
        </View>
      );
    } else {
      return project.Riscos.map(
        (
          {
            NomeRisco,
            Probabilidade,
            ImpactoRisco,
            Id,
            TipoRisco,
            DataValidade,
          },
          index
        ) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              Actions.Risk({
                nameRisk: NomeRisco,
                probRisk: Probabilidade,
                impactRisk: ImpactoRisco,
                typeRisk: TipoRisco,
                dateRisk: DataValidade,
                userId: userId,
                projectId: projectId,
                riskId: Id,
              })
            }
          >
            <Text style={{ fontSize: 15 }}>Nome: </Text>
            <Text>{NomeRisco}</Text>
            <Text style={{ fontSize: 15 }}>Probabilidade: </Text>
            <Text>{Probabilidade}</Text>
            <Text style={{ fontSize: 15 }}>Impacto: </Text>
            <Text>{ImpactoRisco}</Text>
            <Text>--</Text>
          </TouchableOpacity>
        )
      );
    }
  };

  return (
    <View>
      {GetRisks()}
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
