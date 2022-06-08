import React from 'react'
import { TextoPrincipal, Quadro } from '../meusEstilos/styledcomponents'
import { styles } from '../style'
import { View, Text, Image } from 'react-native'
function  QuadroFinal(props) {
  return (
    <Quadro style={styles.body}>
         <View style={styles.quadro}>
          <Text style={styles.Text}>{props.item.title}</Text>
          <Image
          style={{width: 300, height: 500}}
            source={{uri: props.item.image}}
          />
          <Text style={styles.Text}>{props.item.release_date}</Text>
        </View>
    </Quadro>
  )
}

export default QuadroFinal