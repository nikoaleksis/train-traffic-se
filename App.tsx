import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Base } from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LogBox} from "react-native";
import Navigation from './components/Navigation';
import Home from "./components/Home";
import Delayed from './components/delayed/DelayedBase';
import DelayedList from './components/delayed/DelayedList';

const Tab = createBottomTabNavigator();

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
]);

export default function App() {

  return (
    <SafeAreaView style={ Base.base }>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}