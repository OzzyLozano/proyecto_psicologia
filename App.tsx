import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Welcome from './src/components/quiz/Welcome.tsx'
import Slider from './src/components/quiz/Slider.tsx'
import AvatarSelection from './src/components/avatar/AvatarSelection.tsx'
import Home from './src/screens/Home.tsx'
import Help from './src/screens/Help.tsx'
import Psicologos from './src/screens/Psicologos.tsx'

const {width, height} = Dimensions.get('window')
function App(): React.JSX.Element {
  const [quiz, setQuiz] = useState(true);

  const [loading, setLoading] = useState(true)
  const Stack = createNativeStackNavigator()

  useEffect(() => {
    AsyncStorage.getItem('quiz').then((value) => {
      if (value !== null) {
        // actualiza el estado para indicar que el quiz se contesto y se eligio avatar
        setQuiz(false)
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
        <Image source={require('./src/img/logo/nahualli.png')} style={styles.img} resizeMode='contain' />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={quiz ? 'Welcome':'Home'}>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name='Welcome' component={Welcome} />
          <Stack.Screen name='Questions' component={Slider} />
          <Stack.Screen name='Avatars'>
            {() => <AvatarSelection quiz={quiz} setQuiz={setQuiz} />}
          </Stack.Screen>
          <Stack.Screen name='Home'>
            {() => <Home />}
          </Stack.Screen>
          <Stack.Screen name='Ayuda' component={Help} />
          <Stack.Screen name='Psicologos' component={Psicologos} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  img: {
    width: '100%'
  }
})

export default App;
