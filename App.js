import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App =() =>{
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
      <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
      <Text style={styles.text}>2</Text>
      </View> 
      <View style={styles.view3}>
      <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
}

 
const styles = StyleSheet.create({
  body: {
  flex: 1,
  backgroundColor: '#0000ff',
  alignItems: 'stretch',
  justifyContent: 'center',
  {/* flexDirection: 'column-reverse', Faz reverter os numeros =  3,2,1*/}
  },
  view1: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 1,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 50,
    margin: 30,
  },
});

export default App;