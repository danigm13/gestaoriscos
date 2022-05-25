import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Scene, Router } from "react-native-router-flux";
import { useDispatch, useSelector } from "react-redux";

import Teste from "./Teste";
import Home from "./Home";
import Menu from "./Menu";
import LoginFail from "./Login/LoginFail";
import Register from "./Register";
import PasswordsNotEqual from "./Register/PasswordsNotEqual";
import RegisterFail from "./Register/RegisterFail";
import RegisterSucess from "./Register/RegisterSucess";
import Projectt from "./Projectt";
import CreateProject from "./Projectt/CreateProject";
import AddRisks from "./Risk/AddRisks";
import EditRisk from "./Risk/EditRisk";
import EditProject from "./Projectt/EditProject";
import Manage from "./Projectt/Manage";
import PosResult from "./Projectt/PosResult";
import PreResult from "./Projectt/PreResult";
import RisksMenu from "./Risk/RisksMenu";
import Risk from "./Risk";

const Routes = () => {
  const dispatch = useDispatch();
  const firstAppStore = useSelector((store) => store.AppReducer.first_time);

  return (
    <View style={styles.container}>
      <Router>
        <Scene key={"app"}>
          {/* {firstAppStore && (
            <Scene key="Intro" component={Intro} hideNavBar initial />
          )} */}
          <Scene key="Home" component={Home} hideNavBar initial />
          <Scene key="Menu" component={Menu} />
          <Scene key="LoginFail" component={LoginFail} />
          <Scene key="Register" component={Register} />
          <Scene key="PasswordsNotEqual" component={PasswordsNotEqual} />
          <Scene key="RegisterFail" component={RegisterFail} />
          <Scene key="RegisterSucess" component={RegisterSucess} />
          <Scene key="Projectt" component={Projectt} />
          <Scene key="CreateProject" component={CreateProject} />
          <Scene key="EditProject" component={EditProject} />
          <Scene key="Manage" component={Manage} />
          <Scene key="PosResult" component={PosResult} />
          <Scene key="PreResult" component={PreResult} />
          <Scene key="AddRisks" component={AddRisks} />
          <Scene key="EditRisk" component={EditRisk} />
          <Scene key="RisksMenu" component={RisksMenu} />
          <Scene key="Risk" component={Risk} />
        </Scene>
      </Router>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    height: "100%",
  },
});

export default Routes;
