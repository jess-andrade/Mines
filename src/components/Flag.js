import React from 'react';
import { View, StyleSheet, Image } from 'react-native'

export default props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../images/hairbow.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 23,
    height: 20,
  }

})