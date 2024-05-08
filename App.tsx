import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Welcome from './src/components/Welcome.tsx'
import Slider from './src/components/Slider.tsx'
import AvatarSelection from './src/screens/AvatarSelection.tsx'
import Home from './src/screens/Home.tsx';

const {width, height} = Dimensions.get('screen')
function App(): React.JSX.Element {
  const [isFirstTime, setIsFirstTime] = useState(true);

  const [loading, setLoading] = useState(true)
  const Stack = createNativeStackNavigator()

  useEffect(() => {
    AsyncStorage.getItem('firstTime').then((value) => {
      if (value !== null) {
        // actualiza el estado para indicar que no es la primera vez
        setIsFirstTime(false)
      } else {
        // guarda un indicador en AsyncStorage
        AsyncStorage.setItem('firstTime', 'false')
      }
    })
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
      <Stack.Navigator initialRouteName={isFirstTime ? 'Welcome':'Avatars'}>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name='Welcome' component={Welcome} />
          <Stack.Screen name='Questions' component={Slider} />
          <Stack.Screen name='Avatars' component={AvatarSelection} />
          <Stack.Screen name='Home' component={Home} />
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
    backgroundColor: '#fff',
  },
  img: {
    width: '100%'
  }
})

export default App;
