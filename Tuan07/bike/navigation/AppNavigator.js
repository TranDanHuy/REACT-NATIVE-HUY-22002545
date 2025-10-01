import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import BikeListScreen from "../screens/BikeListScreen";
import BikeDetailScreen from "../screens/BikeDetailScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="BikeList" component={BikeListScreen} />
      <Stack.Screen name="BikeDetail" component={BikeDetailScreen} />
    </Stack.Navigator>
  );
}
