import React, {useEffect, useState} from 'react'
import {SafeAreaView, View,FlatList,Image,Text, StyleSheet} from 'react-native'
import styled from 'styled-components/native'
export default function App(){
  const [allMovies,setAllMovie] = useState([])
  useEffect(()=>{
    // fetch busca os dados do site
    // then response vai transformar as respostas em um json
    // then data vai formatar os dados mapeando o array
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response=>response.json())
    .then(data=>{
        data.forEach(movie=>{
            console.log(movie.title);
            console.log(movie.deion)
            console.log(movie.release_date)
            setAllMovie(movie)
        })
        setAllMovie(data); //data em vez de movie por causa que o arquivo do .then é uma variavel chamada data
    }).catch(err=>{
        console.log(err)
    })
  },[])
  return(
    <View style={styles.body}>
      <TextoPrincipal style={styles.TextoPrincipal}> Ghibli Movies </TextoPrincipal>
      <FlatList
        data={allMovies}
        renderItem={({item})=>
        <>
        <Quadro style={styled.body}>
        <View>
          <Text style={styles.Text}>{item.title}</Text>
          <Image
          style={{width: 50, height: 50}}
            source={{uri: item.image}}
          />
        </View>
        </Quadro>
        </>
        }
      />
    </View>
  )   
}

const TextoPrincipal = styled.Text`
  font-size: 44px;
  color: #fff;
  margin-bottom: 25px;
  margin-top:25;

`; 

const Quadro = styled.View `
  background-color: #0A1073;
`;

TextoPrincipal:{
  FontFamily: 'Roboto-BlackItalic'
}


const styles = StyleSheet.create ({
  body: {
    backgroundColor: '#00ff',
    alignItems: 'center'
  },
  Text:{
    color: '#fff',
    fontSize:20,
    fontStyle: 'italic'
  }
 
});