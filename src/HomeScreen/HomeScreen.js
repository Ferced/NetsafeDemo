import React from "react";
import { KeyboardAvoidingView,StatusBar, ScrollView,AppRegistry, Alert, TextInput, List, ListItem, Image,StyleSheet,TouchableOpacity} from "react-native";

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
import PickerExample from './../HomeScreen/PickerExampleMoneda.js'
import PickerExample1 from './../HomeScreen/PickerExample.js'
import AwesomeAlert from 'react-native-awesome-alerts';
import Confirmacion from "./../ProfileScreen/Confirmacion.js";
import { createStackNavigator } from "react-navigation";

export default class HomeScreen extends React.Component {
    componentDidMount() {
    if (this.props.navigation.state.params !== undefined) {
      Alert.alert("USER found", this.props.navigation.state.params.name);
    }
  }
   constructor (props) {
    super (props);
    this.state = { text: '',text2: '00',text3: '' };
      this.state = { showAlert: false };
    }
    filtrarInput(algo){
      x=parseInt(algo)
      if (x<=99){
        return 0
      }
      if (x>=100){
        return x/100
      }
      return 0
    }
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
 
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render() {
    const {showAlert} = this.state;
    return (
      <KeyboardAvoidingView
      // KeyboardVerticalOffset={8000}
      style={styles.container}
      behavior="position"
      enabled
      >
           
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
<Image source={require('./../HomeScreen/logos-04.png')} style={{height: 80,width: 100,left:60}}/>
      </Body>
  <Right />
</Header>

<View style={{top:35,left:20}}>

       <Text style={{fontSize:15,fontWeight:'500',color:'grey'}}> Seleccione equipo </Text>
       </View>
       <PickerExample1 />
   <View style={{bottom:20}}>
     <View style={{fontSize:15,fontWeight:'500',backgroundColor:'#A6AAAB',marginTop:20,height: 40}}>
     <Text style={{color:'white',fontWeight: '500',fontSize:15,fontFamily:'Roboto', top:10,left:15}}> CASH DISPENSER</Text>
     </View>
     <View style={{backgroundColor:'#A6AAAB',height: 120,marginTop:3}}>
     <Text style={{color:'white',fontWeight: '500',fontSize:13,fontFamily:'Roboto', top:15,left:15}}> BALANCE ACTUAL:</Text>
     <Text style={{color:'white',fontWeight: '500',fontSize:11,fontFamily:'Roboto', top:40,left:15}}> Cant.</Text>
     <Text style={{color:'white',fontWeight: '500',fontSize:11,fontFamily:'Roboto', top:42,left:15}}> Billetes:</Text>
     <Text style={{color:'white',fontWeight: '500',fontSize:32,fontFamily:'Roboto', top:2,left:75}}> 34</Text>
     <Text style={{color:'white',fontWeight: '500',fontSize:11,fontFamily:'Roboto', bottom:20,left:155}}> Equivalente</Text>
     <Text style={{color:'white',fontWeight: '500',fontSize:11,fontFamily:'Roboto', bottom:34,left:250}}> AR$</Text>
     <Text style={{color:'white',fontWeight: '500',fontSize:32,fontFamily:'Roboto', bottom:70,left:270}}> 3400</Text>
     </View>
     <View style={{backgroundColor:'#158F94',height: 14}}>
     </View>
     <View >

        <View style={{top:30,left:30}}>
           <Text style={{fontSize:16,fontWeight:'700',color:'grey'}}> Retiro de dinero </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginTop:30}}> Cant.  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginTop:2}}> Billetes:</Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginTop:30}}> Equivalente: </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginTop:30}}> Motivo: </Text>
           <View style={{bottom: 5}}>
           <View pointerEvents="none" >
           <TextInput

           underlineColorAndroid='rgba(0,0,0,0)'
           keyboardType={'numeric'}
           style={{fontWeight: '500',color: 'black',height: 40, borderColor: 'black', borderWidth: 0, width: 80,bottom:130,left: 100,backgroundColor: 'transparent', textAlign: 'center',}}
           onChangeText={(text2) => this.setState({text2})}
           value={this.filtrarInput(this.state.text2).toString()}
           />
           </View>
           <TextInput
           keyboardType={'numeric'}
           underlineColorAndroid='rgba(0,0,0,0)'
           style={{fontWeight: '500' ,color: 'black',height: 40, borderColor: 'black', borderWidth: 0, width: 100,bottom:120,left: 100,backgroundColor: 'white', textAlign: 'center',marginTop:5}}
           onChangeText={(text2) => this.setState({text2})}
           value={this.state.text2}
           />
           <PickerExample />
           <TextInput
           keyboardType={'name-phone-pad'}
           underlineColorAndroid='rgba(0,0,0,0)'
           style={{fontWeight: '500' ,color: 'black',height: 40, borderColor: 'black', borderWidth: 0, width: 205,bottom:160,left: 100,backgroundColor: 'white', textAlign: 'center',marginTop:15}}
           onChangeText={(text3) => this.setState({text3})}
           value={this.state.text3}
           />
           <Button
           full
           square
           blue
           style={{borderRadius:20,width:220,height:40,backgroundColor: '#14929E',left: 40,bottom: 140,}}
           onPress={() => this.props.navigation.navigate("Autorizar")}
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
          contentContainerStyle={{backgroundColor:'#14929E'}}
          confirmButtonTextStyle={{color:'black'}}
          progressColor="green"
          showProgress={false}
          title="Apertura de caja exitosa"
          message=""
          closeOnTouchOutside={true}



          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Aceptar"
          confirmButtonColor="#fff"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
</KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top:20,
    justifyContent: 'center',
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