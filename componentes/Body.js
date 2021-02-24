import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Platform } from 'react-native';
import Constants from 'expo-constants';


const Body = (props) => {

    return(
      <ScrollView style={{marginTop:30}}>
        
            <Text>{props.texto}</Text>
            <Button title = {props.titulo}></Button>
        
      </ScrollView>

    )
  }

  export default Body;