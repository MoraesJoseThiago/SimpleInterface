import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { FlatList } from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';

const App = () => {
  const[pokemon, setPokemon] = useState([])
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon',{
        method: 'GET',
        headers:{
          'Accept': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data=>{
          console.log(data)
          setPokemon(data.results)
        })
    },[])
    return(
      <View>
        <FlatList
          data={pokemons}
          keyExtracton={(pokemon)=>pokemon.name}
          contentContainerStylee={{flexGrow: 1}}
          renderItem={PokemonShow}
        />
      </View>
    )
};

function PokemonShow(item){
  const{name,url} = item.item
  const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon', '')

  const ImageUrl = 'https://cdn.traction.one/pokedex/pokemon'+ pokemonNumber+'.png'
  return(
  <View style={{flexDirection: 'row'}}>
    <Nome>{name}</Nome>
    <Imagem source={{ url: ImageUrl.replace('/.png','.png')}}/>
    </View>
  )
}