import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
{/* STATE É MUTAVEL E O PROPS É UMA CARACTERISTICA IMUTAVEL*/}
const App = () => {
  const [name, setName] = useState('Salvador')
  const [session, setSession] = useState({ number: 6, title: 'Velozes e Furiosos' })
  const [current, setCurrent] = useState(true)

  const onClickHandler = () => {
    setName('Paul')
    setSession({ number: 7, title: 'Desafio em Tokio' })
    setCurrent(false)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Bem vindo Demon {name}</Text>
      <Text style={styles.text}>Vai ver um filme na sessão {session.number} sobre {session.title}</Text>
      <Text style={styles.text}>{current ? 'Sessão acontecendo' : 'proxima sessão'}</Text>
      <Button title='Não sou eu garaio' onPress={onClickHandler}></Button>
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