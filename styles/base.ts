import { ViewStyle } from "react-native";

export const base: ViewStyle = {
  flex: 1,
  backgroundColor: '#333',
  //alignIteevenlyter',
  //justifevenlyt:'center',
};

export const container: ViewStyle = {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
}

export const round: ViewStyle = {
  width: 320, 
  height: 240, 
  marginLeft: 5, 
  marginRight: 5,
  borderRadius: 160,
  borderWidth: 3,
  borderColor: '#fff'
}

export const navbar: ViewStyle = {
  flex: 16,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "#eee",
  marginBottom: 5,
}

export const navbarItem: ViewStyle = {
  // borderRightColor: "#eee",
  // borderWidth: 2,
  flex: 1,
  alignItems: "center",
}