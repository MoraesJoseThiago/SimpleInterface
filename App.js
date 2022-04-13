import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';

const App = () => {

  const [Items, setItems] = useState([
    { key: 0, item: 'Carros JDM' },
    { key: 1, item: 'R34' },
    { key: 2, item: 'R32' },
    { key: 3, item: 'Subaru Impreza' },
    { key: 4, item: 'Toyota Supra' },
    { key: 5, item: 'S14' },
    { key: 6, item: 'Lancer Evolution IV' },
    { key: 7, item: 'MAZADA MIX' },
    { key: 8, item: 'Honda Civic' },
    { key: 9, item: 'Honda / Acura NSX' },
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 77, item: 'item novo' }]);
    setRefreshing(false);
  }
  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    >
      {
        Items.map((object) => {
          return (
            <View style={styles.item} key={object.key}>
              <Text style={styles.text}>{object.item}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  item: {
    margin: 10,
    backgroundColor: '#aab',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;