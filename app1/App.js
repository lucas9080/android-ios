
import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import C1 from './componentes/comp1'
import Estilos from './estilos/estilos.js';

export default function App1(){
  return (

 <View style={Estilos.container}>
   <Text style={{backgroundColor: '#000'}}> PjFitCert</Text>
  
<Text style={Estilos.textoPadrao}>youtube.com</Text>
<Text style={Estilos.textoTitulo}>cfbcursos.com</Text>
  </View>
  );
};

