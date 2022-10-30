import { View, TouchableOpacity } from "react-native";
import { Base } from "../../styles";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import delayedModel from "../../models/delayedModel";
import { Delayed } from "../../interfaces/delayed";
import { DelayedCurrentView } from "../../enum/delayedCurrentView";

export default function DelayedNavbar(
  {currentView, setCurrentView, setDelayed} :  
  {currentView: DelayedCurrentView, setCurrentView : (currentView: DelayedCurrentView) => void, setDelayed : (delayed: Delayed[]) => void}) {
  
  const updateView = async (newView: DelayedCurrentView) => {
    const delayed = await delayedModel.getDelayed();
    setDelayed(delayed);
    setCurrentView(newView);
  }
  
  return (
  <View
    style={Base.navbar}
  >
    <TouchableOpacity
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