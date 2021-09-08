import React, { useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import ImageView from "react-native-image-viewing";

function MyImageView({ URL, keyNumber, data }) {
    const [visible, setIsVisible] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)
    return (
        <>
            < ImageView
                images={data}
                imageIndex={imageIndex}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}

            />
            <TouchableOpacity onPress={() => {
                setImageIndex(keyNumber)
                setIsVisible(true)
            }}>
                <Image style={styles.image} source={{ uri: URL }} />
            </TouchableOpacity >
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 240,
        borderRadius: 10,
        margin: 15,
    },
})

export default MyImageView;