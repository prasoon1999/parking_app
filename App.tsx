import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ParkingScreen from './src/screens/ParkingScreen';
import VehicleScreen from './src/screens/VehicleScreen';
import Providers from './src/utils/Providers';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Providers>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
          }}>
          <Stack.Screen
            name="HOME_SCREEN"
            component={HomeScreen}
            options={{title: 'Parking manager'}}
          />
          <Stack.Screen
            name="PARKING_SCREEN"
            component={ParkingScreen}
            options={{title: 'Manage'}}
          />
          <Stack.Screen
            name="VEHICLE_SCREEN"
            component={VehicleScreen}
            options={{title: ''}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Providers>
  );
}
