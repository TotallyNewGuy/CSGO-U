import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, } from 'react-native'
import defaultStyles from "../../config/styles";
import MyModal from '../MyModal';
import { useFormikContext } from "formik";
import ErrorMessage from "../forms/ErrorMessage";



function ButtonInput({ isUpdate, name, pickerItemNames, inputType }) {

    const pickerValue = (isUpdate) => {
        if (isUpdate) {
            return (values[name] ? <Text style={styles.text}>{values[name]}</Text> :
                pickerName === inputType ?
                    <Text style={styles.placeholder}>{inputType}</Text> :
                    <Text style={styles.text}>{pickerName}</Text>
            )
        } else {
            return (!values[name] ? <Text style={styles.placeholder}>{inputType}</Text> :
                pickerName === inputType ?
                    <Text style={styles.placeholder}>{inputType}</Text> :
                    <Text style={styles.text}>{pickerName}</Text>
            )
        }
    }

    const [pickerName, setPickerName] = useState(inputType);
    const [pickerVisible, setPickerVisible] = useState(false);
    const { errors, touched, values } = useFormikContext();

    return (
        <>
            <TouchableOpacity
                style={styles.container}
                onPress={() => setPickerVisible(true)}
            >
                {pickerValue(isUpdate)}
            </TouchableOpacity>
            <ErrorMessage error={errors[name]} visible={touched[name]} />
            <MyModal
                name={name}
                modalOpen={pickerVisible}
                setModalOpen={setPickerVisible}
                setPickerName={setPickerName}
                pickerItemNames={pickerItemNames}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 25,
        padding: 15,
        marginVertical: 10,
        width: '60%',
        fontSize: 10,
        flex: 1,
    },
    text: {
        color: defaultStyles.colors.mediem,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    placeholder: {
        color: defaultStyles.colors.grey,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})

export default ButtonInput;