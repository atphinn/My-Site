/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableHighlight,
  Navigator
} from 'react-native';

class MartialArt extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
         
        </Text>
        <TouchableHighlight style={styles.enter}>
          <View>
            <Text>DOZO!</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    
    },

    enter: {
    alignItems: 'center',  
    backgroundColor:'rgb(255, 0, 0)',
    borderRadius: 75,
    height: 150,
    justifyContent:'center',
    width: 150,    
    }
});
  

AppRegistry.registerComponent('MartialArt', () => MartialArt);
