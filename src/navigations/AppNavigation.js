import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import SignIn from '../screens/SignIn/SignIn'
import SignUP from '../screens/SignUp/SignUp';
import RestPassword from '../screens/ResetPassword/ResetPassword';
import Dashboard from '../screens/Dashboard/Dashbaord';
import Profile from '../screens/Profile/Profile';
const Stack = createStackNavigator();

function MainNavigator() {
  return (

    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          display: 'flex',
          marginTop: 10,
          flex: 1,
        }
      }}
      initialRouteName="SignIn"
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUP} />
      <Stack.Screen name="ResetPassword" component={RestPassword} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name='Categories' component={CategoriesScreen} />
      <Stack.Screen name='Recipe' component={RecipeScreen} />
      <Stack.Screen name='RecipesList' component={RecipesListScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
    </Stack.Navigator>
  )
}



const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition='right'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={({ navigation }) => <DrawerContainer navigation={navigation} />}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
}


export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  )
}


console.disableYellowBox = true;