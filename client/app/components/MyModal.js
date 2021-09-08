import React from 'react'
import { View, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native'
import { useFormikContext } from "formik";

import MyPicker from './forms/MyPicker';

function MyModal({
    name,
    modalOpen,
    setModalOpen,

    setPickerName,

    pickerItemNames,
}) {

    const { values } = useFormikContext();

    return (
        <Modal
            name={name}
            animationType="fade"
            transparent={true}
            visible={modalOpen}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setPickerVisible(!pickerVisible);
            }}
        >
            <View style={styles.container} >
                <View style={styles.pickerBackground} >
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => setModalOpen(false)} >
                            <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                // console.log(values[name])
                                // console.log(typeof (values[name]))
                                if (!values[name]) values[name] = pickerItemNames[0]
                                setPickerName(values[name])
                                setModalOpen(false)
                            }} >
                            <Text style={styles.submitButton}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <MyPicker
                        selectedName={name}
                        pickerItemNames={pickerItemNames}
                    />
                </View>
            </View>
        </Modal >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.7)',
    },
    pickerBackground: {
        backgroundColor: 'white',
        width: '100%',
        height: "30%",
        position: 'absolute',
        bottom: 0,
    },
    closeButton: {
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 10,
        flex: 1,
    },
    submitButton: {
        fontSize: 18,
        paddingTop: 10,
        paddingRight: 10,
    },
})

export default MyModal;