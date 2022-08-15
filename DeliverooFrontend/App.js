import React from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import {store} from './store';

import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';
import OrderPrepareScreen from './screens/OrderPrepareScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{presentation: 'modal', headerShown: false}}
            />
            <Stack.Screen
              name="OrderPrepare"
              component={OrderPrepareScreen}
              options={{presentation: 'fullScreenModal', headerShown: false}}
            />
            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{presentation: 'fullScreenModal', headerShown: false}}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
