import React, {useState, useEffect} from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Button, Text, Input, Form, Item, Toast} from 'native-base';
import {LineChart, ContributionGraph} from 'react-native-chart-kit';

import * as Animatable from 'react-native-animatable';

import axios from 'axios';

import Navbar from '../components/Navbar';
import Algorithm from '../components/Algorithm/GetDates';
import globalStyles from '../styles/global';

const Commits = ({navigation, route}) => {
  const [monthValues, setMonthValues] = useState();
  const [months, setMonths] = useState();
  const [days, setDays] = useState();

  const {userCommits} = route.params;

  useEffect(() => {
    Algorithm(userCommits, setMonthValues, setMonths, setDays);
  }, []);

  const dailyCommits = userCommits.map(data => {
    return {date: data.creado, count: data.commits.length};
  });
  console.log(dailyCommits, 'daily');

  return (
    <>
      <Navbar />

      <ScrollView>
        {months && (
          <View
            style={{
              height: 300,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Animatable.Text
              animation="fadeInDown"
              duration={1000}
              style={{fontSize: 20, fontWeight: 'bold', zIndex: 2}}>
              Commits per Month
            </Animatable.Text>
            <Animatable.View
              animation="flipInX"
              delay={1000}
              style={{zIndex: 1}}>
              <LineChart
                data={{
                  labels: Object.getOwnPropertyNames(months),
                  datasets: [
                    {
                      data: monthValues,
                    },
                  ],
                }}
                width={Dimensions.get('window').width} // from react-native
                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#464646',
                  backgroundGradientFrom: '#464646',
                  backgroundGradientTo: '#A5A5A5',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#3E3E3E',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </Animatable.View>
          </View>
        )}
        <View
          style={{
            height: 300,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Animatable.Text
            animation="fadeInDown"
            duration={1000}
            delay={3000}
            style={{fontSize: 20, fontWeight: 'bold', zIndex: 2}}>
            Commits per Day
          </Animatable.Text>
          <Animatable.View animation="flipInX" delay={4000} style={{zIndex: 1}}>
            <ContributionGraph
              values={dailyCommits}
              endDate={userCommits[0].creado}
              numDays={105}
              width={Dimensions.get('window').width}
              height={220}
              chartConfig={{
                backgroundColor: '#464646',
                backgroundGradientFrom: '#464646',
                backgroundGradientTo: '#A5A5A5',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#3E3E3E',
                },
              }}
            />
          </Animatable.View>
        </View>
      </ScrollView>
    </>
  );
};

export default Commits;
