import AsyncStorage from "@react-native-async-storage/async-storage"
import { Dimensions, Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native"
import { useEffect, useState } from "react"
import React from "react"
import { useNavigation } from "@react-navigation/native"

import avatars from "../data/avatars"
import posts from "../data/posts"

type Props = {
}

const {width, height} = Dimensions.get('window')
const Home = ({}: Props):React.JSX.Element => {
  const navigation = useNavigation()
  const [avatar, setAvatar] = useState<any>(null)
  const showPosts = () => {
    return Object.values(posts).map((post) => {
      return (
        <React.Fragment key={post.id}>
          <View style={[styles.sectionContainer]}>
            <View style={[{alignItems: 'center'}]}>
              <Text style={[{color: '#fff', fontSize: 16, backgroundColor: '#132482', padding: 6, borderRadius: 20}]}>{post.userName}</Text>
              <View style={[styles.avatarBg, {borderColor: '#010a5a'}]}>
                <Image style={[styles.avatar]} source={avatars[post.id].img} resizeMode='contain' />
              </View>
            </View>
            <View style={[styles.description]}>
              {post.post.description && <Text style={[styles.descriptionTxt, {color: '#010a54', fontSize: 20}]}>{post.post.description}</Text>}
              <View style={[{alignSelf: 'center', width: '100%'}]}>
                <Image style={[styles.avatar, {width: '100%', height: 160}]} source={post.post.img} resizeMode='contain' />
              </View>
            </View>
          </View>
        </React.Fragment>
      )
    })
  }

  useEffect(() => {
    AsyncStorage.getItem('avatar').then(value => {
      if (value !== null) {
        const selectedAvatar = Object.values(avatars).find(avatar => avatar.id.toString() === value)
        if (selectedAvatar) {
          setAvatar(selectedAvatar)
        }
      }
    })
  }, [])

  return (
    <View style={[styles.container]}>
      <ScrollView>
        <View style={[styles.upper]}>
          <View style={[styles.upperOption]}>
            <Text style={[styles.avisoPriv]}>Aviso de Privacidad</Text>
          </View>
          <TouchableOpacity style={[styles.upperOption, {backgroundColor: '#132482'}]} onPress={() => {
            navigation.navigate('Ayuda' as never)
          }}>
            <Text style={[{color: '#fff'}]}>Ayuda</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconsContainer}>
          <View style={[styles.iconbg, {backgroundColor: '#fff'}]}>
            <Image style={[styles.icon]} source={require('../img/icons/manitas_corazon.png')} resizeMode="contain" />
          </View>
          <View style={[styles.iconbg, {backgroundColor: '#fff'}]}>
            <Image style={[styles.icon]} source={require('../img/icons/cerebrito.png')} resizeMode="contain" />
          </View>
          <View style={styles.iconbg}>
            <Image style={[styles.icon]} source={require('../img/icons/msg.png')} resizeMode="contain" />
          </View>
          <View style={styles.iconbg}>
            <Image style={[styles.icon]} source={require('../img/icons/gotita.png')} resizeMode="contain" />
          </View>
        </View>
        {avatar && (
          <View style={[styles.sectionContainer, {backgroundColor: '#132482', borderWidth: 2, borderColor: '#132482',}]} key={avatar.id}>
            <View style={[styles.avatarBg, {borderColor: '#010a5a', backgroundColor: '#132482'}]}>
              <Image style={[styles.avatar]} source={avatar.img} resizeMode='contain' />
            </View>
            <View style={[styles.description]}>
              <Text style={[styles.descriptionTxt]}>Comparte una experiencia</Text>
            </View>
          </View>
        )}
        {showPosts()}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width, height,
    backgroundColor: '#010a5a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    alignItems: 'center',
    width: width * .92,
    borderRadius: 32,
    marginVertical: 20,
    flexDirection: 'row',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    justifyContent: 'space-between',
  },
  avatar: {
    width: width *.92 * .17,
    height: width *.92 * .17,
  },
  avatarBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width *.92 * .24,
    height: width *.92 * .24,
    backgroundColor: '#edf2f2',
    borderWidth: 4,
    borderColor: '#132482',
    borderRadius: 100,
  },
  description: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignSelf: 'center',
    padding: 12,
    width: '72%',
    marginRight: 6,
  },
  descriptionTxt: {
    color: '#132482',
  },
  upperOption: {
    width: width * .45,
    paddingVertical: 6,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avisoPriv: {
    color: '#010a54'
  },
  iconsContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    marginTop: 12
  },
  iconbg: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    width: 80,
    height: 80,
  },
  icon: {
    width: 69,
    height: 69,
  },
  upper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

export default Home
