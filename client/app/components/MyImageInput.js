import React, { useEffect } from "react";
import { useFormikContext } from "formik";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";
import logger from "../utility/logger";

function MyImageInput({ itemName }) {

  const { errors, setFieldValue, touched, values } = useFormikContext();
  // 所有照片的Uri
  const picture = values[itemName];
  // 添加照片
  const handleAdd = (uri) => {
    setFieldValue(itemName, uri);
  };
  // 删除照片
  const handleRemove = () => {
    setFieldValue(itemName, null);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const handlePress = () => {
    // console.log(picture)
    if (!picture) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => setFieldValue(itemName, null) },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      // console.log(result)
      if (!result.cancelled) handleAdd(result.uri);
    } catch (error) {
      logger.log('catch a error')
      logger.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!picture && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {picture && <Image source={{ uri: picture }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    marginVertical: 10,
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default MyImageInput;
