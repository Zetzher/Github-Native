import React from 'react';
import {View, Image} from 'react-native';
import {Text} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

import Unexpected from '../Unexpected';

import globalStyles from '../../styles/global';

const Projects = () => {
  return (
    <>
      <View style={{height: 150}}>
        <View
          style={{
            backgroundColor: '#F6F8FA',
            height: 40,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderWidth: 0.2,
            borderBottomWidth: 0,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/img/graph-icon.png')}  style={{marginLeft: 10}} />
          <Text style={{fontWeight: 'bold', fontSize: 12}}>0 Open</Text>
          <FontAwesomeIcon icon={faCheck} style={{marginLeft: 20, marginRight: 10}} />
          <Text style={{fontSize: 12}}>0 Closed</Text>
        </View>

        <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            borderWidth: 0.2,
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>
            Zetzher doesn't have any projects yet
          </Text>
        </View>
      </View>
      <Unexpected />
    </>
  );
};

export default Projects;
