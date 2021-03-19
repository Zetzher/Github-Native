import React, {useState} from 'react';
import {View, Image, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Text} from 'native-base';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

import globalStyles from '../styles/global';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <View style={globalStyles.headerNav}>
        <TouchableHighlight onPress={() => navigation.navigate("Landing")}>
          <Image
            style={globalStyles.githubIcon}
            source={require('../assets/github_monster.png')}
          />
        </TouchableHighlight>
        <FontAwesomeIcon
          style={{position: 'relative', right: 20, color: '#FFF'}}
          icon={faBars}
          onPress={() => setMenu(!menu)}
        />
      </View>

      {menu && (
        <View style={globalStyles.navbar}>
          <View
            style={{
              height: 80,
              borderBottomWidth: 0.2,
              borderColor: '#5a616a',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon
              style={{color: '#5a616a', position: 'relative', right: 20}}
              icon={faTimes}
              onPress={() => setMenu(!menu)}
            />
          </View>
          <View style={globalStyles.navbarTopics}>
            <View
              style={{
                height: 80,
                width: '90%',
                borderBottomWidth: 0.2,
                borderColor: '#5a616a',
                justifyContent: 'center',
              }}>
              <Text onPress={() => navigation.navigate('Profile')}>
                Profile
              </Text>
            </View>
          </View>
          <View style={globalStyles.navbarTopics}>
            <View
              style={{
                height: 80,
                width: '90%',
                borderBottomWidth: 0.2,
                borderColor: '#5a616a',
                justifyContent: 'center',
              }}>
              <Text onPress={() => navigation.navigate('Commits')}>
                Commits
              </Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Navbar;
