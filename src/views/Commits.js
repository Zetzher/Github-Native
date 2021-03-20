import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import dateFormat from "dateformat";
import Navbar from '../components/Navbar';
import Algorithm from '../components/Algorithm/GetDates';
import BezierLine from "../components/Graphs/Bezierline";
import HeatMap from '../components/Graphs/Heatmap';

const Commits = ({navigation, route}) => {
  const [monthValues, setMonthValues] = useState();
  const [months, setMonths] = useState();
  const [days, setDays] = useState();

  const {userCommits} = route.params;

  const getDailyCommits = data => {
    let dailyCommits = {};
    data.map(data => {
      const commitDay = dateFormat(new Date(data.creado), "yyyy-mm-dd")
      dailyCommits[commitDay] != null
        ? (dailyCommits[commitDay].count += data.commits.length)
        : (dailyCommits[commitDay] = {date: commitDay, count: data.commits.length});
     
    });
    setDays(Object.values(dailyCommits));
  };

  useEffect(() => {
    Algorithm(userCommits, setMonthValues, setMonths, setDays);
    getDailyCommits(userCommits);
  }, []);

  return (
    <>
      <Navbar />

      <ScrollView>
      <BezierLine months={months} monthValues={monthValues} />
        
        <HeatMap data={days && days} />
      </ScrollView>
    </>
  );
};

export default Commits;
