import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Base, Typography } from './styles';
import Station from './interfaces/station';
import stationModel from './models/stationModel';

export default function App() {
  const [stations, setStations] = useState<Station[]>([]);

  useEffect(() => {
    (async () => setStations(await stationModel.getStations()))();
  }, []);

  return (
    <View style={Base.base}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}