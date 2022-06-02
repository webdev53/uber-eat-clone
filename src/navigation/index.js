import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
// import DishDetailsScreen from '../screens/DishDetailsScreen';
// import Basket from '../screens/Basket';
// import OrderScreen from '../screens/OrdersScreen';
// import OrderDetails from '../screens/OrderDetails';

// import RestaurantDetailsPage from '../screens/RestaurantDetailsScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
