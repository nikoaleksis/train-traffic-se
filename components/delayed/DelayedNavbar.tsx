import { View, TouchableOpacity } from "react-native";
import { Base } from "../../styles";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import delayedModel from "../../models/delayedModel";
import { Delayed } from "../../interfaces/delayed";
import { DelayedCurrentView } from "../../enum/delayedCurrentView";

export default function DelayedNavbar(
  {currentView, setCurrentView} :  
  {currentView: DelayedCurrentView, setCurrentView : (currentView: DelayedCurrentView) => void }) {
  
  const updateView = async (newView: DelayedCurrentView) => {
    setCurrentView(newView);
  }
  
  return (
  <View
    style={Base.navbar}
  >
    <TouchableOpacity
      accessibilityLabel="Klicka før att byta meny"
      style={[
        Base.navbarItem, 
        {borderRightWidth: 2, borderColor: "#222"}, 
        currentView === DelayedCurrentView.LIST ? {backgroundColor: "#999"} : {}
      ]}
      onPress={() => updateView(DelayedCurrentView.LIST)}
    >
      <FontAwesome name="list-alt" size={60} color="black" />
    </TouchableOpacity>
    <TouchableOpacity
      accessibilityLabel="Klicka før att byta meny"
      style={[
        Base.navbarItem, 
        {borderRightWidth: 2, borderColor: "#222"}, 
        currentView === DelayedCurrentView.MAP ? {backgroundColor: "#aaa"} : {}
      ]}
      onPress={() => updateView(DelayedCurrentView.MAP)}
    >
      <FontAwesome5 name="map-marker-alt" size={57} color="black" />
    </TouchableOpacity>
  </View>)
}