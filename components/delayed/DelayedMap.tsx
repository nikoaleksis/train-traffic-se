import { ScrollView, StyleSheet, Dimensions } from "react-native";
import { Base } from "../../styles";
import MapView, { Polyline, Marker, Region } from 'react-native-maps';
import { Delayed } from "../../interfaces/delayed";
import { DelayedCurrentView } from "../../enum/delayedCurrentView";
import delayedModel from "../../models/delayedModel";
import { useEffect } from "react";
import dateFormatter from "../../models/dateFormatter";
import { LocationObject } from "expo-location";

export default function DelayedMap(
  {
    delayed,
    setDelayed,
    currentView,
    initialRegion,
    myLocation,
  } : 
  {
    delayed: Delayed[],
    setDelayed: (delayed: Delayed[]) => void,
    currentView: DelayedCurrentView
    initialRegion: Region,
    myLocation: LocationObject | undefined
  }
) {

  useEffect(() => {
    (async () => {
      setDelayed(await delayedModel.getDelayed());
      })();
  }, [currentView === DelayedCurrentView.MAP]);

  function hasClickedMapNavbarIcon() {
    return myLocation?.coords.latitude === initialRegion.latitude && 
      myLocation.coords.longitude === initialRegion.longitude;
  }

  const fromMarkers = delayed.map((delayed: Delayed, index: number) => {
    const station = delayed.fromLocation;
    
    return (
      <Marker
        accessibilityLabel="Avgång"
        key={index}
        coordinate={{
          latitude: station?.geometry.latitude ?? 0,
          longitude: station?.geometry.longitude ?? 0, 
        }}
        title={`Station: ${station?.advertisedLocationName} | Avgång`}
        description={`Est ank: ${dateFormatter.formatDateStrTimeOnly(delayed.estimatedTimeAtLocation)} | Stræcka: ${delayed.fromLocation?.advertisedLocationName} - ${delayed.toLocation?.advertisedLocationName}`}
        pinColor={'#0000ff'}
      />
    )
  });

  const toMarkers = delayed.map((delayed: Delayed, index: number) => {
    const station = delayed.toLocation;
    
    return (
      <Marker
        accessibilityLabel="Ankomst"
        key={index}
        coordinate={{
          latitude: station?.geometry.latitude ?? 0,
          longitude: station?.geometry.longitude ?? 0, 
        }}
        title={`Station: ${station?.advertisedLocationName} | Ankomst`}
        description={`Est ank: ${dateFormatter.formatDateStrTimeOnly(delayed.estimatedTimeAtLocation)} | Stræcka: ${delayed.fromLocation?.advertisedLocationName} - ${delayed.toLocation?.advertisedLocationName}`}
      />
    )
  });

  const myLocationMarker =  myLocation ? 
    (<Marker
      accessibilityLabel="Min Position"
      title="Min position"
      pinColor="#0f0"
      coordinate={{
        latitude: myLocation.coords.latitude,
        longitude: myLocation.coords.longitude,
      }}
    />) : 
    null;

  const routeLines = delayed.map((delayed: Delayed, index: number) => {
    const from = delayed.fromLocation?.geometry;
    const to = delayed.toLocation?.geometry;

    return from && to ? (
      <Polyline
        key={index}
        coordinates={[
          from,
          to ,      
        ]}
        strokeWidth={4}
        strokeColor='#238c23' 
        strokeColors={[
          '#0000ff',
          '#ff0000',
        ]}
      />
    ) : null 
  });
  
  return (
    <ScrollView style={Base.base}>
       <MapView
          testID="RouteMap"
          style={ styles.map }
          initialRegion={ hasClickedMapNavbarIcon() ?
            {
              latitude: myLocation?.coords.latitude ?? 59.1,
              longitude: myLocation?.coords.longitude ?? 11.1,
              latitudeDelta: 1,
              longitudeDelta: 1
            } 
            : initialRegion}
        >
          {fromMarkers}
          {toMarkers}
          {myLocationMarker}
          {routeLines}
        </MapView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});