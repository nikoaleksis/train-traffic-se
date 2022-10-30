import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Base } from "../../styles";
import DelayedList from "./DelayedList";
import DelayedMap from "./DelayedMap";
import DelayedNavbar from "./DelayedNavbar";
import { Delayed } from "../../interfaces/delayed";
import { DelayedCurrentView } from "../../enum/delayedCurrentView";
import { Region } from "react-native-maps";
import * as Location from "expo-location";
import { LocationObject } from "expo-location";

export default function DelayedBase() {
  const [currentView, setCurrentView] = useState<DelayedCurrentView>(DelayedCurrentView.LIST);
  const [initialRegion, setInitialRegion] = useState<Region>();
  const [delayed, setDelayed] = useState<Delayed[]>([]);
  const [myLocation, setMyLocation] = useState<LocationObject>();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        alert("No permission given for location.")
        return;
      }
    const myCurrentLocation = await Location.getCurrentPositionAsync({});
    setMyLocation(myCurrentLocation);
    })();
  }, []);

  return (
    <ScrollView style={Base.base}>
      <DelayedNavbar currentView={currentView} setCurrentView={setCurrentView} setDelayed={setDelayed} />
      {currentView == DelayedCurrentView.LIST ? 
      <DelayedList
        setDelayed={setDelayed}
        delayed={delayed}
        currentView={currentView}
        setCurrentView={setCurrentView} 
        setInitialRegion={setInitialRegion} 
      /> : 
      <DelayedMap
        delayed={delayed}
        setDelayed={setDelayed}
        currentView={currentView}
        initialRegion={initialRegion ??
          {
            latitude: myLocation?.coords.latitude ?? 59.9,
            longitude: myLocation?.coords.longitude ?? 11,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }
        }
        myLocation={myLocation} />}
    </ScrollView>
  )
}