import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field'

export default props => {
  //transforming into an array with jsx elements
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} />
    })
    return <View key={r}
      style={{ flexDirection: 'row' }}>{columns}</View>
  })
  return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE'
  }
})