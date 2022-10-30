import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DelayedBase from './delayed/DelayedBase';
import Home from './Home';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return(
  <NavigationContainer>
    <Tab.Navigator screenOptions={{
       headerShown: false,
    }}>
      <Tab.Screen name="Hem" component={Home} />
      <Tab.Screen name="Førseningar" component={DelayedBase} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}