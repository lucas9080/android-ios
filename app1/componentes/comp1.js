
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Estilos from '../estilos/estilos.js';


let nt;
let ns;
let css;
let cor;
export default function(props){
    nt=props.nota;
    ns=props.curso; 
    css=props.cs;   

    return (
       <View>
   <Text style={Estilos.textoCursos}>CFB {css} - curso de {ns}: Nota={nt}:</Text>   
       </View>
      
          
        
    );
}
