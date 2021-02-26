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
        console.log(itemData.item.creatorId);
        return (
            <QueueCard
                name={itemData.item.name}
                owner={itemData.item.creatorId.name}
                image={itemData.item.albumImage}
            />
        ); 
      }
      return (
        <View>
          <FlatList data={queueStore.queues} renderItem={renderMusicCard} />
        </View>
      );
    }),
  );


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
