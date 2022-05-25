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
        Calculate();
      });
  }, []);

  const Calculate = () => {};

  if (!project) {
    return (
      <View>
        <Text>Carregando</Text>
      </View>
    );
  }

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

      {/* <Button title="Calcular" onPress={Calculate}></Button> */}
    </View>
  );
};

export default PreResult;
