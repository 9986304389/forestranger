import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    paddingBottom: 100,
    
  },
  menutitle: {
    fontSize: 18,
    marginLeft: 15,
    marginTop: 5
  },
  iconContainer: {
    borderColor: 'black', // Border color
    borderWidth: 0.5, // Border width
    justifyContent: 'center', // Center icon vertically
    alignItems: 'center',
    width: 40, // Set custom width
    height: 40, // Set custom height
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
    fontSize: 18,
    color: "#000",
    alignSelf: "center"
  }
});

export default styles;
