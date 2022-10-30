import {StyleSheet, Dimensions } from "react-native";

interface MapStyle {
  width: number,
  height: number
}

export const standard = StyleSheet.create<MapStyle>({
  width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
});
