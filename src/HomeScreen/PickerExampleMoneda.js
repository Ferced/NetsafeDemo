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
            <Picker selectedValue = {this.state.user}
            onValueChange = {this.updateUser}
             style={{width: 130,left:205,height:40,bottom:160,}}
             itemStyle={{color:'red'}}
             mode="dropdown"
             >
               <Picker.Item label = "AR$" value = "Cant. billetes: 2           AR$ 2000" />
               <Picker.Item label = "U$S" value = "Cant. billetes: 200           AR$ 200.000" />
               <Picker.Item label = "REAL" value = "Cant. billetes: 2 AR$           2000" />
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
