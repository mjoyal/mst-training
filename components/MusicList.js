import React from "react";
import { Text, StyleSheet, Flatlist, View} from "react-native";
import {observer, inject} from 'mobx-react';

// import MusicCard from './MusicCard'; 


const MusicList = (props) => {

  const renderMusicCard = (itemData) => {
    console.log(itemData);
    return (
      <Text>{itemData.item.name}</Text>
    ); 
  }
  return (
    <View>
      <Flatlist data={queueData} renderItem={renderMusicCard} />
    </View>
  );
}

export default MusicList; 


