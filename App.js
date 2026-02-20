import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogScreen from './screens/logscreen';
import ProfileScreen from './screens/profile_screen';
import Logoutscreen from './screens/logout';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right", // 🔥 iOS classic slide
          animationDuration: 300,        // Smooth timing
        }}
      >
        <Stack.Screen name="Logscreen" component={LogScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Logout" component={Logoutscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
