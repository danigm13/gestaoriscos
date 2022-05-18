import React, { useState, useEffect } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { database } from "firebase";

const RisksMenu = (props) => {
  const [projectId, setProjectId] = useState(props.projectId);
  const [userId, setUserId] = useState(props.userId);
  const [project, setProject] = useState();
  const [risk, setRisk] = useState();
  const [risks, setRisks] = useState([]);

  const GetRisks = () => {
    // database()
    //   .ref(`/Projetos/-Mf5YrDjYEqCtl34m8MS`)
    //   .once("value")
    //   .then((snapshot) => {
    //     setProject(snapshot.val());
    //   });
    useEffect(() => {
      setTimeout(async () => {
        database()
          .ref(`/Projetos/-Mf5YrDjYEqCtl34m8MS`)
          .once("value")
          .then((snapshot) => {
            setProject(snapshot.val());
          });
      }, 10000);
    }, []);
    console.log("project:", project);
    if (typeof project === "undefined") {
      console.log("dentro");
      return (
        <View>
          <Text>Nenhum Risco Cadastrado</Text>
        </View>
      );
    } else {
      console.log("dentro else");
      var p = new Object();
      p = project;
      setRisks([]);
      console.log(p);
      console.log(p.Riscos);

      useEffect(() => {
        p.Riscos.map((r) => {
          // database()
          //   .ref(`/Riscos/${r}`)
          //   .once("value")
          //   .then((snapshot) => {
          //     setRisk(snapshot.val());
          //   });
          useEffect(() => {
            setTimeout(async () => {
              database()
                .ref(`/Riscos/${r}`)
                .once("value")
                .then((snapshot) => {
                  setRisk(snapshot.val());
                  console.log("snapshot: ", snapshot.val());
                });
            }, 10000);
          }, []);

          // var ris = new Object();
          // ris = risk;
          // console.log("ris: ", ris);

          setTimeout(async () => {
            var ris = new Object();
            ris = risk;
            console.log("ris: ", ris);
            console.log("risk: ", risk);
          }, 10000);
          // setRisks(risks?.push(ris));
          console.log("risks.NomeRisco: ", risks.NomeRisco);
          console.log("risks.Probabilidade: ", risks.Probabilidade);
          console.log("risks.ImpactoRisco: ", risks.ImpactoRisco);
        });
      }, []);
    }
    return (
      <View>
        {risks.map((r, index) => {
          return (
            <View key={index}>
              <Text>{r?.NomeRisco}</Text>
              <Text>{r?.Probabilidade}</Text>
              <Text>{r?.ImpactoRisco}</Text>
            </View>
          );
        })}
      </View>
    );
  };

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
        {GetRisks()}
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
