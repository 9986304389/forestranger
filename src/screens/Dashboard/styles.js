import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
  },
  dayContainer: {
    alignItems: 'center',
  },
  todayContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 20,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
  },
  todayText: {
    color: 'white',
  },
});
export default styles;