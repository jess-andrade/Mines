import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import Flag from './Flag'

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={props.onFlagPress}
          style={styles.flagButton}>
          <Image
            style={styles.image}
            source={require('../images/melody.png')}
          />
        </TouchableOpacity>
        <Text style={styles.flagsLeft}> = {props.flagsLeft}</Text>
      </View>
      <TouchableOpacity style={styles.button}
        onPress={props.onNewGame}>
        <Image
          style={styles.cinButton}
          source={require('../images/cinbutton.png')}
        />
        <Text style={styles.buttonLabel}>New Game</Text>
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fdf2fa',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: 45,
    height: 45,
  },
  cinButton: {
    width: 75,
    height: 30,
  },
  flagContainer: {
    flexDirection: 'row',
  },
  flagButton: {
    minWidth: 30,
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    marginLeft: 8,
    color: '#4cb4f0',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#b0daec',
    borderRadius: 20,
    padding: 10,
    minWidth: 150,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#d1ebf6',
    fontWeight: 'bold',
  }

})