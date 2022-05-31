import { SafeAreaView } from 'react-native-safe-area-context';
import { Base } from './styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DelayedList from './components/DelayedList';
import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
]);

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <SafeAreaView style={ Base.base }>
      <DelayedList />
      {/*<NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="delays">

          </Tab.Screen>
        </Tab.Navigator>
  </NavigationContainer>*/}
    </SafeAreaView>
  );
}