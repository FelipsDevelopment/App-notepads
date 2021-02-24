import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Platform, TouchableOpacity, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import Body from './componentes/Body.js';


export default function App()  {  

  const [estado, setarEstado] = useState('leitura');
  const [anotacao, setarAnotacao] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis elementum consectetur. Mauris eu purus risus. Nulla facilisi. Fusce ex metus, iaculis vel fringilla at, vulputate nec arcu. Nulla ac semper libero.');
 

  if(estado == 'leitura'){
        return(
          <View style={{flex:1}}>
            <StatusBar style="light"/>
              <View style={styles.header} ><Text style={{textAlign:'center', color:'white',fontSize:21}}> Notepad's </Text></View>
          
              <View style={{padding:20 }}><Text style={styles.anotacao} >{anotacao}</Text></View>

            <TouchableOpacity onPress={()=> setarEstado('atualizando')} style={styles.btnAnotacao}><Text style={styles.btnTexto}>+</Text></TouchableOpacity>
          </View>
        )
  }else if(estado == 'atualizando'){
      return(
        <View style={{flex:1}}>
          <StatusBar style="light"/>
            <View style={styles.header} ><Text style={{textAlign:'center', color:'white',fontSize:21}}> Notepad's </Text></View>
        
          <TouchableOpacity onPress={()=> setarEstado('leitura')} style={styles.btnSalvar}><Text style={styles.btnTextoSalvar} > Salvar </Text></TouchableOpacity>
        </View>

      );
  }
}

const styles = StyleSheet.create({
  
  header:{
    width:'100%',
    padding:10,
    backgroundColor:'#069'
  },

  anotacao:{
    fontSize:16
    
  },
  btnAnotacao:{
    position: 'absolute',
    right:20,
    bottom:20,
    width: 50,
    height:50,
    borderRadius:25,
    backgroundColor:'#069'
  },
  btnSalvar:{
    position: 'absolute',
    right:20,
    bottom:20,
    width: 100,
    height:50,
    borderRadius:25,
    backgroundColor:'#069'
  },

  btnTexto:{
    color:'white',
    fontSize:35,
    position:'relative',
    textAlign:'center',
    

  },
  btnTextoSalvar:{
    color:'white',
    position:'relative',
    textAlign:'center',
    top:15

    

  }


});

 





