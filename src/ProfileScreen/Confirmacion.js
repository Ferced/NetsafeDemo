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


export default class Confirmacion extends React.Component {

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
  static navigationOptions = ({ navigation }) => ({
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
    )
  });
  render() {
     const {showAlert} = this.state;
    return (
<Container style={{backgroundColor:'#E6E7E9'}}>
   <View style={{height:50,top:10,left:20}}>
      <Text style={{fontSize:15,fontWeight:'500',color:'red',top: 5,left: 35}}> Equipo seleccionado: CASA CAMPO </Text>
   </View>
   <View style={{bottom:20}}>
     <View style={{fontSize:15,fontWeight:'500',backgroundColor:'#A6AAAB',marginTop:20,height: 40}}>
     <Text style={{color:'white',fontWeight: '500',fontSize:15,fontFamily:'Roboto', top:10,left:15}}> CONTROL REMOTO</Text>
     </View>
     <View style={{backgroundColor:'#158F94',height: 14}}>
     </View>
     <View >
        <View style={{top:30,left:30}}>
        <View>
        <Text style={{color:'grey',fontWeight:'500'}}>Autorizar apertura de caja</Text>
        <Text style={{color:'grey',fontSize:14,marginTop:10}}>Ingrese el codigo de autorizacion de 6 digitos:</Text>
        <View style={{backgroundColor:'#A8A9AB',height:2.5,width:340,right:20,marginTop:8}}></View>
        <TextInput
        secureTextEntry={true}
        maxLength={6}
        numberOfLines={1}
        autoFocus={false}
        underlineColorAndroid='rgba(0,0,0,0)'
        style={{marginTop:40,fontWeight: '500' ,color: 'grey',height: 40,
         borderColor: 'black', borderWidth: 0, width: 220
        ,backgroundColor: 'white', textAlign: 'center',textAlignVertical: 'center',left:40,fontSize:55,justifyContent:'center',
      paddingTop: 0,paddingBottom: 0,letterSpacing:7}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        </View>
           <View style={{bottom: 5}}>
           <Button
           backgroundColor={this.state.buttonColor}
            full
            square
            style={{ marginTop: 20,width:220,height:80,left: 40, }}
            onPress={() => this.showAlert()}
          >
            <Text style={{fontSize:20}}>Autorizar asdasdasd 22</Text>
          </Button>
        </View>
     </View>
     </View>
  </View>
   <AwesomeAlert
          titleStyle={{color: 'white'}}
          backgroundColor="red"
          show={showAlert}
          contentContainerStyle={{backgroundColor:'#14929E',bottom:90}}
          confirmButtonTextStyle={{color:'black'}}
          progressColor="green"
          showProgress={false}
          title="Apertura de caja exitosa"
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
            this.props.navigation.navigate("Perfil");
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