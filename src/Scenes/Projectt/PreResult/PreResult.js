import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../../../../firebaseconection";

//import AddRisksHome from './addRisks/AddRisks';

const PreResult = (props) => {
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

  const Calculate = () => {
    database()
      .ref(`/Projetos/${projectId}`)
      .once("value")
      .then((snapshot) => {
        setProject(snapshot.val());
      });
      
    project.risksId.map((r) => {
      database()
      .ref(`/Riscos/${r}`)
      .once("value")
      .then((snapshot) => {
        setRisk(snapshot.val());
      });

      setRiskValues(risk.NovoProb x risk.NovoImpacto);

      if (risk.TipoRisco = "Oportunidade")
      {
        setRiskValuesPositive(risk.NovoImpacto);
      }

      if (risk.TipoRisco = "Ameaca")
      {
        setRiskValuesNegative(risk.NovoImpacto);
      }

    });      

    this.riskValues.map((r) => { 
      setExpectedValueRisk(expectedValueRisk + r);
    });
    this.riskValuesPositive.map((r) => { 
      setExpectedValueRiskPos(expectedValueRiskPos + r);
    });
    this.riskValuesNegative.map((r) => { 
      setExpectedValueRiskNeg(expectedValueRiskNeg + r);
    });
    setExpectedValue(baseValue + expectedValueRisk);
    setBestCase(baseValue + expectedValueRiskPos);
    setWorstCase(baseValue + expectedValueRiskNeg);

    database().ref(`/Projetos/${projectId}`).update({
      ValorEsperado: expectedValue,
      PiorCaso: worstCase,
      MelhorCaso: bestCase,
    });
  };

  return (
    <View>
      <Text style={{ fontSize: 15 }}>Valor Esperado</Text>
      <Text>{expectedValue}</Text>

      <Text style={{ fontSize: 15 }}>Pior Caso</Text>
      <Text>{worstCase}</Text>

      <Text style={{ fontSize: 15 }}>Melhor Caso</Text>
      <Text>{bestCase}</Text>

      <Button title="Calcular" onPress={Calculate}></Button>
    </View>
  );
};

export default PreResult;
