import React, {useState} from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

function Hrlc() {
  const [age, setAge] = useState('');
  return (
    <View style={styles.view}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Heart Rate Limits Calculator</Text>
      <Text style={{fontSize: 15}}>Enter your age:</Text>
      <TextInput style={styles.input} value={age} onChangeText={newAge => setAge(newAge)} defaultValue={age}></TextInput>
      <Text style={{fontSize: 15}}>Lower limit: {(220-age)*0.65} bpm{"\n"}Upper limit: {(220-age)*0.85} bpm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  view: {
    margin: 5,
  }
});

export default Hrlc