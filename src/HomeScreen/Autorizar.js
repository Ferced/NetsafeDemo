import React from "react";
import { StatusBar, ScrollView,AppRegistry, Alert, TextInput, List, ListItem, Image,StyleSheet,TouchableOpacity} from "react-native";

import AwesomeAlert from 'react-native-awesome-alerts';
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
import RNPickerSelect from 'react-native-picker-select';
import PickerExample from './PickerExampleMoneda.js'
// import PickerExample from './PickerExample.js'


export default class EditScreenOne extends React.Component {

   constructor (props) {
    super (props);
    this.state = { text: '' };
    this.state2 = { text2: 'contraseña' };
     this.state = { showAlert: false,};
    this.state = {buttonColor: '#14929E'}
  }
  showAlert = () => {
    this.setState({
      showAlert: true,
      buttonColor: '#0c6068'
    });
  };
  tocoAfuera =() => {
    this.setState({
      showAlert: false,
      buttonColor: '#14929E'
    });
  }; 
  hideAlert = () => {
    this.setState({
      showAlert: false,
      buttonColor: '#14929E'
    });
  };
  
  render() {
     const {showAlert} = this.state;
    return (
<Container style={{backgroundColor:'#E6E7E9'}}>
<Header style={{backgroundColor:'#14929E'}}>
<StatusBar
// backgroundColor="#403F44"
backgroundColor="#14929E"
barStyle="light-content"
/>
  <Left>
    <Button
      transparent
      onPress={() => this.props.navigation.toggleDrawer()}
    >
      <Icon name="menu" />
    </Button>
  </Left>
  <Body>
<Image source={require('./logos-04.png')} style={{height: 80,width: 100,left:60}}/>
      </Body>
  <Right />
</Header>
   <View style={{height:50,top:10,left:20}}>
      <Text style={{fontSize:15,fontWeight:'500',color:'#A6AAAB',top: 5,left: 35}}> Equipo seleccionado: CAJA CAMPO </Text>
   </View>
   <View style={{bottom:20}}>
     <View style={{fontSize:15,fontWeight:'500',backgroundColor:'#A6AAAB',marginTop:20,height: 40,}}>
     <Text style={{color:'white',fontWeight: '500',fontSize:15,fontFamily:'Roboto', top:10,left:15}}> CONTROL REMOTO</Text>
     </View>
     <View style={{backgroundColor:'#158F94',height: 14}}>
     </View>
     <View >
        <View style={{top:30,left:30}}>
        <View>
        <Text style={{color:'grey',fontWeight:'500'}}>Autorizar extraccion de efectivo</Text>
        <Text style={{color:'grey',fontSize:14,marginTop:10}}>Ingrese el codigo de autorizacion de 6 digitos:</Text>
        <View style={{backgroundColor:'#A8A9AB',height:2.5,width:340,right:20,marginTop:8}}></View>
       <TextInput
        multiline
        editable={true}
        secureTextEntry={true}
        maxLength={6}
        numberOfLines={1}
        keyboardType={'numeric'}
        scrollEnabled={false}
        autoFocus={true}
        underlineColorAndroid='rgba(0,0,0,0)'
        style={{borderRadius:40,marginTop:40,fontWeight: '500' ,color: 'grey',height: 50,
         borderColor: 'black', borderWidth: 0, width: 220
        ,backgroundColor: 'white', textAlign: 'center',textAlignVertical: 'center',left:40,fontSize:40,justifyContent:'center',
      paddingTop: 0,paddingBottom: -50,letterSpacing:15}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        </View>
           <View style={{bottom: 5}}>
           <Button
           backgroundColor={this.state.buttonColor}
            full
            square
            style={{ borderRadius:206,marginTop: 20,width:220,height:80,left: 40, }}
            onPress={() => this.showAlert()}
          >
            <Text style={{fontSize:20}}>Autorizar</Text>
          </Button>
        </View>
     </View>
     </View>
  </View>
   <AwesomeAlert
          titleStyle={{color: 'white'}}
          backgroundColor="red"
          show={showAlert}
          contentContainerStyle={{backgroundColor:'#14929E',bottom:90,}}
          confirmButtonTextStyle={{color:'black',textAlign:'center'}}
          progressColor="green"
          showProgress={false}
          title="Operacion completada"
          message=""
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Aceptar"
          confirmButtonColor="#fff"
          onTouchOutside={() => {
            this.hideAlert();
          }}
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.props.navigation.navigate("Confirmacion");
            this.hideAlert();
          }}
        />
</Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008000',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: 'black',
    fontSize: 15
  }
});