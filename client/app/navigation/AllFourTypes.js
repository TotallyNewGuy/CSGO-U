import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import UtilityNavigator from "./UtilityNavigator.js";

const Tab = createMaterialTopTabNavigator();

function AllFourTypes({ route }) {
  const { mapName, side } = route.params;
  const array = ["Smoke", "Molotov", "Grenade", "Flash"]
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: { width: 105, height: 45, justifyContent: 'space-around' },
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      {
        array.map((value, index) => {
          return <Tab.Screen name={value} key={index} component={UtilityNavigator} initialParams={{ mapName, side, type: value }} />
        })
      }
    </ Tab.Navigator>
  );
}

export default AllFourTypes;

