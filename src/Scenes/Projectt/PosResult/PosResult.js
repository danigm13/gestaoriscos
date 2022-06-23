import React, { useState, useEffect } from "react";
import { Button, View, Text, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../../../../firebaseconection";
import { Actions } from "react-native-router-flux";
import { database } from "firebase";

//import AddRisksHome from './addRisks/AddRisks';

const PosResult = (props) => {
  const [projectId, setProjectId] = useState(props.projectId);
  const [userId, setUserId] = useState(props.userId);

  const [expectedValue, setExpectedValue] = useState("");
  const [worstCase, setWorstCase] = useState("");
  const [bestCase, setBestCase] = useState("");
  const [project, setProject] = useState();
  const [risk, setRisk] = useState([]);
  const [riskValues, setRiskValues] = useState([]);
  const [riskValuesPositive, setRiskValuesPositive] = useState([]);
  const [riskValuesNegative, setRiskValuesNegative] = useState([]);
  const [expectedValueRisk, setExpectedValueRisk] = useState("");
  const [expectedValueRiskPos, setExpectedValueRiskPos] = useState("");
  const [expectedValueRiskNeg, setExpectedValueRiskNeg] = useState("");
  const [baseValue, setBaseValue] = useState("");
  const [newBaseValue, setNewBaseValue] = useState("");
  const [riskCosts, setRiskCosts] = useState([]);
  const [riskCostsSom, setRiskCostsSom] = useState("");

  useEffect(() => {
    database()
      .ref(`/Projetos/${props.projectId}`)
      .once("value")
      .then((snapshot) => {
        const project = snapshot.val();
        const newProject = {
          ...project,
          Riscos: [],
        };

        project.Riscos.map((risco) => {
          database()
            .ref(`/Riscos/${risco}`)
            .on("value", (snapshot2) => {
              const risco = snapshot2.val();
              newProject.Riscos.push(risco);
            });
        });

        setProject(newProject);
      });
  }, []);

  const Calculate = () => {
    const riskVP = [];
    const riskVN = [];
    const vp = [];
    const vn = [];
    const cost = [];

    setBaseValue(project.ValorBase);
    project.Riscos.forEach((ris) => {
      if (ris.Gerido == false) {
        console.log("dentro");
        return Alert.alert("Riscos não foram geridos");
      }
      console.log("fora");

      if (ris.TipoRisco == "Oportunidade") {
        riskVP.push(parseInt(ris.NovoImpacto));
        vp.push(
          parseInt(ris.NovaProbabilidade) * parseInt(ris.NovoImpacto / 100)
        );
      }

      if (ris.TipoRisco == "Ameaca") {
        riskVN.push(parseInt(ris.NovoImpacto));
        vn.push(
          parseInt(ris.NovaProbabilidade) * parseInt(ris.NovoImpacto / 100)
        );
      }

      cost.push(parseInt(ris.CustoResposta));
    });

    setRiskValuesPositive(riskVP);
    setRiskValuesNegative(riskVN);
    setRiskCosts(cost);

    var rVvp = 0;
    vp.map((r) => {
      rVvp = rVvp + r;
    });
    var rVvn = 0;
    vn.map((r) => {
      rVvn = rVvn + r;
    });
    console.log("N: ", rVvn);
    console.log("P: ", rVvp);
    setExpectedValueRisk(rVvn - rVvp);
    console.log("expectedValueRisk: ", expectedValueRisk);

    var rVP = 0;
    riskValuesPositive.map((r) => {
      rVP = rVP + r;
    });
    setExpectedValueRiskPos(rVP);

    var rVN = 0;
    riskValuesNegative.map((r) => {
      rVN = rVN + r;
    });
    setExpectedValueRiskNeg(rVN);

    var cM = 0;
    riskCosts.map((r) => {
      cM = cM + r;
    });
    setRiskCostsSom(cM);

    console.log("baseValue: ", baseValue);
    setNewBaseValue(parseInt(baseValue) + riskCostsSom);
    setExpectedValue(parseInt(baseValue) + expectedValueRisk);
    setBestCase(parseInt(baseValue) - expectedValueRiskPos);
    setWorstCase(parseInt(baseValue) + expectedValueRiskNeg);

    database().ref(`/Projetos/${projectId}`).update({
      NovoValorBase: newBaseValue,
      ValorEsperado: expectedValue,
      PiorCaso: worstCase,
      MelhorCaso: bestCase,
    });
  };

  if (!project || project == undefined || project.Riscos.Gerido == false) {
    return (
      <View>
        <Text>Carregando</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={{ fontSize: 15 }}>Novo Valor Base</Text>
        <Text>{newBaseValue}</Text>

        <Text style={{ fontSize: 15 }}>Valor Esperado</Text>
        <Text>{expectedValue}</Text>

        <Text style={{ fontSize: 15 }}>Pior Caso</Text>
        <Text>{worstCase}</Text>

        <Text style={{ fontSize: 15 }}>Melhor Caso</Text>
        <Text>{bestCase}</Text>

        <Button title="Calcular" onPress={Calculate}></Button>
      </View>
    );
  }
};

export default PosResult;
