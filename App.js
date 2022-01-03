//Baráth Máté, Fésű Gábor, Vásárhelyi Ágoston Beadandó 2022.01.03.
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, } from 'react-native';

export default function App() {

  const [base, setBase] = useState();
  const [height, setHeight] = useState();
  const [area, setArea] = useState();

  function calcArea() {

    let result = (Math.sqrt(25+15*(Math.sqrt(5)))*Math.pow(base,2))/4;
  
    setArea(result);

  }

  return (
    <View style={styles.container}>
      <Text><h1>Pentagon</h1></Text>
      <Text>Baráth Máté,<br/>Fésű Gábor,<br/>Vásárhelyi Ágoston<br/>Pentagon terület beadandó 2022.01.03.</Text>


      <TextInput 
      style = {styles.input }
      placeholder="Oldalhossz"
      onChangeText={ base => setBase(base) }/>


      <Button 
      title="Számít"
      onPress={calcArea}
      />


      <Text>Terület értéke: </Text>

      <Text>{area}</Text>
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDCE71',
    alignItems: 'center',
    justifyContent: 'center',
  
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    width: 200,
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 20
    
  },

});
