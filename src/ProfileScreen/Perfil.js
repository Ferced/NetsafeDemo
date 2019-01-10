import React from "react";
import { StatusBar, ScrollView,AppRegistry, Alert, TextInput, List, ListItem, Image,Animated,} from "react-native";
import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1,View


} from "native-base";

import { createStackNavigator } from "react-navigation";
import EditScreenOne from "./EditScreenOne.js";
import RNPickerSelect from 'react-native-picker-select';
import PickerExample from './../HomeScreen/PickerExample.js'

export default class Profile extends React.Component {
   componentDidMount() {
    this.fadeIn();
    if (this.props.navigation.state.params !== undefined) {
      Alert.alert("USER found", this.props.navigation.state.params.name);
    }
  }
  constructor (props) {
    super (props);
    this.state = { text: '',fadeIn: new Animated.Value(0),
                    fadeOut: new Animated.Value(1), };
  }

   fadeIn() {
     this.state.fadeIn.setValue(0)                  
     Animated.timing(
       this.state.fadeIn,           
       {
         toValue: 1,                   
         duration: 2000,              
       }
     ).start(() => this.fadeOut());                        
  }

  fadeOut() {
    this.state.fadeIn.setValue(1)
    Animated.timing(                  
       this.state.fadeIn,            
       {
         toValue: 0,                   
         duration: 2000,              
       }
    ).start(() => this.fadeIn());                        
  }

  render() {
    return (
      <Container style={{backgroundColor:'#E6E7E9'}}>


 <View style={{top:35,left:20}}>
        <Text style={{fontSize:15,fontWeight:'500',color:'grey'}}> Seleccione equipo </Text>
        </View>
        <PickerExample />
        <View style={{backgroundColor:'#A6AAAB',height: 75, marginTop:10}}>
        <Text style={{color:'white',fontWeight: '500',fontSize:15,fontFamily:'Roboto', top:29,left:30}}> CONTROL REMOTO</Text>
        </View>
        <View style={{backgroundColor:'#158F94',height: 14}}>
        </View>
        <View >
        <View style={{top:54,left:60}}>
        <Text style={{fontSize:15,fontWeight:'500',color:'grey'}}> Estado puerta </Text>
        </View>
        <View style={{top:34,left:250}}>
        <Text style={{color:'#2FBD3B'}}> Normal </Text>
        </View>
       <Animated.View style={{
          opacity: this.state.fadeIn,
          marginTop:0,
          backgroundColor:'#2FBD3B',
   width: 44,
   height: 44,
   borderRadius: 45/2,
   left: 200
}}>
        </Animated.View>
        </View>
<View style={{backgroundColor:'#A8A9AB',height:2.5,width:340,left:9,marginTop:50}}></View>
 <Content padder >
           <Button
            full
            square
            blue
            style={{ marginTop: 20,borderRadius:45,width:220,height:80,backgroundColor: '#14929E',left: 60,Right:0 }}
            onPress={() => this.props.navigation.navigate("EditScreenTwo")}
          >
            <Text style={{fontSize:20,}}>Apertura</Text>
          </Button>
           <Button
            full
            square
            blue
            style={{ marginTop: 20,borderRadius:45,width:220,height:80,backgroundColor: '#14929E',left: 60,Right:0 }}
            onPress={() => this.props.navigation.navigate("Chat")}
          >
            <Text style={{fontSize:20}}>Bloquear</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}
Profile.navigationOptions = ({ navigation }) => {
  return {
    header: (
        <Header style={{backgroundColor:'#14929E'}}>
        <StatusBar
        // backgroundColor="#403F44"
        backgroundColor="#14929E"
        barStyle="light-content"
        />
          <Left>
            <Button
              transparent
              onPress={() => navigation.toggleDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
    <Image source={require('./logos-04.png')} style={{height: 80,width: 100,left:60}}/>
              </Body>
          <Right />
        </Header>
    )
  };
};
