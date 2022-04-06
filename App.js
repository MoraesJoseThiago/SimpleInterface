import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  const [fofoca, setFofoca] = useState('Me atualize')

  const onClickHandler = () => {
    setFofoca('O Julio e chato pra crl!')
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Já esta sabendo da fofoca?</Text>
      <Text style={styles.text}>{fofoca}</Text>
      <Button title='Me conta a fofoca' onPress={onClickHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;