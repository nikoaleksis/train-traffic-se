import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Base, Typography } from './styles';


export default function App() {
  return (
    <View style={Base.base}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}