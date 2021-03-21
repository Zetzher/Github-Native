
import React from 'react';
import {View, Linking,} from 'react-native';
import {Text} from 'native-base';
import Unexpected from "../Unexpected";

const Repositories = props => {
  const [...repositories] = props.star;

  return (
    <>
      {repositories.map((data, key) => {
        const {name, clone_url, language, updated_at} = data;

        return (
          <View
            key={key}
            style={{
              borderColor: '#F0F0F0',
              borderTopWidth: 1,
              marginTop: 10,
              marginBottom: 10,
              paddingTop: 20,
              height: 100,
            }}>
            <Text
              style={{color: '#0366d6', fontWeight: 'bold', fontSize: 22}}
              onPress={() => Linking.openURL(clone_url)}>
              {name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                position: 'relative',
                top: 30,
                justifyContent: 'space-between',
              }}>
              <Text>
                {language ? `With ${language}` : 'Language not included'}
              </Text>
              <Text>Updated {new Date(updated_at).toDateString()}</Text>
            </View>
          </View>
        );
      })}
      <Unexpected />
    </>
  );
};

export default Repositories;
