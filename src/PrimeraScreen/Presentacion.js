
//       <Animated.Image source={require("./Netlo.jpg")} style={[styles.box, animatedStyle]}/>
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
// width: 250, height: 100,justifyContent: 'center',alignItems: 'center',left: 45,top:255
//   }
// });


import React, { Component } from 'react';
import {
  StatusBar,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  ActivityIndicator
} from 'react-native';
import FadeIn from 'react-native-fade-in-image';

export default class animatedbasic extends Component {
  
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: -262,
      duration: 5000
    }).start();
  }
  
  
  render() {
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(64,63,68)', 'rgb(51, 250, 170)']
    })
    // const animatedStyle = {
    //   transform: [
    //     { translateY: this.animatedValue},
    //     // { scaleX: this.animatedValue.interpolate({
    //     //   inputRange:[0,1],
    //     //   outputRange:[1,1.1]
    //     // })
    //     // },
    //     // { scaleX: this.animatedValue.interpolate({
    //     //   inputRange:[0,1],
    //     //   outputRange:[1,1.1]
    //     // })
    //     // },

    //   ]
    // }
    return (
      <View style={styles.container}>
      <StatusBar
// backgroundColor="#403F44"
backgroundColor="#403f44"
barStyle="light-content"
/>
      <FadeIn>
      <Animated.Image source={require("./logo21.gif")} style={styles.box}/>
      </FadeIn>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#403f44',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    box: {
width: 160, height: 160,justifyContent: 'center',alignItems: 'center',
  }
});

AppRegistry.registerComponent('animatedbasic', () => animatedbasic);