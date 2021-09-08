import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import { storeData } from "../utility/AsyncStore";
import routes from "../navigation/routes";
import MyApi from "../api/MyApi";
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import AppTextInput from "../components/TextInput";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator"

function ListingsScreen({ navigation }) {

  const [maps, setMaps] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [utilities, setUtilities] = useState();

  useEffect(() => {
    loadMaps()
  }, []);

  const loadMaps = async () => {
    setLoading(true)
    const response = await MyApi.getMaps()
    setLoading(false)
    if (!response.ok) {
      return setError(true)
    }
    setError(false)
    setMaps(response.data)
  }

  useEffect(() => {
    loadUtilites()
  }, []);

  const loadUtilites = () => {
    setLoading(true)
    MyApi.getUtilities().then((response) => {
      setLoading(false)
      if (!response.ok) {
        return setError(true)
        // console.log(response.data)
      }
      setError(false)
      storeData("@utilitiesJSON", response.data)
      setUtilities(response.data)
    })
  }

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppTextInput>Couldn't retrieve the data.</AppTextInput>
          <Button title='Retry' onPress={loadMaps} />
        </>
      )}
      <ActivityIndicator visible={isLoading} />
      <FlatList
        data={maps}
        keyExtractor={(listing) => listing._id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.URL}
            onPress={() => {
              switch (item.title) {
                case "Dust2": return navigation.navigate(routes.DUST2, {
                  mapName: "Dust2",
                });
                case "Inferno": return navigation.navigate(routes.INFERNO, {
                  mapName: "Inferno",
                });
                case "Mirage": return navigation.navigate(routes.MIRAGE, {
                  mapName: "Mirage",
                });
                default: return navigation.navigate(routes.DUST2, {
                  mapName: "Dust2",
                });
              }
            }
            }
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
  container: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    color: colors.medium,
    fontSize: 18,
  }
});

export default ListingsScreen;
