import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  const onClickHandler = () => {
    setCounter(counter + 1)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{counter * 5}</Text>
      <Button style={styles.button} title='Adicionar 5' onPress={onClickHandler}></Button>
      <Text style={styles.text}>Você clicou {counter} vezes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0726D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
  button: {
    width: 100,
    height: 100,
  },
});

export default App;