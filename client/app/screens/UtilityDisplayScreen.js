import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, RefreshControl } from "react-native";

import colors from "../config/colors";
import MyContext from "../components/MyContext";
import Text from "../components/Text";
import Screen from "../components/Screen";
import ClickImage from "../components/ClickImage";
import routes from "../navigation/routes";
import { storeData, getDataById } from "../utility/AsyncStore";
import MyApi from "../api/MyApi";

function UtilityDisplayScreen({ route, navigation }) {
    const { item } = route.params
    const { _id } = item;

    const [data, setData] = useState(item);
    const [isRefresh, setIsRefresh] = useState(false);

    const reload = () => {
        MyApi.getUtilities().then((response) => {
            if (response.ok) {
                // console.log(response.data)
                storeData("@utilitiesJSON", response.data).then(() => {
                    getDataById("@utilitiesJSON", setData, _id, setIsRefresh);
                })
            }
        })
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefresh}
                    onRefresh={() => {
                        setIsRefresh(true)
                        reload()
                    }}
                />
            }>
            <Screen>
                <Text style={styles.titleImage}>Overall Image↓</Text>
                <ClickImage URL={data.overAllImage} />
                <Text style={styles.imageText}>Detailed Image↓</Text>
                <ClickImage URL={data.detailImage} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>Title: <MyContext style={styles.text}>{data.title}</MyContext></Text>
                    <Text style={styles.title}>Description: <MyContext style={styles.text}>{data.description}{"\n"}</MyContext></Text>
                    <Text style={styles.title}>Map name: <MyContext style={styles.text}>{data.map}</MyContext></Text>
                    <Text style={styles.title}>Type: <MyContext style={styles.text}>{data.type}</MyContext></Text>
                    <Text style={styles.title}>Side: <MyContext style={styles.text}>{data.side}</MyContext></Text>
                    <Text style={styles.title}>Technique: <MyContext style={styles.text}>{data.technique}</MyContext></Text>
                </View>
            </Screen>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate(routes.UPDATE_UTILITY, {
                        data,
                        setData,
                        reload,
                    })
                }} >
                <Text style={styles.buttonText}>EDIT</Text>
            </TouchableOpacity>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    loadingText: {
        color: colors.medium,
        fontSize: 18,
    },
    detailsContainer: {
        padding: 20,
        backgroundColor: colors.light,
    },
    image: {
        width: "100%",
        height: 300,
    },
    titleImage: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 24,
        fontWeight: "500",
        fontWeight: "bold",
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        fontWeight: "bold",
        color: colors.primary,
    },
    text: {
        fontSize: 22,
        marginVertical: 10,
    },
    imageText: {
        color: colors.black,
        fontSize: 18,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
    userContainer: {
        marginVertical: 40,
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        marginHorizontal: 18,
        marginBottom: 40,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.light,
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default UtilityDisplayScreen;