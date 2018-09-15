import React, { Component } from 'react';
import { WebView,ImageBackground} from 'react-native';
import {StyleSheet,Text,Image,View} from 'react-native';


export default class MyWeb extends Component<{}> {
  render() {
    return (
      <WebView
        source={{uri: 'https://twitter.com/BlockchainAG'}}
        style={{marginTop: 20}}
      />
    );
  }
}


