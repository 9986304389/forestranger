import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  MainContainer:{
    fontFamily:'Montserrat'
  },
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
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
    marginHorizontal: '5%', // Add margin between checkInCard and card
   
  },

  checkInCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: '6%',
    borderRadius: 10,
    alignItems: 'center',
    marginRight: '2%', // Add margin between checkInCard and card
  },

  card: {
    minHeight:150,
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: '6%',
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: '2%', // Add margin between checkInCard and card
  },
  checkInText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  checkOutText: {
    fontSize: 10,
    fontWeight: 'bold',

  },
  cardtitile: {
    fontSize: 20,
    textAlign: "center"
  },
  nameoftitle: {
    marginTop: 8,
    fontSize: 18,
    color: "#000080",
    fontWeight: "800"
  },
  iconContainer: {
    borderColor: 'black', // Border color
    borderWidth: 0.5, // Border width
    justifyContent: 'center', // Center icon vertically
    alignItems: 'center',
    width: 50, // Set custom width
    height: 50, // Set custom height
    marginTop: 10,
    borderRadius: 100, // Adjust the border radius as needed
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    padding: 9,
    backgroundColor: '#fff', // Background color to show the shadow
  },
  icon: {
    fontSize: 30,
    color: "#000",
    alignSelf: "center"
  }
});

export default styles;
