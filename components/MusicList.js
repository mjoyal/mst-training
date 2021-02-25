import React from "react";
import { Text, StyleSheet, Flatlist, View} from "react-native";
import {observer, inject} from 'mobx-react';

import MusicCard from './MusicCard'; 

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MusicList = inject('trackStore')(
  observer(({trackStore}) => {
    if (trackStore.isLoading) {
      return null;
    }
    console.log(Array.isArray(trackStore.tracks)); 

    // const renderMusicItem = (itemData) => {
    //   return (
    //   <Text>itemData.title</Text>
    //  ); 
    // }; 

    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );

  
    return (
     <View>
      <Flatlist data={DATA} renderItem={renderItem} />
     
     </View>
    );
  }),
);

const styles = StyleSheet.create({


}); 

export default MusicList; 





// const MusicList = () => {
//   const renderItem = ({ item }) => (
//     <Item title={item.title} />
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// }