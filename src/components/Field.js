import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import params from '../params';
import Mine from './Mine';
import Flag from './Flag';

export default props => {

  const { mined, opened, nearMines, exploded, flagged } = props

  const styleField = [styles.field]
  //new styles here
  if (opened) styleField.push(styles.opened)
  if (exploded) styleField.push(styles.exploded)
  if (flagged) styleField.push(styles.flagged)
  if (!opened && !exploded) styleField.push(styles.regular)

  let color = null
  if (nearMines > 0) {
    if (nearMines == 1) color = 'blue'
    if (nearMines == 2) color = 'green'
    if (nearMines > 2 && nearMines < 6) color = 'red'
    if (nearMines >= 6) color = 'purple'
  }

  return (

    //conditional render 
    <View style={styleField}>
      {!mined && opened && nearMines > 0 ?
        <Text style={[styles.label, { color: color }]}>
          {nearMines}</Text> : false}
      {mined && opened ? <Mine /> : false}
      {flagged && !opened ? <Flag /> : false}
    </View>
  )
}

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#f9d3dc',
    borderLeftColor: '#FFEBED',
    borderTopColor: '#FFEBED',
    borderRightColor: '#de7cc8',
    borderBottomColor: '#de7cc8',
  },
  opened: {
    backgroundColor: '#f9d3dc',
    borderColor: '#F8C7D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  }

})