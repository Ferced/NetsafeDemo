import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickerExample extends Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{width: 200,left:160,marginBottom:10}}>

               <Picker.Item label = "CAJA CAMPO" value = "Cant. billetes: 2           AR$ 20008" style={{color:'red'}} />
               <Picker.Item label = "CAJA OFICINA" value = "Cant. billetes: 200           AR$ 200.000" />
               <Picker.Item label = "CAJA CASA" value = "Cant. billetes: 2 AR$           2000" />
            </Picker>
         </View>
      )
   }
}
export default PickerExample

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'green'
   }
})
