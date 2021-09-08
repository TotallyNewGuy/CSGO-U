import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo';

import Text from './Text';
import colors from '../config/colors';
import Constants from 'expo-constants';

function OffineNotice() {

    const netInfo = useNetInfo()
    if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No internet connection</Text>
            </View>
        )
    }

    return null
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        height: 50,
        width: '100%',
        top: Constants.statusBarHeight,
        position: 'absolute',
        zIndex: 1,
    },
    text: {
        color: colors.white,
        fontWeight: '500',
    }
})

export default OffineNotice;