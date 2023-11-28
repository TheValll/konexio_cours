import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Loginscreen from "./screens/Loginscreen";
import Game from "./screens/Game";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({}) => ({
          tabBarStyle: { backgroundColor: "white", display: "none" },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Game" component={Game} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loginscreen" component={Loginscreen} />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ animation: "none" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
