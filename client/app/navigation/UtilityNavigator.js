import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UtilityDisplayScreen from "../screens/UtilityDisplayScreen";
import UtilitiesScreen from "../screens/UtilitiesScreen";
import UpdateUtility from "../screens/UpdateUtility";

const Stack = createStackNavigator();

function UtilityNavigator({ route }) {
    const { mapName, side, type } = route.params;
    return (
        <Stack.Navigator presentation="modal" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="UtilitiesScreen"
                component={UtilitiesScreen}
                initialParams={{
                    mapName, side, type,
                }} />
            <Stack.Screen name="UtilityDisplayScreen" component={UtilityDisplayScreen} />
        </Stack.Navigator>
    );
}

export default UtilityNavigator;