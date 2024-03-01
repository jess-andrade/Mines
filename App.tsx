/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Field from './src/components/Field';
import params from './src/params';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container} >

      <Text style={styles.text}>Starting MINES!</Text>
      <Text style={styles.text}> Grid Size:
        {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>

      <Field />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
      <Field flagged />
      <Field flagged opened />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },

});

export default App;
