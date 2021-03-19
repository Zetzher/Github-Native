import React, {useState} from 'react';
import {View, Linking, ScrollView, Image} from 'react-native';
import {Text, Container, Item, Form, Input, Button} from 'native-base';

import globalStyles from '../../styles/global';

const Followers = props => {
  const {users} = props;

  return (
    <ScrollView>
      {users.map((data, key) => {
        const {avatar_url, login, html_url, bio} = data;
        return (
          <View
            key={key}
            style={{
              height: 120,
              borderColor: '#F0F0F0',
              borderTopWidth: 1,
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <Image
              source={{uri: avatar_url}}
              style={{width: 50, height: 50, borderRadius: 30}}
            />
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <Text style={{position: 'relative', bottom: 10}}>{login}</Text>
              {bio && <Text>{bio}</Text>}
              <View>
                <Button
                  bordered
                  light
                  style={{position: 'relative', top: 10, height: 30}}
                  onPress={() => Linking.openURL(html_url)}>
                  <Text>Website</Text>
                </Button>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Followers;
