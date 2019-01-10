
import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import Confirmacion from "./../HomeScreen/Confirmacion.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator(
  {
     Home: { screen: HomeScreen },
     Confirmacion: { screen: Confirmacion }
  },
  {
    initialRouteName: "Home"
  }
));
