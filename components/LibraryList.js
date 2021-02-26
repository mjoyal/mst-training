import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import {observer, inject} from 'mobx-react';

import QueueCard from './QueueCard'; 

const LibraryList = inject('trackStore')(
    observer(({trackStore}) => {
      if (trackStore.isLoading) {
        return null;
      }

      const renderMusicCard = (itemData) => (
            <QueueCard
                name={itemData.item.name}
                owner={itemData.item.artist}
            />
        ); 
      

      return (
        <View>
          <FlatList data={trackStore.tracks} renderItem={renderMusicCard} />
        </View>
      );
    }),
  );


export default LibraryList; 
