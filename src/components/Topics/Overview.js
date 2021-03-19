import React from 'react';
import {View, Linking} from 'react-native';
import {Text} from 'native-base';

const Overview = (props) => {
    const {message} = props;
    console.log(message, 'message')
  return (
    <>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 8,
          borderStyle: 'solid',
          borderColor: '#ECECEC',
          height: 50,
          paddingLeft: 10,
          paddingTop: 10,
        }}>
        {message && message.html_url ? (
          <Text
            style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}
            onPress={() => Linking.openURL(message.html_url)}>
            Click to see my secret readme!
          </Text>
        ) : (
          <Text style={{fontSize: 14}}>{message}</Text>
        )}
      </View>
    </>
  );
};

export default Overview;
