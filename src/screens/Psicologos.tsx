import { useNavigation } from "@react-navigation/native"
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import psicologos from "../data/psicologos"
import React from "react"

const {width, height} = Dimensions.get('window')
const Psicologos = ():React.JSX.Element => {
  const navigation = useNavigation()
  const showPsicologysts = () => {
    return Object.values(psicologos).map((psicologo) => {
      return (
        <React.Fragment key={psicologo.id}>
          <View style={[styles.sectionContainer]}>
            <View style={[styles.iconbg]}>
              <Image style={[styles.icon]} source={psicologo.img} resizeMode="contain" />
            </View>
            <View style={[styles.txtContainer]}>
              <Text style={[styles.txt, {marginBottom: 20}]}>{psicologo.nombre}</Text>
              <Text style={[styles.txt]}>{psicologo.trayectoria}</Text>
              <TouchableOpacity style={[styles.consult]} onPress={() => {navigation.navigate('Calendario' as never)}}>
                <Text style={[{color: '#fff', fontSize: 16}]}>Ver disponibilidad</Text>
              </TouchableOpacity>
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
          <View style={[styles.sectionContainer, {backgroundColor: '#edf2f2', borderRadius: 100}]}>
            <View style={[styles.iconbg]}>
              <Image style={[styles.icon]} resizeMode="contain" source={require('../img/icons/manitas_corazon.png')} />
            </View>
            <View style={[styles.txtContainer]}>
              <Text style={[styles.txt]}>Puedes solicitar apoyo psicológico u orientación.</Text>
            </View>
          </View>
        </View>
      <ScrollView>
        <View>
          {showPsicologysts()}
        </View>
      </ScrollView>
      <View style={[styles.lower]}>
        <Text style={[{color: '#fff', fontSize: 16, textAlign: 'center'}]}>Contacta a uno de los psicológos que estan disponibles para ti, consulta sus horarios de atención y manda un mensaje de confirmación.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010a54',
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
  txtContainer: {
    height: height * .15,
    width: width * .6,
    backgroundColor: '#edf2f2',
    borderRadius: 32,
    justifyContent: 'center'
  },
  txt: {
    color: '#010a54',
    fontSize: 16,
    textAlign: 'center',
  },
  sectionContainer: {
    alignItems: 'center',
    width: width * .92,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: width * .24,
    height: width * .24,
  },
  lower: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: width * .92,
    paddingVertical: 6,
  },
  consult: {
    width: width * .45,
    paddingVertical: 6,
    backgroundColor: '#010a54',
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
  },
})

export default Psicologos
