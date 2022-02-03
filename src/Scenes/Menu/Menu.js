import React, { useState } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../../../firebaseconection";
import { Actions } from "react-native-router-flux";

import LoginHome from "../Home";
import CreateProject from "../Projectt/CreateProject/CreateProject";
import Project from "../Projectt/Projectt";
import { database } from "firebase";

const Menu = (props) => {
  const [userId, setUserId] = useState(props.userId);
  const [projects, setProjects] = useState([]);

  const Projects = () => {
    database()
      .ref("/Projetos")
      .once("value")
      .then((snapshot) => {
        setProjects(snapshot.val());
      });

    // projects = projects
    //   .filter(function (item) {
    //     return item.UserId == userId;
    //   })
    //   .map(function ({ Nome, ValorBase, UserId }) {
    //     return { Nome, ValorBase, UserId };
    //   });

    // const result = projects.filter((item) => item.UserId === userId);

    // console.log(projects.find((data) => data.UserId === userId));

    // projects.forEach((data, index) => {
    //   return (
    //     <View>
    //       <Text>{data.UserId}</Text>
    //       <Text>3.000.000,00</Text>
    //     </View>
    //   );
    // });

    return (
      <View>
        <Text>Teste</Text>
        <Text>3.000.000,00</Text>
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          Actions.Projectt({ userId: userId, projectId: "projectId" })
        }
      >
        {Projects()}
      </TouchableOpacity>
      <Button
        title="Criar Projeto"
        onPress={() => Actions.CreateProject({ userId: userId })}
      ></Button>
    </View>
  );
};

export default Menu;
