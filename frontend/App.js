/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import {frontend} from './src/frontend.js'
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,

  StatusBar,
} from 'react-native';

import Frontend from './src/frontend.js'

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component{
  render() {
    return (

          <Frontend/>

    );
  }
}


/*
const App: () => React$Node = () => {
  return (

  );
};
*/
const styles = StyleSheet.create({
container: {
  //flex: 1,
  justifyContent: "center",
  alignItems: "center"
}

});

//export default App;
