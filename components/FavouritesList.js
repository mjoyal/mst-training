import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import {observer, inject} from 'mobx-react';

import QueueCard from './QueueCard'; 

const FavouritesList = inject('userStore')(
    observer(({userStore}) => {
      if (userStore.isLoading || !userStore.loggedInUser) {
        return null;
      }
      const renderMusicCard = (itemData) => {
        console.log(itemData.item.creatorId);
        return (
            <QueueCard
                name={itemData.item.name}
                owner={itemData.item.artist}
                image={itemData.item.albumImage}
            />
        ); 
      }
      return (
        <View style={styles.container}>
          <FlatList data={userStore.loggedInUser.favourites} renderItem={renderMusicCard} />
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
  

export default FavouritesList; 

