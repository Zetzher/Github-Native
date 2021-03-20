import React from 'react';
import {View, Dimensions} from 'react-native';

import {LineChart} from 'react-native-chart-kit';
import * as Animatable from 'react-native-animatable';

const Bezierline = props => {
  const {months, monthValues} = props;

  return (
    <>
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
          <Animatable.View animation="flipInX" delay={1000} style={{zIndex: 1}}>
            <LineChart
              data={{
                labels: Object.getOwnPropertyNames(months),
                datasets: [
                  {
                    data: monthValues,
                  },
                ],
              }}
              width={Dimensions.get('window').width - 10} // from react-native
              height={220}
              yAxisInterval={1} // optional, defaults to 1
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
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default Bezierline;
