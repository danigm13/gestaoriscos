import React, { useState, useEffect } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { database } from "firebase";

const Menu = (props) => {
  const [userId, setUserId] = useState(props.userId);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    database()
      .ref("/Projetos")
      .on("value", (snapshot) => {
        const array = [];
        snapshot.forEach((data) => {
          array.push({
            id: data.key,
            nome: data.val().Nome,
          });
        });

        setProjects(array);
      });
  }, []);

  const Projects = () => {
    return projects.map(({ id, nome }, index) => (
      <TouchableOpacity
        key={index}
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        onPress={() => Actions.Projectt({ userId: userId, projectId: id })}
      >
        <Text>{id}</Text>
        <Text>{nome}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View>
      {/* <TouchableOpacity
        onPress={() =>
          Actions.Projectt({ userId: userId, projectId: "projectId" })
        }
      >
        {Projects()}
      </TouchableOpacity> */}
      {Projects()}
      <Button
        title="Criar Projeto"
        onPress={() => Actions.CreateProject({ userId: userId })}
      ></Button>
    </View>
  );
};

export default Menu;
