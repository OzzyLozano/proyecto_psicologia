import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import avatars from '../../data/avatars'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {
  quiz: boolean,
  setQuiz: React.Dispatch<React.SetStateAction<boolean>>
}

interface Avatar {
  id: number;
  name: string;
  img: any;
  description: string;
}

const avatarList = avatars

const {width, height} = Dimensions.get('window')
const AvatarSelection = ({quiz, setQuiz}: Props): React.JSX.Element => {
  const navigation = useNavigation()
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar>({
    id: 0,
    name: "",
    img: undefined,
    description: ""
  })
  const [avatarStyle, setAvatarStyle] = useState<any>({})
  const showAvatars = () => {
    return Object.values(avatarList).map((avatar) => {
      return (
        <React.Fragment key={avatar.id}>
          <TouchableOpacity style={[styles.sectionContainer, selectedAvatar?.id === avatar.id && styles.selected]} onPress={() => {
            setSelectedAvatar(avatar)
            setAvatarStyle(styles.selected)
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
        <TouchableOpacity style={styles.button} onPress={() => {
          AsyncStorage.getItem('quiz').then((value) => {
            if (value !== null) {
              setQuiz(false)
            } else {
              AsyncStorage.setItem('quiz', 'false')
            }
          })
          AsyncStorage.getItem('avatar').then((value) => {
            if (value !== null) {
              console.log(value)
            } else {
              AsyncStorage.setItem('avatar', selectedAvatar.id.toString())
            }
          })
          console.log(selectedAvatar)
          navigation.navigate('Home' as never)
          }} >
          <Text style={styles.btntxt}>Finalizar</Text>
        </TouchableOpacity>
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
    marginTop: -35,
    marginBottom: 15,
    alignSelf: 'center'
  },
  btntxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
  selected: {
    padding: 16,
  },
})

export default AvatarSelection
