import React, { useState } from "react";
import { View, Text } from "react-native";

const Teste = (props) => {
  const [component, setComponent] = useState(props.component);
  const [component2, setComponent2] = useState(props.component2);
  const [userId, setUserId] = useState(props.userId);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> BOLONA </Text>
      <Text> {component} </Text>
      <Text> {component2} </Text>
      <Text> {userId} </Text>
    </View>
  );
};

export default Teste;
