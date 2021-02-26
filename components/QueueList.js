import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import {observer, inject} from 'mobx-react';

import QueueCard from './QueueCard'; 

const QueueList = inject('queueStore')(
    observer(({queueStore}) => {
      if (queueStore.isLoading) {
        return null;
      }
      const renderMusicCard = (itemData) => {
        return (
            <QueueCard
                name={itemData.item.name}
                owner={itemData.item.creatorId.name}
                image="https://media.wonderlandmagazine.com/uploads/2020/07/0155_BEATSXASHNIKKO_BLUE_V3_C1.jpg"
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
