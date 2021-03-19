import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  contenido: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '2.5%',
    flex: 1,
    zIndex: 2,
  },
  titulo: {
    textAlign: 'center',
    position: 'relative',
    bottom: 50,
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitulo: {
    textAlign: 'center',
    fontSize: 15,
    position: 'relative',
    bottom: 40,
  },
  input: {
    backgroundColor: '#FFF',
    marginBottom: 20,
    width: '60%',
    zIndex: 2,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  boton: {
    backgroundColor: '#28303B',
    marginTop: 20,
    width: '100%',
    borderRadius: 8,
    zIndex: 2
  },
  botonTexto: {textTransform: 'uppercase', fontWeight: 'bold', color: '#FFF'},
  enlace: {
    color: '#FFF',
    marginTop: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  githubIcon: {
    width: 50,
    height: 50,
  },
  githubIconLanding: {
    zIndex: 1,
    opacity: 0.1,
    position: 'absolute',
    width: '100%',
    top: 10,
  },
  headerNav: {
    height: 70,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  userInfo: {
    flexDirection: 'row',
    position: 'relative',
    top: 10,
  },
  nameUser: {
    position: 'relative',
    left: 30,
  },
  bioProfile: {
    position: 'relative',
    top: 30,
    alignItems: 'center',
  },
  scrollViewContainer: {
    marginTop: 50,
  },
  scrollDetailed: {
    alignItems: 'center',
    flex: 1,
    marginTop: 10
  },
});

export default globalStyles;
