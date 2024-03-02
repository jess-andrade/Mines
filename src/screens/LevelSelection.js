import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Image
} from 'react-native'

export default props => {
  return (
    <Modal onRequestClose={props.onCancel}
      visible={props.isVisible} animationType='fade'
      transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>choose difficulty</Text>
          <TouchableOpacity
            style={[styles.button, styles.bgEasy]}
            onPress={() => props.onLevelSelected(0.1)}>
            <Image
              style={styles.chiffon}
              source={require('../images/chiffon.png')}
            />
            <Text style={styles.buttonLabel}>easy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgMedium]}
            onPress={() => props.onLevelSelected(0.2)}>
            <Image
              style={styles.mocha}
              source={require('../images/mocha.png')}
            />
            <Text style={styles.buttonLabel}>medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgHard]}
            onPress={() => props.onLevelSelected(0.3)}>
            <Image
              style={styles.cinamo3}
              source={require('../images/cinamo3.png')}
            />
            <Text style={styles.buttonLabel}>hard</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    backgroundColor: '#fdf2fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#b0daec'
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#d3b897',
    fontWeight: 'bold',
  },
  bgEasy: {
    backgroundColor: '#fefbba',
    minWidth: 220,
  },
  bgMedium: {
    backgroundColor: '#f6d4e3',
    minWidth: 220,
  },
  bgHard: {
    backgroundColor: '#b0daec',
    minWidth: 220,
  },
  chiffon: {
    width: 46,
    height: 28,
  },
  mocha: {
    width: 46,
    height: 30,
  },
  cinamo3: {
    width: 46,
    height: 30,
  },


})