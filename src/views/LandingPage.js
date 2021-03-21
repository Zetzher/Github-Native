import React, {useState} from 'react';
import {generatePath} from 'react-router';
import {View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import {
  Container,
  Button,
  Text,
  H1,
  H3,
  Input,
  Item,
  Toast,
  Root,
} from 'native-base';
import axios from 'axios';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';

import RemoveLetters from '../components/Algorithm/DeleteLetters';

const LandingPage = props => {
  const [username, setUsername] = useState();
  const [loader, setLoader] = useState(false);

  const navigation = useNavigation();

  //He utilizado una función para hacer todas las llamadas cuando buscamos a un usuario, de esta forma, cuando tenemos toda la información, es enviada a la vista del perfil y no hace otra llamada.
  const gettingProfile = async () => {
    if (!username) {
      Toast.show({
        text: 'Introduce un usuario',
        textStyle: {fontSize: 16},
        buttonText: 'Vale',
        position: 'bottom',
        buttonStyle: {backgroundColor: '#C2C3C8'},
        duration: 4000,
      });
      return;
    }
    setLoader(!loader);
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

      const commitsResponse = await axios.get(
        generatePath('https://api.github.com/users/:username/events', {
          username: username,
        }),
      );
      const arrComits = [];

      commitsResponse.data.map(data => {
        if (data.payload.commits) {
          const {
            created_at,
            payload: {commits},
          } = data;
          const obj = {creado: created_at, commits: commits};
          arrComits.push(obj);
        }
      });

      navigation.navigate('Profile', {
        userInfo: response.data,
        userRepos: repoResponse.data,
        repoStarred: starredResponse.data,
        follow: followersResponse.data,
        followMe: followingResponse.data,
        commits: arrComits,
        loader: setLoader,
      });
    } catch (err) {
      const {status} = err.response;

      if (status === 404) {
        Toast.show({
          text: 'Usuario no encontrado',
          textStyle: {fontSize: 20, fontWeight: 'bold'},
          buttonText: 'Vale',
          position: 'bottom',
          buttonStyle: {backgroundColor: '#C2C3C8'},
          duration: 4000,
        });
        setLoader(false);
      }
    }
  };

  return (
    <Root>
      <Container style={globalStyles.contenedor}>
        <Animatable.View
          animation="zoomIn"
          duration={1000}
          style={globalStyles.contenido}>
          <Image
            style={globalStyles.githubIconLanding}
            resizeMode="contain"
            source={require('../assets/img/github-icon.png')}
          />
          <H1 style={globalStyles.titulo}>¡Bienvenido a Github!</H1>
          <H3 style={globalStyles.subTitulo}>
            Inserta la cuenta a la que quieres acceder
          </H3>

          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Username"
              style={{textAlign: 'center'}}
              onChangeText={e => setUsername(e)}>
              {username}
            </Input>
            {username ? (
              <Animatable.View
                animation="flipInY"
                style={{position: 'relative', right: 4}}>
                <Button
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 8,
                    borderColor: 'transparent',
                  }}
                  onPress={() => RemoveLetters(username, setUsername)}>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleLeft}
                    style={{marginRight: 10, marginLeft: 10}}
                  />
                </Button>
              </Animatable.View>
            ) : null}
          </Item>
          {loader && (
            <LottieView
              source={require('../assets/loader/loader.json')}
              autoPlay
              loop
              speed={1}
              style={{
                width: 100,
                height: 100,
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}
            />
          )}

          <View style={{width: '40%'}}>
            <Button
              square
              block
              style={globalStyles.boton}
              onPress={gettingProfile}>
              <Text style={globalStyles.botonTexto}>Buscar</Text>
            </Button>
          </View>
        </Animatable.View>
      </Container>
    </Root>
  );
};

export default LandingPage;
