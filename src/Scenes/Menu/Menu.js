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
            valorbase: data.val().ValorBase,
          });
        });

        setProjects(array);
      });
  }, []);

  const Projects = () => {
    if (!projects || projects == undefined) {
      return (
        <View>
          <Text>Nenhum Projeto Cadastrado</Text>
        </View>
      );
    } else {
      return projects.map(({ valorbase, nome, id }, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            Actions.Projectt({
              userId: userId,
              projectId: id,
              projectName: nome,
              projectVB: valorbase,
            })
          }
        >
          <Text style={{ fontSize: 15 }}>Nome: </Text>
          <Text>{nome}</Text>
          <Text style={{ fontSize: 15 }}>Valor Base: </Text>
          <Text>{valorbase}</Text>
          <Text>--</Text>
        </TouchableOpacity>
      ));
    }
  };

  return (
    <View>
      {Projects()}
      <Button
        title="Criar Projeto"
        onPress={() => Actions.CreateProject({ userId: userId })}
      ></Button>
    </View>
  );
};

export default Menu;
