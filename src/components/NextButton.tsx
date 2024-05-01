import React, {  } from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, G, Circle } from 'react-native-svg';

type Props = {
  index: number
}

function NextButton({index}: Props): React.JSX.Element {
  const size = 64
  const strokeWidth = 2
  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const progress = index

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation='-90' origin={center}>
        <Circle fill='none' stroke='#e6e7e8' cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
        <Circle fill='none' stroke='#132482' cx={center} cy={center} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={circumference - (circumference / 4 * progress)} />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default NextButton;
