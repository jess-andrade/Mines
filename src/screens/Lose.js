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
          <Text style={styles.title}>kuromi destroyed everything</Text>
          <Image
            style={styles.kuromi}
            source={require('../images/kuromilose.png')}
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
    backgroundColor: 'rgba(81, 66, 131, 0.8)',
  },
  container: {
    backgroundColor: '#444144',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#cac5ed',
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#5a5859',
    minWidth: 200,
    alignItems: 'center'
  },
  buttonLabel: {

    fontSize: 20,
    color: '#f0c3e2',
    fontWeight: 'bold',
  },
  kuromi: {
    width: 120,
    height: 125,
  },
})