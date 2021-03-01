import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Platform, TouchableOpacity, StatusBar, TextInput, AsyncStorage } from 'react-native';
import Constants from 'expo-constants';


export default function App()  {  

  const [estado, setarEstado] = useState('leitura');
  const [anotacao, setarAnotacao] = useState('');


  useEffect(()=>{

      //Após inicializar App, o app vai ler a key anotacao
      (async () => {
        try{
            const anotacaoLeitura = await AsyncStorage.getItem('anotacao');
            setarAnotacao(anotacaoLeitura)
        }catch(error){}
      })();

  },[])


  setData = async() => {
    try{
      await AsyncStorage.setItem('anotacao', anotacao);
    }catch(error){

    }
    alert('sua anotacao foi salva');
  }

  function atualizarTexto(){
    
    setarEstado('Leitura');
    setData();

  }

  if(estado == 'leitura'){
        return(
          <View style={{flex:1}}>
            <StatusBar style="light"/>
              <View style={styles.header} ><Text style={{textAlign:'center', color:'white',fontSize:21}}> Notepad's </Text></View>
                {
                (anotacao != '')?
              <View style={{padding:20 }}><Text style={styles.anotacao} >{anotacao}</Text></View>
                  :
                  <View style={{padding:20 }}><Text style={{opacity:0.3}} >Nenhuma anotação encontrada :(</Text></View>
                }
            <TouchableOpacity onPress={()=> setarEstado('atualizando')} 
            style={styles.btnAnotacao}>
            {
              (anotacao == '')?
              <Text style={styles.btnTexto}>+</Text>
              :
              <Text style={{fontSize:14, textAlign:'center', color: 'white', marginTop:15}}>Editar</Text>
            }
            </TouchableOpacity>
          </View>
        )
  }else if(estado == 'atualizando'){
      return(
        <View style={{flex:1}}>
          <StatusBar style="light"/>
            <View style={styles.header} ><Text style={{textAlign:'center', color:'white',fontSize:21}}> Notepad's </Text></View>
        
            <TextInput autoFocus={true} onChangeText={(text)=>setarAnotacao(text)} multiline={true} numberOfLines={5} value={anotacao} style={{padding:20,height:300, textAlignVertical:'top'}} ></TextInput>

          <TouchableOpacity onPress={()=> atualizarTexto()} style={styles.btnSalvar}><Text style={styles.btnTextoSalvar} > Salvar </Text></TouchableOpacity>
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

 





