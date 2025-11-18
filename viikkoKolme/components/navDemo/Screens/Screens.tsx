import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

export function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      
    </View>
  );
}
//<Button mode="contained" onPress={() => navigation.navigate('Details')}>Test</Button> Alku testaamista varten
export function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text>Second screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});