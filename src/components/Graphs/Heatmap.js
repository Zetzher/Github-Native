import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import {ContributionGraph} from 'react-native-chart-kit';

import * as Animatable from 'react-native-animatable';

const Heatmap = props => {
  console.log(props, 'heatmap');
  const {data} = props;
  return (
    <>
      {data ? (
        <View
          style={{
            height: 300,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          {data.map(data => {
             return <Text>Esto recibo: {data.date}</Text>
          })}
          <Animatable.Text
            animation="fadeInDown"
            duration={1000}
            delay={3000}
            style={{fontSize: 20, fontWeight: 'bold', zIndex: 2}}>
            Commits per Day
          </Animatable.Text>
         {/*<Animatable.View animation="flipInX" delay={4000} style={{zIndex: 1}}>
            <ContributionGraph
              values={data}
              endDate={new Date()}
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
          </Animatable.View>*/} 
        </View>
      ) : null}
    </>
  );
};

export default Heatmap;
