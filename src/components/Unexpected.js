import React from 'react';
import {View, Text} from "react-native";
import Footer from '../components/Footer';

const Unexpected = () => {
    return (
      <>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: "center", height: 100}}>
          <Text
            style={{
              fontSize: 11
            }}>
            Seeing something unexpected? Take a look at the <Text
              style={{
                fontSize: 11,
                color: '#0366D6',
              }}
              onPress={() =>
                Linking.openURL(
                  'https://docs.github.com/en/github/setting-up-and-managing-your-github-profile',
                )
              }>
              GitHub profile guide.
            </Text>
          </Text>
        </View>
          <Footer />
          </>
    )
}

export default Unexpected;
