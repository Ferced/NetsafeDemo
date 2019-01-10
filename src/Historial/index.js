import React, { Component } from "react";
import Historial from "./HistorialScreen.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator(
  {
    Historial: { screen: Historial },
  },
  {
    initialRouteName: "Historial"
  }
));
