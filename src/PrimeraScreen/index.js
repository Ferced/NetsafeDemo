import React, { Component } from "react";
import Login from "./LoginScreen/Login.js";
import Presentacion from "./PrimeraScreen/Presentacion.js";
import HomeScreen from "../HomeScreen/HomeScreen.js";
// import MainScreenNavigator from "../ChatScreen/index.js";
import Perfil from "../ProfileScreen/index.js";
import Historial from "../Historial/index.js";
import SideBar from "../SideBar/SideBar.js";
import { StackNavigator } from "react-navigation";
import { DrawerNavigator } from "react-navigation";

const LoginScreenRouter = DrawerNavigator(
  {
    Home: { screen: Presentacion },
    Login: {screen: Login}
    // Chat: { screen: MainScreenNavigator },
    Perfil: { screen: Perfil },
    Historial: { screen: Historial },
    HomeScreen: {screen: HomeScreen}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default LoginScreenRouter;
