import React, { useLayoutEffect, useState, useEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
import axios from 'axios';
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native"
export default function Dashboard(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  // const onPressRecipe = (item) => {
  //   navigation.navigate("Recipe", { item });
  // };

  // const renderRecipes = ({ item }) => (
  //   <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
  //     <View style={styles.container}>
  //       <Image style={styles.photo} source={{ uri: item.photo_url }} />
  //       <Text style={styles.title}>{item.title}</Text>
  //       <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
  //     </View>
  //   </TouchableHighlight>
  // );

  // return (
  //   <View>
  //     <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipes} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />
  //   </View>
  // );
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
    // <View>
    //   <View style={styles.weekDaysContainer}>{renderWeekDays()}</View>

    // </View>
    <View>
      <View style={styles.checkInOutContainer}>

        <View style={styles.checkInCard}>
          <Text style={styles.cardtitile}>Today Assigned job</Text>
          <Text style={styles.taskcount}>3</Text>
          <Text>{currentDate.toDateString()}</Text>

        </View>
        <View style={styles.checkOutCard}>
          <Text style={styles.cardtitile}>Total no of jobs</Text>
          <Text style={styles.taskcount}>100</Text>
        </View>
      </View>
      <View style={styles.checkInOutContainer}>
        <View style={styles.checkInCard}>
          <Text style={styles.cardtitile}>Completed jobs</Text>
          <Text style={styles.taskcount}>80</Text>
        </View>

        <View style={styles.checkOutCard}>
          <Text style={styles.cardtitile}>Pending job</Text>
          <Text style={styles.taskcount}>20</Text>
        </View>
      </View>
      <ChartComponent />
    </View>
  );
}

const ChartComponent = () => {
  //const [chartData, setChartData] = useState({});
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Fetch data from backend
  //       const response = await axios.get('your_backend_api_endpoint');
  //       const data = response.data;

  //       // Process data
  //       const totalTasks = data.totalTasks;
  //       const pendingTasks = data.pendingTasks;
  //       const completedTasks = data.completedTasks;

  //       // Update chart data
  //       setChartData({
  //         labels: ['Total Tasks', 'Pending Tasks', 'Completed Tasks'],
  //         datasets: [{
  //           label: 'Tasks',
  //           data: [totalTasks, pendingTasks, completedTasks],
  //           backgroundColor: [
  //             'rgba(255, 99, 132, 0.2)',
  //             'rgba(54, 162, 235, 0.2)',
  //             'rgba(75, 192, 192, 0.2)'
  //           ],
  //           borderColor: [
  //             'rgba(255, 99, 132, 1)',
  //             'rgba(54, 162, 235, 1)',
  //             'rgba(75, 192, 192, 1)'
  //           ],
  //           borderWidth: 1
  //         }]
  //       });
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   // Fetch initial data
  //   fetchData();

  //   // Set up interval for live updates (every 5 seconds)
  //   const interval = setInterval(fetchData, 5000);

  //   // Clean up interval on component unmount
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <View style={{ marginTop: 40 }}>
      <Text style={{ textAlign: "center", marginTop: 10, fontSize: 20, color:"#000080" }}>Job Overview</Text>
      <PieChart
        data={data}
        width={Dimensions.get("window").width}
        height={220}
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
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"5"}
        center={[10, 10]}
        absolute
      />
    </View>
  );
};

