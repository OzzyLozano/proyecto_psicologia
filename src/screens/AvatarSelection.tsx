import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import avatars from '../data/avatars'

type Props = {
}

const avatarList = avatars

const {width, height} = Dimensions.get('screen')
const AvatarSelection = (): React.JSX.Element => {
  const navigation = useNavigation()
  const showAvatars = () => {
    return Object.values(avatarList).map((avatar) => {
      return (
        <React.Fragment key={avatar.id}>
          <TouchableOpacity style={[styles.sectionContainer]} onPress={() => {
            console.log('pressed:', avatar.id)
          }}>
            <View style={[styles.avatarBg]}>
              <Image style={[styles.avatar]} source={avatar.img} resizeMode='contain' />
            </View>
            <Text style={[styles.description]}>{avatar.description}</Text>
          </TouchableOpacity>
        </React.Fragment>
      )
    })
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Elige tu avatar!</Text>
      <ScrollView>
        {showAvatars()}
        {<TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Home' as never)}} >
          <Text style={styles.btntxt}>Finalizar</Text>
        </TouchableOpacity>}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems:'center',
  },
  title: {
    marginVertical: 12,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 32,
    color: '#122383',
  },
  sectionContainer: {
    backgroundColor: '#132482',
    alignItems: 'center',
    width: width * .92,
    borderRadius: 60,
    marginBottom: 50,
    flexDirection: 'row',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  avatarBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 160,
    backgroundColor: '#edf2f2',
    borderWidth: 6,
    borderColor: '#132482',
    borderRadius: 100,
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    width: width - 240,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#122383',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: -30,
    marginBottom: 60,
    alignSelf: 'center'
  },
  btntxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
})

export default AvatarSelection
