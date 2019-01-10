import React from "react";
import { StatusBar, ScrollView,AppRegistry, Alert, TextInput, List, ListItem, Image,} from "react-native";

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
  }
  codigoAutomatico() {
    return "<Text> ADSHSASAHD FUNCA  </Text>";            
}
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
              onPress={() => navigation.navigate("DrawerOpen")}
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
<ScrollView>
   <View style={{height:50,top:10,left:20}}>
      <Text style={{fontSize:15,fontWeight:'500',color:'#A6AAAB',top: 5,left: 35}}> 
      Balance de Equipo: 
      CAJA CAMPO
      </Text>
   </View>
   <View style={{bottom:20, marginTop:10}}>

     <View style={{backgroundColor:'#A6AAAB',height: 120,marginTop:3}}>
     <Text style={{color:'white',fontWeight: '500',fontSize:13,fontFamily:'Roboto', top:15,left:15}}> BALANCE ACTUAL:</Text>
     <Text style={{color:'white',fontWeight: '500',fontSize:11,fontFamily:'Roboto', top:40,left:15}}> Cant.</Text>
     <Text style={{color:'white',fontWeight: '500',fontSize:11,fontFamily:'Roboto', top:42,left:15}}> Billetes:</Text>
     <Text style={{color:'white',fontWeight: '500',fontSize:32,fontFamily:'Roboto', top:2,left:75}}> 28</Text>
     <Text style={{color:'white',fontWeight: '500',fontSize:11,fontFamily:'Roboto', bottom:20,left:155}}> Equivalente</Text>
     <Text style={{color:'white',fontWeight: '500',fontSize:11,fontFamily:'Roboto', bottom:34,left:250}}> AR$</Text>
     <Text style={{color:'white',fontWeight: '500',fontSize:32,fontFamily:'Roboto', bottom:70,left:270}}> 2800</Text>
     </View>
     <View style={{backgroundColor:'#158F94',height: 14}}>
     </View>

           <View style={{flexDirection: 'row',     justifyContent: 'center',
        alignItems: 'center',}}>
           <Text style={{fontSize:16,fontWeight:'700',color:'grey',margin:13}}> Fecha </Text>
           <Text style={{fontSize:16,fontWeight:'700',color:'grey',margin:13}}> Usuario  </Text>
           <Text style={{fontSize:16,fontWeight:'700',color:'grey',margin:13}}> importe</Text>
           <Text style={{fontSize:16,fontWeight:'700',color:'grey',margin:13}}> Operacion </Text>         
          </View>
          <View style={{backgroundColor:'#b8babc',height:5,width:340,left:9,marginTop:2.5}}></View>

      <View style={{marginTop:2}}>



      <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,right:5}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Juan  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:40}}> $600 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'red',}}> Extraccion </Text>
        </View>
           <View style={{backgroundColor:'red',height:2,width:66,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>
      <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,right:5}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Juan  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:40}}> $300 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'red',}}> Extraccion </Text>
        </View>
           <View style={{backgroundColor:'red',height:2,width:66,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>
      <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,right:5}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Laura  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:36}}> $1000 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'red',}}> Extraccion </Text>
        </View>
           <View style={{backgroundColor:'red',height:2,width:66,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>
      <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,left:-14}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Juan  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:36}}> $6000 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'green',}}> Ingreso </Text>
        </View>
           <View style={{backgroundColor:'green',height:2,width:52,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>
      <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,right:5}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Juan  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:40}}> $600 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'red',}}> Extraccion </Text>
        </View>
           <View style={{backgroundColor:'red',height:2,width:66,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>
          <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,left:-14}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Laura  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:36}}> $9000 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'green',}}> Ingreso </Text>
        </View>
           <View style={{backgroundColor:'green',height:2,width:52,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>
      <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,right:5}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Juan  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:40}}> $600 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'red',}}> Extraccion </Text>
        </View>
           <View style={{backgroundColor:'red',height:2,width:66,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>
      <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,right:5}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Juan  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:40}}> $600 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'red',}}> Extraccion </Text>
        </View>
           <View style={{backgroundColor:'red',height:2,width:66,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>
           <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,left:-14}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Juan  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:36}}> $2000 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'green',}}> Ingreso </Text>
        </View>
           <View style={{backgroundColor:'green',height:2,width:52,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>
      <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,right:5}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Juan  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:40}}> $600 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'red',}}> Extraccion </Text>
        </View>
           <View style={{backgroundColor:'red',height:2,width:66,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>
      <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,right:5}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Laura  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:40}}> $600 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'red',}}> Extraccion </Text>
        </View>
           <View style={{backgroundColor:'red',height:2,width:66,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>
      <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,right:5}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Juan  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:40}}> $600 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'red',}}> Extraccion </Text>
        </View>
           <View style={{backgroundColor:'red',height:2,width:66,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>
      <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,right:5}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Juan  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:40}}> $600 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'red',}}> Extraccion </Text>
        </View>
           <View style={{backgroundColor:'red',height:2,width:66,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>
      <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,right:5}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Laura  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:40}}> $600 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'red',}}> Extraccion </Text>
        </View>
           <View style={{backgroundColor:'red',height:2,width:66,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>
           <View>
        <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop:5,left:-14}}>
           <Text style={{fontSize:12,fontWeight:'700',color:'grey',marginRight:20}}> 05/09/2017 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:45}}> Juan  </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'grey',marginRight:36}}> $8500 </Text>
           <Text style={{fontSize:14,fontWeight:'700',color:'green',}}> Ingreso </Text>
        </View>
           <View style={{backgroundColor:'green',height:2,width:52,left:270,top:0.5}}></View>
           <View style={{backgroundColor:'#b8babc',height:2,width:340,left:9,marginTop:10}}></View>   
      </View>



      </View>
  </View>
</ScrollView>
</Container>
    );
  }
}
