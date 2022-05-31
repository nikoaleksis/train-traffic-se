import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DelayedList from "./DelayedList";

const Stack = createNativeStackNavigator();

export default function Delayed() {
  return (
    <Stack.Navigator initialRouteName="list">
      <Stack.Screen name="Lista på førseningar" component={DelayedList} />
    </Stack.Navigator>
  )
}