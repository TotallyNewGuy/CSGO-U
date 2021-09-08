import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import MyApi from "../api/MyApi";

import Text from "./Text";
import colors from "../config/colors";
import utilitiesIcon from "../config/customIcon";
import LoadingScreen from "../screens/LoadingScreen";

function UtilitiesCard({ item, setup, onPress }) {
    // console.log(item)

    const { title, overAllImage, description, type, _id } = item
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={() => {
                Alert.alert("Delete", "Are you sure you want to delete this utility?", [
                    {
                        text: "Yes", onPress: async () => {
                            const result = await MyApi.deleteOne(_id)
                            if (!result.ok) {
                                return alert('Deletion failed!')
                            }
                            Alert.alert("Deletion succeed!")
                            setup()
                        }
                    },
                    { text: "No" },
                ]);
            }}>
            <View style={styles.card}>
                {overAllImage.map((myUri, index) => <Image style={styles.image} source={{ uri: myUri }} key={index} />)}

                <View style={styles.detailsContainer}>

                    <View style={styles.alignLeftAndRight}>
                        <Text style={styles.title} numberOfLines={1}>
                            {title}
                        </Text>
                        <Image
                            style={styles.imageIcon}
                            source={utilitiesIcon[type]}
                        />
                    </View>

                    <Text style={styles.description} numberOfLines={2}>
                        {description}
                    </Text>
                </View>
            </View >
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
        alignItems: 'stretch'
    },
    alignLeftAndRight: {
        flex: 1,
        flexDirection: "row",
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.dark,
        flex: 1,
    },
    description: {
        color: colors.grey,
        fontWeight: "bold",
        textAlign: "justify",
        fontSize: 14,
        marginTop: 5,
    },
    imageIcon: {
        width: 30,
        height: 30,
        borderRadius: 15,
    }
});

export default UtilitiesCard;