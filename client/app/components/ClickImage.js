import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import MyImageView from "./MyImageView";
import colors from "../config/colors";

function ClickImage({ URL }) {
    // console.log(URL)
    const JSONdata = URL.map((item, index) => ({ uri: item }))
    return (
        <View style={styles.view} >
            {URL.map((myUri, index) => <MyImageView URL={myUri} data={JSONdata} keyNumber={index} key={index} />)}
        </View>

    );
}
const styles = StyleSheet.create({
    view: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 15,
        backgroundColor: colors.light,
    },
    image: {
        width: 320,
        height: 240,
        borderRadius: 10,
        margin: 15,
    },
});

export default ClickImage;