import React from 'react';
import { Animated, Dimensions, StyleSheet, View, } from 'react-native';

type Props = {
  data: {
    id: number;
    questions: {
        question: string;
        answers: string[];
    }[];
  }[],
  scrollX: Animated.Value
}

function Pagination({data, scrollX}: Props): React.JSX.Element {
  const { width } = Dimensions.get('screen')

  return (
    <View style={styles.container}>
      {data.map((page, index) => {
        const inputRange = [(index -1) * width, index * width, (index + 1) * width]
        const dotWidth = scrollX.interpolate({
          inputRange, outputRange: [10, 24, 10],
          extrapolate: 'clamp',
        })
        return (
          <React.Fragment key={index}>
            <Animated.View style={[styles.dots, {width: dotWidth}]} />
          </React.Fragment>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: '3%',
  },
  dots: {
    width: 10,
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    margin: 3,
  }
});

export default Pagination;
