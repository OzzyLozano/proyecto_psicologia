import React, { useEffect, useState } from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './src/components/Welcome.tsx'
import Slider from './src/components/Slider.tsx'

const {width, height} = Dimensions.get('screen')
function App(): React.JSX.Element {
  const [loading, setLoading] = useState(true)
  const Stack = createNativeStackNavigator()

  useEffect(() => {
    const sleep = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setLoading(false)
    }
    sleep()
  }, [])
  
  if (loading) {
    return (
      <View style={styles.loading}>
        <Image source={require('./src/img/nahualli.png')} style={styles.img} resizeMode='contain' />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name='Welcome' component={Welcome} />
          <Stack.Screen name='Questions' component={Slider} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loading: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%'
  }
});

export default App;
