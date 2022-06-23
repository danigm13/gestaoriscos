import React, { useState, useEffect } from "react";
import { Button, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { database } from "firebase";

//import AddRisksHome from './addRisks/AddRisks';

const PreResult = (props) => {
  const [userId, setUserId] = useState(props.userId);

  const [expectedValue, setExpectedValue] = useState(0);
  const [worstCase, setWorstCase] = useState(0);
  const [bestCase, setBestCase] = useState(0);
  const [project, setProject] = useState(null);
  const [risk, setRisk] = useState([]);
  const [riskValues, setRiskValues] = useState([]);
  const [riskValuesPositive, setRiskValuesPositive] = useState([]);
  const [riskValuesNegative, setRiskValuesNegative] = useState([]);
  const [expectedValueRisk, setExpectedValueRisk] = useState(0);
  const [expectedValueRiskPos, setExpectedValueRiskPos] = useState(0);
  const [expectedValueRiskNeg, setExpectedValueRiskNeg] = useState(0);
  const [baseValue, setBaseValue] = useState(0);

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
        // Calculate();
      });
  }, []);

  const Calculate = () => {
    // console.log("project.Riscos: ", project.Riscos);
    const riskVP = [];
    const riskVN = [];
    const vp = [];
    const vn = [];

    setBaseValue(project.ValorBase);
    project.Riscos.forEach((ris) => {
      if (ris.TipoRisco == "Oportunidade") {
        riskVP.push(parseInt(ris.ImpactoRisco));
        vp.push(parseInt(ris.Probabilidade) * parseInt(ris.ImpactoRisco / 100));
      }

      if (ris.TipoRisco == "Ameaca") {
        riskVN.push(parseInt(ris.ImpactoRisco));
        vn.push(parseInt(ris.Probabilidade) * parseInt(ris.ImpactoRisco / 100));
      }
    });
    setRiskValuesPositive(riskVP);
    setRiskValuesNegative(riskVN);

    console.log("riskValues: ", riskValues);
    console.log("riskValuesPositive: ", riskValuesPositive);
    console.log("riskValuesNegative: ", riskValuesNegative);
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
    console.log("expectedValueRiskPos: ", expectedValueRiskPos);

    var rVN = 0;
    riskValuesNegative.map((r) => {
      rVN = rVN + r;
    });
    setExpectedValueRiskNeg(rVN);
    console.log("expectedValueRiskNeg: ", expectedValueRiskNeg);

    setExpectedValue(parseInt(baseValue) + expectedValueRisk);
    setBestCase(parseInt(baseValue) - expectedValueRiskPos);
    setWorstCase(parseInt(baseValue) + expectedValueRiskNeg);
  };

  if (!project || project == undefined) {
    return (
      <View>
        <Text>Carregando</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={{ fontSize: 15 }}>Valor Base</Text>
        <Text>{baseValue}</Text>

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

export default PreResult;
