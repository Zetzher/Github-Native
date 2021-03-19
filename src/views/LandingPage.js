import React, {useState} from 'react';
import {generatePath} from 'react-router';
import {View, Image} from 'react-native';
import {
  Container,
  Button,
  Text,
  H1,
  H3,
  Input,
  Form,
  Item,
  Toast,
} from 'native-base';
import axios from 'axios';
import globalStyles from '../styles/global';

import {useNavigation} from '@react-navigation/native';

const LandingPage = () => {
  const [username, setUsername] = useState();
  const [errorMes, setErrorMes] = useState();

  const navigation = useNavigation();

  const gettingProfile = async () => {
    try {
      const response = await axios.get(
        generatePath('https://api.github.com/users/:username', {
          username: username,
        }),
      );
      const repoResponse = await axios.get(
        generatePath('https://api.github.com/users/:username/repos', {
          username: username,
        }),
      );
      const starredResponse = await axios.get(
        generatePath('https://api.github.com/users/:username/starred', {
          username: username,
        }),
      );
      const followersResponse = await axios.get(
        generatePath('https://api.github.com/users/:username/followers', {
          username: username,
        }),
      );
      const followingResponse = await axios.get(
        generatePath('https://api.github.com/users/:username/following', {
          username: username,
        }),
      );
      

      navigation.navigate('Profile', {
        userInfo: response.data,
        userRepos: repoResponse.data,
        repoStarred: starredResponse.data,
        follow: followersResponse.data,
        followMe: followingResponse.data
      });
    } catch (err) {
      return null;
    }
  };

  return (
    <>
      <Container style={globalStyles.contenedor}>
        <View style={globalStyles.contenido}>
          <Image
            style={globalStyles.githubIconLanding}
            resizeMode="contain"
            source={require('../assets/github-icon.png')}
          />
          <H1 style={globalStyles.titulo}>¡Bienvenido a Github!</H1>
          <H3 style={globalStyles.subTitulo}>
            Inserta la cuenta a la que quieres acceder
          </H3>
          <Form>
            <Item inlineLabel last style={globalStyles.input}>
              <Input
                placeholder="Username"
                style={{textAlign: 'center'}}
                onChangeText={e => setUsername(e)}
              />
            </Item>
          </Form>
          <View style={{width: '40%'}}>
            <Button
              square
              block
              style={globalStyles.boton}
              onPress={gettingProfile}>
              <Text style={globalStyles.botonTexto}>Buscar</Text>
            </Button>
          </View>
        </View>
      </Container>
    </>
  );
};

export default LandingPage;
