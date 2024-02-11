import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome'; // or any other icon library you prefer
import { AntDesign } from '@expo/vector-icons';
import { Card } from '@rneui/themed';
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

  return (
    <View>
      <View style={styles.weekDaysContainer}>{renderWeekDays()}</View>
      <View style={styles.checkInOutContainer}>
      <View style={styles.checkInCard}>
          <Text>
          <AntDesign name="login" size={24} color="black" />
            {/* <Icon name="check" size={30} color="green" /> */}
          </Text>
          <Text style={styles.checkInText}>Check In</Text>
          <Text>{currentDate.toDateString()}</Text>
          <Text>{currentDate.toLocaleTimeString()}</Text>
        </View>

        <View style={styles.checkOutCard}>
          <Text> <AntDesign name="logout" size={24} color="black" /></Text>
          <Text style={styles.checkOutText}>Check Out</Text>
          <Text>{currentDate.toDateString()}</Text>
          <Text>{currentDate.toLocaleTimeString()}</Text>
        </View>
      </View>
    </View>
  );

};



export default WeekDays;
