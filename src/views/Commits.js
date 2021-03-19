import React, {useState} from 'react';
import {generatePath} from 'react-router';
import {View, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  Container,
  Button,
  Text,
  Input,
  Form,
  Item,
  Toast,
} from 'native-base';
import axios from 'axios';
import globalStyles from '../styles/global';

import {useNavigation} from '@react-navigation/native';

import Navbar from "../components/Navbar";

const Commits = (props) => {



  return (
    <>
      <Navbar />
    </>
  );
};

export default Commits;
