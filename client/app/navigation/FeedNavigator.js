import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import AddUtility from "../screens/AddUtility";
import FourTabs from "./FourTabs";
import UpdateUtility from "../screens/UpdateUtility";
import routes from "./routes";

const Stack = createStackNavigator();
const array = ["Dust2", "Inferno", "Mirage"]
const FeedNavigator = () => (
  <Stack.Navigator presentation="modal" screenOptions={{ headerShown: true }}>
    <Stack.Screen name="All maps" component={ListingsScreen} />
    {array.map((value, index) => <Stack.Screen key={index} name={value} component={FourTabs} />)}
    <Stack.Screen name={routes.ADD_UTILITY} component={AddUtility} />
    <Stack.Screen name={routes.UPDATE_UTILITY} component={UpdateUtility} />
  </Stack.Navigator>
);

export default FeedNavigator;
