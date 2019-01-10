import React, { Component } from "react";
import Perfil from "./Perfil.js";
import EditScreenOne from "./EditScreenOne.js";
import EditScreenTwo from "./EditScreenTwo.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator(
  {
    Perfil: { screen: Perfil },
    EditScreenOne: { screen: EditScreenOne },
    EditScreenTwo: { screen: EditScreenTwo }
  },
  {
    initialRouteName: "Perfil"
  }
));
