import { Dimensions, StyleSheet, View } from "react-native"

const {width, height} = Dimensions.get('screen')
const Home = ():React.JSX.Element => {
  return (
    <View style={[styles.container]}>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width, height,
    backgroundColor: '#010a5a',
  },
})

export default Home
