import React, { useRef } from 'react';
import { Animated, FlatList, StyleSheet, View, } from 'react-native';

import slides from './slides'
import SlideItem from './SlideItem'
import Pagination from './Pagination'
import NextButton from './NextButton';

function Slider(): React.JSX.Element {
  const scrollX = useRef(new Animated.Value(0)).current
  const handleOnScroll = (event: any) => {
    Animated.event([{
      nativeEvent: {
        contentOffset: {
          x: scrollX,
        }
      }
    }], {
      useNativeDriver: false
    }) (event) 
  }

  return (
    <View style={styles.container}>
      <FlatList data={slides} renderItem={({item}) => <SlideItem item={item} />} horizontal pagingEnabled snapToAlignment='center' showsHorizontalScrollIndicator={false} onScroll={handleOnScroll}>
      </FlatList>
      <Pagination data={slides} scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  }
});

export default Slider;
