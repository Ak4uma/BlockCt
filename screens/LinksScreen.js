import React, { Component } from 'react';
import { WebView,ImageBackground} from 'react-native';
import {StyleSheet,Text,Image,View} from 'react-native';


export default class MyWeb extends Component<{}> {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.advancedblockchain.com/en/newsroom.html'}}
        style={{marginTop: 20}}
      />
    );
  }
}


