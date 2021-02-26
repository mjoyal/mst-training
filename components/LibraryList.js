import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import {observer, inject} from 'mobx-react';

import MusicCard from './MusicCard'; 

const LibraryList = inject('trackStore')(
    observer(({trackStore}) => {
      if (trackStore.isLoading) {
        return null;
      }

      const renderMusicCard = (itemData) => (
            <MusicCard
                name={itemData.item.name}
                owner={itemData.item.artist}
                image={itemData.item.albumImage}
            />
        ); 
      

      return (
        <View style={styles.screen}>
          <FlatList data={trackStore.tracks} renderItem={renderMusicCard} />
        </View>
      );
    }),
  );

  const styles = StyleSheet.create({
    screen: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    }, 
  }); 

export default LibraryList; 
