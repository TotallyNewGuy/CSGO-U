import React from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native'

function LoadingScreen({ progress = 0, visible = false, onDone }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    <Progress.Bar color={colors.yellow} progress={progress} width={200} />) : (
                    <LottieView
                        autoPlay
                        loop={false}
                        onAnimationFinish={onDone}
                        source={require('../assets/animations/done.json')}
                        style={styles.animations}
                    />
                )
                }
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    animations: {
        width: 200,
    },
})

export default LoadingScreen;