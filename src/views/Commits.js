import React, {useState, useEffect} from 'react';
import {generatePath} from 'react-router';
import {View, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Button, Text, Input, Form, Item, Toast} from 'native-base';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Algorithm from '../components/Algorithm/GetDates';
import globalStyles from '../styles/global';

const Commits = ({navigation, route}) => {
  const [monthValues, setMonthValues] = useState();
  const [months, setMonths] = useState();

  const {userCommits} = route.params;

  useEffect(() => {
    Algorithm(userCommits, setMonthValues, setMonths);
  }, []);
  
  //Object.getOwnPropertyNames(months)
  //monthValues.map(data => Object.values(data))


  return (
    <>
      <Navbar />
      {months && (
        <LineChart
    data={{
      labels: Object.getOwnPropertyNames(months),
      datasets: [
        {
          data: monthValues
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
      )}
    </>
  );
};

export default Commits;
