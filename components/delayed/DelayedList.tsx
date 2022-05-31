import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Card, CardTitle, CardContent } from 'react-native-material-cards';
import Delayed from "../../interfaces/delayed";
import { Base, Typography } from "../../styles";
import delayedModel from "../../models/delayedModel";
import dateFormatter from "../../models/dateFormatter";

export default function DelayedList() {
  const [delayed, setDelayed] = useState<Delayed[]>([]);

  useEffect(() => {
    (async () => {
      setDelayed(await delayedModel.getDelayed());
    })();
  }, [])

  const delayedList = delayed.map((delay: Delayed, index: number) => {
    return (
      delay.FromLocation !== undefined ?
      <TouchableOpacity
        key={index}
        accessibilityLabel="Tryck før att se transportstræckan"
        onPress={() => false}>
      <Card>
        <CardTitle title={`Tåg nr: ${delay.AdvertisedTrainIdent}`} />
        <CardContent text={`Från: ${delay.FromLocation[0].AdvertisedLocationName} | Till: ${delay.ToLocation[0].AdvertisedLocationName}`} />
        <CardContent text={`Ursprunglig ankomsttid: ${dateFormatter.formatDateStr(delay.AdvertisedTimeAtLocation)}`} />
        <CardContent text={`Estimerad ankomsttid: ${dateFormatter.formatDateStr(delay.EstimatedTimeAtLocation)}`} />
      </Card>
      </TouchableOpacity>
      : null
    )
  });

  return (
    <ScrollView style={ Base.base }>
      <Text style={ Typography.header1 }>Førseningar</Text>
      { delayedList }
    </ScrollView>
  )
}