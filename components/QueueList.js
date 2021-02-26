import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import {observer, inject} from 'mobx-react';

import QueueCard from './QueueCard'; 

const QueueList = inject('queueStore')(
    observer(({queueStore, navigation, route}) => {
      
      if (queueStore.isLoading) {
        return null;
      }
      const renderMusicCard = (itemData) => {
        console.log(itemData.item)
        return (
            <QueueCard
                id={itemData.item.id}
                name={itemData.item.name}
                owner={itemData.item.creatorId.name}
                // image={itemData.item.tracks[0].albumImage}
                navigation={navigation}
            />
        ); 
      }
      return (
        <View style={styles.container}>
          <FlatList data={queueStore.queues} renderItem={renderMusicCard} />
        </View>
      );
    }),
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    }, 
  }); 
  

export default QueueList; 





//   const QueueList = () => {
//     const renderMusicCard = (itemData) => {
//         console.log(itemData);
//         return (
//           <Text>{itemData.item.name}</Text>
//         ); 
//       }
//       return (
//         <View>
//           <FlatList data={queueData} renderItem={renderMusicCard} />
//         </View>
//       );
// }; 
