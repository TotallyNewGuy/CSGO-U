import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Card({ title, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
        <Image
          style={styles.image}
          source={{ uri: image }} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,

    borderWidth: 0.25,
    borderColor: colors.grey,
    borderRadius: 15,

    marginBottom: 25,
    marginHorizontal: 10,

    overflow: "hidden",
  },
  detailsContainer: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.dark,
  },
});

export default Card;
