import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Vocales(){
  const [input, setInput] = useState('');
  const [contador, setContador] = useState([0,0,0,0,0]);

  const vocales = ['a','e','i','o','u'];

  const contarVocales = (texto) => {
    const nuevoContador = [0,0,0,0,0];
    const minus = texto.toLowerCase();

    for(let i=0; i<minus.length; i++){
      const caracter = minus.charAt(i);
      const vocal = vocales.indexOf(caracter);

      if(vocal !== -1) nuevoContador[vocal]++;
    }

    setContador(nuevoContador);
  };

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Texto"
        onChangeText={(text) => setInput(text)}
        value={input}
      />
      <Button title="Contar" onPress={() => contarVocales(input)} />
      <Text style={styles.vocales}>Vocales: {contador.join(' ')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  vocales: {
    fontSize: 20,
    marginTop: 10,
  },
});