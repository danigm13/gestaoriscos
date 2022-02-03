import * as React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../../firebaseconection";
import { Actions } from "react-native-router-flux";

function Home({ navigation }) {
  function Sucess() {
    Actions.Menu({ userId: firebase.auth().currentUser.uid });
  }

  function Fail() {
    Actions.LoginFail();
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail);
  };
  const onChangePassword = (txtPassword) => {
    setPassword(txtPassword);
  };

  const login = () =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Sucess();
      })
      .catch(() => {
        Fail();
      });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 28 }}>
        Gestão de Riscos em Projetos
        {"\n"}
      </Text>
      <Text>{"\n"}</Text>
      <Text style={{ fontSize: 15 }}>Email</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 250,
        }}
        value={email}
        onChangeText={(txtEmail) => onChangeEmail(txtEmail)}
      ></TextInput>
      <Text style={{ fontSize: 15 }}>Senha</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, width: 250 }}
        secureTextEntry={true}
        value={password}
        onChangeText={(txtPassword) => onChangePassword(txtPassword)}
      ></TextInput>
      <Text>{"\n"}</Text>
      <Button title="Entrar" onPress={login}></Button>
      <Text>{"\n"}</Text>
      <Button title="Cadastro" onPress={() => Actions.Register()} />
      <Button
        title="TESTE"
        onPress={() =>
          Actions.Teste({ component: "BANANA", component2: "MACA" })
        }
      />
    </View>
  );
}

export default Home;
