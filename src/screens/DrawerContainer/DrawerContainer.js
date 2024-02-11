import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>

        <TouchableOpacity onPress={() => {
          navigation.navigate("Dashboard");
          navigation.closeDrawer();
        }} activeOpacity={1}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}>
              <Icon name="bar-chart" style={styles.icon} />
            </View>
            <Text style={styles.menutitle}>Dashboard</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          // navigation.navigate("Attendance");
          // navigation.closeDrawer();
        }} activeOpacity={1}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}>
              <Icon name="check-circle" style={styles.icon} />
            </View>
            <Text style={styles.menutitle}>Attendance</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          // navigation.navigate("Attendance");
          // navigation.closeDrawer();
        }} activeOpacity={1}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}>
              <Icon name="calendar" style={styles.icon} />
            </View>
            <Text style={styles.menutitle}>Daily Activities</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          // navigation.navigate("Attendance");
          // navigation.closeDrawer();
        }} activeOpacity={1}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}>
              <Icon name="tree" style={styles.icon} />
            </View>
            <Text style={styles.menutitle}>Forest Visit</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          // navigation.navigate("Attendance");
          // navigation.closeDrawer();
        }} activeOpacity={1}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}>
              <Icon name="handshake-o" style={styles.icon} />
            </View>
            <Text style={styles.menutitle}>Daily Patrol</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          // navigation.navigate("Attendance");
          // navigation.closeDrawer();
        }} activeOpacity={1}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}>
              <Icon name="paw" style={styles.icon} />
            </View>
            <Text style={styles.menutitle}>Animal Death</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          // navigation.navigate("Attendance");
          // navigation.closeDrawer();
        }} activeOpacity={1}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}>
              <Icon name="user" style={styles.icon} />
            </View>
            <Text style={styles.menutitle}>Leave Application</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate("MyAccount");
          navigation.closeDrawer();
        }} activeOpacity={1}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}>
              <Icon name="user" style={styles.icon} />
            </View>
            <Text style={styles.menutitle}>My Account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          // navigation.navigate("Attendance");
          // navigation.closeDrawer();
        }} activeOpacity={1}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconContainer}>
              <Icon name="sign-out" style={styles.icon} />
            </View>
            <Text style={styles.menutitle}>Logout</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
