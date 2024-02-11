import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dayContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  todayContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 8,
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
  checkInOutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
    marginHorizontal: '5%', // Add margin between checkInCard and checkOutCard
  },

  checkInCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: '6%',
    borderRadius: 10,
    alignItems: 'center',
    marginRight: '2%', // Add margin between checkInCard and checkOutCard
  },

  checkOutCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: '6%',
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: '2%', // Add margin between checkInCard and checkOutCard
  },
  checkInText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  checkOutText: {
    fontSize: 10,
    fontWeight: 'bold',

  },
});


export default styles;