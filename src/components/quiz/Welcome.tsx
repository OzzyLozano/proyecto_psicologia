import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
}

const {width, height} = Dimensions.get('window')
const Welcome = (): React.JSX.Element => {
  const navigation = useNavigation()
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenidos a Nahualli</Text>
      <Text style={styles.description}>Una aplicación creada por y para estudiantes, con el objetivo de brindar un espacio seguro a hombres y jóvenes que  busquen conocer temas relacionados a la salud mental, poder compartir sus experiencias y que deseen contactar a profesionales en el área de la psicología. </Text>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Questions' as never)}} >
        <Text style={styles.btntxt}>Iniciar Encuesta</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems:'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: '800',
    marginBottom: 30,
    marginHorizontal: 24,
    fontSize: 32,
    color: '#122383',
    textTransform: 'uppercase',
  },
  description: {
    textAlign: 'center',
    margin: 40,
    fontSize: 20,
    color: '#132482',
  },
  button: {
    backgroundColor: '#122383',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  btntxt: {
    color: '#fff',
    fontSize: 16,
  },
})

export default Welcome
