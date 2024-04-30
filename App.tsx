import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';

import Slider from './src/components/Slider.tsx'

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Slider />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default App;
