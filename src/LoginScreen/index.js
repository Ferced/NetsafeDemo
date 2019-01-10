import React, { Component } from "react";
import Login from "./Login.js";
import HomeScreen from "../HomeScreen/HomeScreen.js";
import Autorizar from "../HomeScreen/Autorizar.js";
// import MainScreenNavigator from "../ChatScreen/index.js";
import Perfil from "../ProfileScreen/index.js";
import Confirmacion from "./../HomeScreen/Confirmacion.js";
import Historial from "../Historial/index.js";
import SideBar from "../SideBar/SideBar.js";

import { StackNavigator } from "react-navigation";
import { DrawerNavigator } from "react-navigation";

const LoginScreenRouter = DrawerNavigator(
  {
    Home: { screen: Login },
    // Chat: { screen: MainScreenNavigator },
    Perfil: { screen: Perfil },
    Historial: { screen: Historial },
    HomeScreen: {screen: HomeScreen},
    Confirmacion: {screen: Confirmacion},
    Autorizar: {screen: Autorizar},

  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default LoginScreenRouter;
