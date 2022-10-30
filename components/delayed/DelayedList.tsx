import { ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { Card, CardTitle, CardContent } from 'react-native-material-cards';
import { Base } from "../../styles";
import dateFormatter from "../../models/dateFormatter";
import delayedModel from "../../models/delayedModel";
import { Delayed } from "../../interfaces/delayed";
import { DelayedCurrentView } from "../../enum/delayedCurrentView";
import { Region } from "react-native-maps";
import { useEffect } from "react";

export default function DelayedList(
  {
    delayed,
    setDelayed,
    currentView,
    setCurrentView,
    setInitialRegion
  } : 
  {
    delayed: Delayed[],
    setDelayed: (delayed: Delayed[]) => void,
    currentView: DelayedCurrentView,
    setCurrentView: (currentView: DelayedCurrentView) => void, 
    setInitialRegion: (region: Region) => void
  }
) {

  useEffect(() => {
    (async () => {
      setDelayed(await delayedModel.getDelayed());
    })();
  }, [currentView === DelayedCurrentView.LIST]);

  const delayedList = delayed.map((delay: Delayed, index: number) => {
    return (
      delay.fromLocation ?
      <TouchableOpacity
        key={index}
        accessibilityLabel="Tryck før att se transportstræckan"
        onPress={() => {
          setInitialRegion({
            latitude: delay.fromLocation.geometry.latitude,
            longitude: delay.fromLocation.geometry.longitude,
            latitudeDelta: 1,
            longitudeDelta: 1.
          });
          setCurrentView(DelayedCurrentView.MAP);
        }}>
        <Card>
          <CardTitle title={`Tåg nr: ${delay.advertisedTrainIdent}`} />
          <CardContent text={`Från: ${delay.fromLocation?.advertisedLocationName} | Till: ${delay.toLocation?.advertisedLocationName}`} />
          <CardContent text={`Ursprunglig ankomsttid: ${dateFormatter.formatDateStr(delay.advertisedTimeAtLocation)}`} />
          <CardContent text={`Estimerad ankomsttid: ${dateFormatter.formatDateStr(delay.estimatedTimeAtLocation)}`} />
        </Card>
      </TouchableOpacity>
      : null
    )
  });

  return (
    <ScrollView style={ Base.base }>
      {
      delayedList.length === 0 ? 
      <ActivityIndicator size="large" color="#eee" /> : 
      delayedList
      }
    </ScrollView>
  )
}