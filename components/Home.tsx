import { View, Text, Image } from "react-native";
import { Base, Typography } from "../styles";
//@ts-ignore
import appLogo from '../assets/train.png';
import Navigation from "./Navigation";

export default function Home() {
  return (
    <View style={ Base.base }>
      <Text style={Typography.header1}>Tågførseningsappen</Text>
      <Image source={appLogo} />
    </View>
  )
}