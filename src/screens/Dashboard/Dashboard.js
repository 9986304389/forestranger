import React, { useLayoutEffect, useState, useEffect } from "react";
import { FlatList, Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
import axios from 'axios';
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';


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
    <View style={styles.MainContainer}>
      <View style={styles.checkInOutContainer}>
        {/* <View style={styles.checkInCard}>
          <Text style={styles.cardtitile}>Today Assigned job</Text>
          <Text style={styles.taskcount}>3</Text>
          <Text>{currentDate.toDateString()}</Text>
        </View> */}
        <TouchableOpacity style={styles.card} onPress={() => {
          navigation.navigate("MyAccount");
        }}>
          <View >
            <View style={styles.iconContainer}>
              <Icon name="user" style={styles.icon} />
            </View>
            <Text style={styles.nameoftitle}>Profile</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Icon name="calendar" style={styles.icon} />
          </View>
          <Text style={styles.nameoftitle}>Attendance</Text>
        </View>

      </View>
      <View style={styles.checkInOutContainer}>
        {/* <View style={styles.checkInCard}>
          <Text style={styles.cardtitile}>Completed jobs</Text>
          <Text style={styles.taskcount}>80</Text>
        </View> */}
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Icon name="tachometer" style={styles.icon} />
          </View>
          <Text style={styles.nameoftitle}>DailyPatrol</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Icon name="paw" style={styles.icon} />
          </View>
          <Text style={styles.nameoftitle}>AnimalDeath</Text>
        </View>

      </View>
      <View style={styles.checkInOutContainer}>
        {/* <View style={styles.checkInCard}>
          <Text style={styles.cardtitile}>Completed jobs</Text>
          <Text style={styles.taskcount}>80</Text>
        </View> */}
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Icon name="tree" style={styles.icon} />
          </View>
          <Text style={styles.nameoftitle}>ForestVisit</Text>
        </View>

      </View>
      {/* <ChartComponent /> */}
    </View>
  );
}

const ChartComponent = () => {
  // Get current date
  const currentDate = new Date();

  // Function to format date as "dd-Jan-2024"
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0'); // Get day and pad with zero if necessary
    const month = date.toLocaleString('en-US', { month: 'short' }); // Get abbreviated month name
    const year = date.getFullYear(); // Get full year
    return `${day}-${month}-${year}`;
  };

  //const [chartData, setChartData] = useState({});
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Days of the week
    datasets: [
      {
        data: [8, 7, 6, 8, 9, 5, 0] // Sample employee login hours data for each day
      }
    ]
  };

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

  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientTo: "#FFFFFF",
    color: (opacity = 1) => `rgba(0, 0, 225, ${opacity})`, // Blue color for bars
    strokeWidth: 0, // Remove bar stroke
    barPercentage: 1, // Adjust bar width

  };
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ textAlign: "center", margin: 8, fontSize: 20, color: "#000080" }}>{formatDate(currentDate)}</Text>
      <BarChart
        data={data}
        width={Dimensions.get("window").width}
        height={250}
        chartConfig={chartConfig}
        showValuesOnTopOfBars={false} // Remove dots and show values on top of bars
        hideYAxisLabel={false} // Hide y-axis labels
        fromZero={true} // Start y-axis from zero
        style={{
          paddingRight: 40,
          borderRadius: 20
        }}
        yAxisLabel=""
        paddingRight={"20"}
        withInnerLines={false} // Remove dot line
      />
    </View>
  );
};

