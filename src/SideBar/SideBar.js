import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
}
from "native-base";
const routes = ["Cash Dispenser", "Control Remoto","Balance","Configuracion"];
export default class SideBar extends React.Component {
  render() {
    function cambiarNombre(nombre){
    if (nombre=="Cash Dispenser"){
      nombre="HomeScreen"
    }
    if (nombre=="Control Remoto"){
      nombre="Perfil"
    }
    if (nombre=="Balance"){
      nombre="Confirmacion"
    }
    return nombre
    }

    return (
      <Container style={{backgroundColor:"#403F44"}}>
        <Content>
          <Image
            source={{
              // uri:
                // "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              // height: 120,
              // width: "100%",
              // alignSelf: "stretch",
              // position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: "absolte",
              alignSelf: "center",
              top: 20
            }}
            source={
              require("./Netlo.jpg")}
            style={{
              width: 250, height: 100, bottom: 0,
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (

                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(cambiarNombre(data))}
                >


                  <Text style={{color:'white'}}>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
