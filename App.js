import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import Basket from './src/screens/Basket';

import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsPage from './src/screens/RestaurantDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsPage /> */}
      {/* <DishDetailsScreen /> */}
      <Basket />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    // paddingVertical: 30,
  },
});
