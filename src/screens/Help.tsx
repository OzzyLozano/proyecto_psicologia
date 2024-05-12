import { Dimensions, Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"

import help from '../data/help.js'

type Props = {
}

const {width, height} = Dimensions.get('window')
const Help = ({}: Props):React.JSX.Element => {
  const navigation = useNavigation()

  const showHelpOptions = () => {
    return Object.values(help).map((option) => {
      return (
        <React.Fragment key={option.id}>
          <View style={[styles.sectionContainer]}>
            <View style={[styles.txtContainer]}>
              <Text style={[styles.txt]}>{option.description}</Text>
            </View>
            <View style={[styles.iconbg]}>
              <Image style={[styles.icon]} source={option.img} resizeMode="contain" />
            </View>
          </View>
        </React.Fragment>
      )
    })
  }

  return (
    <View style={[styles.container]}>
        <View style={[styles.upper]}>
          <TouchableOpacity style={[styles.upperOption]} onPress={() => {navigation.goBack()}}>
            <Text style={[{color: '#010a5a', fontSize: 16}]}>Regresar</Text>
          </TouchableOpacity>
        </View>
        <View style={[]}>
          <View style={[styles.titleSection]}>
            <Text style={[styles.txt]}>En Nahualli queremos ayudarte, llevamos a ti, información que puede interesarte.</Text>
          </View>
        </View>
      <ScrollView>
        <View>
          {showHelpOptions()}
        </View>
      </ScrollView>
      <View style={[styles.lower]}>
        <TouchableOpacity style={[styles.lowerOption]} onPress={() => navigation.navigate('Psicologos' as never)}>
          <Text style={[{color: '#fff', fontSize: 16}]}>Recuerda que puedes solicitar ayuda si lo necesitas.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010a5a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upper: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginHorizontal: 12,
  },
  upperOption: {
    width: width * .45,
    paddingVertical: 6,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  titleSection: {
    marginVertical: 12,
    width: width * .97
  },
  txt: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
  },
  sectionContainer: {
    alignItems: 'center',
    width: width * .92,
    borderRadius: 32,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtContainer: {
    width: width * .6,
    backgroundColor: '#0071bc',
    height: height * .15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  iconbg: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    width: width * .3,
    height: width * .3,
  },
  icon: {
    width: width * .22,
    height: width * .22,
  },
  lower: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  lowerOption: {
    width: width * .96,
    paddingVertical: 6,
    backgroundColor: '#123482',
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
})

export default Help
