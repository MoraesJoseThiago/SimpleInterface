import React, {useEffect, useState} from 'react'
import {SafeAreaView, View,FlatList,Image,Text} from 'react-native'
export default function App(){
  const [allMovies,setAllMovie] = useState([])
  useEffect(()=>{
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response=>response.json())
    .then(data=>{
        data.forEach(movie=>{
            console.log(movie.title);
            console.log(movie.deion)
            console.log(movie.release_date)
            setAllMovie(movie)
        })
    }).catch(err=>{
        console.log(err)
    })
  },[])
  return(
    <View>
      <FlatList
        data={allMovies}
        keyExtractor={(movie) => movie.title}
        renderItem={MovieShow}
      />
    </View>
  )
}

function MovieShow(item){
  const{title,description,image} = item.item
}