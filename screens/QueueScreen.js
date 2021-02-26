import React from "react";
import { View, Text, StyleSheet, Button, FlatList} from "react-native";
import {observer, inject} from 'mobx-react';

import MusicCard from '../components/MusicCard'; 


const QueueScreen = inject('queueStore')(
  observer(({queueStore, navigation, route}) => {
    
    if (queueStore.isLoading) {
      return null;
    }
    const { queueId } = route.params; 

    const renderMusicCard = (itemData) => (
      <MusicCard
          name={itemData.item.name}
          owner={itemData.item.artist}
          image={itemData.item.albumImage}
      />
  ); 

    return (
      <View style={styles.screen}>
        <Text>
          Queue Screen! {queueId}
        </Text>
        {/* use nullish here */}
        <FlatList data={queueStore.queues[queueId].tracks} renderItem={renderMusicCard}/>
      </View>
    )
  }),
);


const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }, 
}); 

export default QueueScreen; 


// const QueueScreen = ({navigation, route}) => {
  //   const { queueId } = route.params; 
  //   return (
  //     <View style={styles.screen}>
  //       <Text>
  //         Queue Screen! {queueId}
  //       </Text>
  //       <Button
  //         title="go home"
  //         onPress={() => {navigation.navigate('Home')}}
  //       />
  //     </View>
  //   )
  // }; 