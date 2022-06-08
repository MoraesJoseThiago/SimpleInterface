import React, {useEffect, useState} from 'react'
import {SafeAreaView, View,FlatList,Image,Text, StyleSheet} from 'react-native'
import { styles } from './components/style'
import QuadroFinal from './components/quadro'
import { TextoPrincipal, Quadro } from './components/meusEstilos/styledcomponents'
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
        <QuadroFinal
            item = {item}/>
        </>
        }
      />
    </View>
  )   
}
