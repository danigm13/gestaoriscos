import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../../../firebaseconection";
import { Actions } from "react-native-router-flux";

import LoginHome from "../Home";
import RegisterFail from "./RegisterFail/RegisterFail";
import passwordsNotEqual from "./PasswordsNotEqual/PasswordsNotEqual";

const Register = () => {
  function Sucess() {
    Actions.Home();
  }

  function Fail() {
    Actions.RegisterFail();
  }
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail);
  };
  const onChangeConfirmEmail = (txtConfirmEmail) => {
    setConfirmEmail(txtConfirmEmail);
  };
  const onChangePassword = (txtPassword) => {
    setPassword(txtPassword);
  };
  const onChangeConfirmPassword = (txtConfirmPassword) => {
    setConfirmPassword(txtConfirmPassword);
  };

  const Register = () => {
    if (password == confirmPassword && email == confirmEmail) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          Sucess();
        })
        .catch(() => {
          Fail();
        });
    } else Actions.PasswordsNotEqual();
  };

  return (
    <View>
      <Text style={{ fontSize: 15 }}>Email</Text>
      <TextInput
        value={email}
        onChangeText={(txtEmail) => onChangeEmail(txtEmail)}
      ></TextInput>
      <Text style={{ fontSize: 15 }}>Confirme o Email</Text>
      <TextInput
        value={confirmEmail}
        onChangeText={(txtConfirmEmail) =>
          onChangeConfirmEmail(txtConfirmEmail)
        }
      ></TextInput>
      <Text style={{ fontSize: 15 }}>Senha</Text>
      <TextInput
        secureTextEntry={true}
        value={password}
        onChangeText={(txtPassword) => onChangePassword(txtPassword)}
      ></TextInput>
      <Text style={{ fontSize: 15 }}>Confirme a Senha</Text>
      <TextInput
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(txtConfirmPassword) =>
          onChangeConfirmPassword(txtConfirmPassword)
        }
      ></TextInput>
      <Button title="Cadastrar" onPress={Register}></Button>
    </View>
  );
};

export default Register;
