import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, RefreshControl } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import UtilitiesCard from "../components/UtilitiesCard";
import { getData, storeData } from "../utility/AsyncStore";
import routes from "../navigation/routes";
import MyApi from "../api/MyApi";

function UtilitiesScreen({ route, navigation }) {
  const [listings, setListings] = useState()
  const [isRefresh, setIsRefresh] = useState(true);

  const { mapName, side, type } = route.params;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      reLoad()
    });
    return unsubscribe;
  }, [navigation]);

  const reLoad = () => {
    MyApi.getUtilities().then((response) => {
      if (response.ok) {
        // console.log(response.data)
        storeData("@utilitiesJSON", response.data).then(() => {
          getData("@utilitiesJSON", setListings, mapName, side, type, setIsRefresh);
        })
      }
    })
  }

  return (
    <Screen style={styles.screen} >
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing._id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={isRefresh}
            onRefresh={() => {
              setIsRefresh(true)
              reLoad()
            }}
          />
        }
        renderItem={({ item }) => (
          <UtilitiesCard
            item={item}
            // navigation={navigation}
            setup={reLoad}
            onPress={() => navigation.navigate(routes.UTILITY_DISPLAY, { item })}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 12,
    backgroundColor: colors.light,
  },
});

export default UtilitiesScreen;

