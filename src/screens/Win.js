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
          <Text style={styles.title}>YOU WON !!  </Text>
          <Image
            style={styles.won}
            source={require('../images/won.png')}
          />
          <TouchableOpacity
            style={[styles.button, styles.bgClose]}
            onPress={() => props.onCancel()}>

            <Text style={styles.buttonLabel}>ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal >
  )
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(236, 169, 169, 0.5)',
  },
  container: {
    backgroundColor: '#e7f1f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f8bdc3',
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#d1eaf6',
    minWidth: 200,
    alignItems: 'center'
  },
  buttonLabel: {

    fontSize: 20,
    color: '#4cb4f0',
    fontWeight: 'bold',
  },
  won: {
    width: 140,
    height: 80,
  },
})