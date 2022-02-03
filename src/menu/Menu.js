// import React, { useState } from "react";
// import { Button, View, Text, TouchableOpacity } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { TextInput } from "react-native-gesture-handler";
// import firebase from "../../firebaseconection";

// import LoginHome from "../Scenes/Home";
// import CreateProject from "../createProject/CreateProject";
// import Project from "../project/Project";
// import { database } from "firebase";

// function MenuHome({ navigation }) {
//   const [pro, setPro] = useState([]);

//   var Projects = database()
//     .ref("Projetos")
//     .once("value")
//     .then((snapshot) => {
//       setPro(snapshot.val());
//     });

//   return (
//     <View>
//       {/* <div>
// 				{pro.map((project) => (
// 					<div key={project.key}>
// 						<Text>{project.Nome}</Text>
// 						<Text>{project.ValorBase}</Text>
// 					</div>
// 				))}
// 			</div> */}
//       <TouchableOpacity onPress={() => navigation.navigate("Projeto")}>
//         <Text>Projeto Teste</Text>
//         <Text>3.000.000,00</Text>
//       </TouchableOpacity>

//       <Button
//         title="Criar Projeto"
//         onPress={() => navigation.navigate("Criar Projeto")}
//       ></Button>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function MenuForm() {
//   return (
//     <Stack.Navigator headerMode="screen">
//       <Stack.Screen
//         options={{ headerShown: false }}
//         name="Menu"
//         component={MenuHome}
//       />
//       <Stack.Screen
//         options={{ headerShown: false }}
//         name="Login"
//         component={LoginHome}
//       />
//       <Stack.Screen name="Criar Projeto" component={CreateProject} />
//       <Stack.Screen name="Projeto" component={Project} />
//     </Stack.Navigator>
//   );
// }

// export default MenuForm;
