import React from 'react';

import {View, Image, ScrollView, Linking} from 'react-native';

import {Container, Button, Text} from 'native-base';

import globalStyles from "../styles/global";

const Footer = () => {
  return (
    <View
      style={{
        flex: 1,
        height: 140,
        width: '100%',
        borderTopWidth: 0.2,
        alignItems: 'center',
        justifyContent: "center",
        
      }}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '85%'
        }}>
        <Text style={{marginRight: 5, color: "#586069", fontSize: 11}}>©2021 GitHub, Inc.</Text>
        <Text
          style={{marginRight: 10, color: "#0366D6", fontSize: 11}}
          onPress={() =>
            Linking.openURL(
              'https://docs.github.com/en/github/site-policy/github-terms-of-service',
            )
          }>
          Terms
        </Text>
        <Text
          style={{marginRight: 10, color: "#0366D6", fontSize: 11}}
          onPress={() =>
            Linking.openURL(
              'https://docs.github.com/en/github/site-policy/github-privacy-statement',
            )
          }>
          Privacy
        </Text>
        <Text
          style={{marginRight: 10, color: "#0366D6", fontSize: 11}}
          onPress={() => Linking.openURL('https://github.com/security')}>
          Security
        </Text>
        <Text
          style={{marginRight: 10, color: "#0366D6", fontSize: 11}}
          onPress={() => Linking.openURL('https://www.githubstatus.com/')}>
          Status
        </Text>
        <Text style={{marginRight: 10, color: "#0366D6", fontSize: 11}} onPress={() => Linking.openURL('https://docs.github.com/en')}>
          Docs
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          marginTop: 10
        }}>
        <Text style={globalStyles.termsFooter} onPress={() => Linking.openURL('https://support.github.com/')}>
          Contact GitHub
        </Text>
        <Text style={globalStyles.termsFooter} onPress={() => Linking.openURL('https://github.com/pricing')}>
          Pricing
        </Text>
        <Text style={globalStyles.termsFooter} onPress={() => Linking.openURL('https://docs.github.com/en')}>
          API
        </Text>
        <Text style={globalStyles.termsFooter} onPress={() => Linking.openURL('https://services.github.com/')}>
          Training
        </Text>
        <Text style={globalStyles.termsFooter} onPress={() => Linking.openURL('https://github.blog/')}>
          Blog
        </Text>
        <Text style={globalStyles.termsFooter} onPress={() => Linking.openURL('https://github.com/about')}>
          About
        </Text>
      </View>
    </View>
  );
};

export default Footer;
