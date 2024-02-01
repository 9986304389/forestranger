import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from "./styles";
const WeekDays = () => {
  const [weekDays, setWeekDays] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentDay = currentDate.getDay();
    const weekDaysArray = [];

    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      const date = new Date();
      date.setDate(currentDate.getDate() + i - currentDay);

      weekDaysArray.push({
        day,
        date,
        isToday: date.toDateString() === currentDate.toDateString(),
      });
    }

    setWeekDays(weekDaysArray);
  }, [currentDate]);

  const renderWeekDays = () => {
    return weekDays.map((dayInfo, index) => (
      <View
        key={index}
        style={[
          styles.dayContainer,
          dayInfo.isToday && styles.todayContainer,
        ]}
      >
        <Text style={[styles.dayText, dayInfo.isToday && styles.todayText]}>
          {dayInfo.day}
        </Text>
        <Text style={[styles.dateText, dayInfo.isToday && styles.todayText]}>
          {dayInfo.date.getDate()}
        </Text>
      </View>
    ));
  };

  return <View style={styles.container}>{renderWeekDays()}</View>;
};



export default WeekDays;
