import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "./routes";
import AddUtility from "../screens/AddUtility";
import NewListingButton from "../components/NewListingButton";
import AllFourTypes from "./AllFourTypes";

const Tab = createBottomTabNavigator();

function FourTabs({ route }) {

    const { mapName } = route.params;

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="CT"
                component={AllFourTypes}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="police-badge" color={color} size={27} />
                    ),
                }}
                initialParams={{
                    mapName,
                    side: "CT",
                }}
            />
            <Tab.Screen
                name="Add"
                component={AddUtility}
                options={({ navigation }) => ({
                    tabBarButton: () => (
                        <NewListingButton
                            onPress={() => {
                                navigation.navigate(routes.ADD_UTILITY)
                            }}
                        />
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="plus-circle"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="T"
                component={AllFourTypes}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="robber" color={color} size={30} />
                    ),
                }}
                initialParams={{
                    mapName,
                    side: "T",
                }}
            />
        </Tab.Navigator >
    );
}

export default FourTabs;