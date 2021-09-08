import React, { useState } from "react";
import { View, StyleSheet, Text, } from "react-native";
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

function MyPicker({
    selectedName,
    pickerItemNames,
}) {
    const renderPicker = (value, index) => <Picker.Item key={index} label={value} value={value} />
    const [selectedItem, setSelectedItem] = useState();

    const { setFieldValue, values } = useFormikContext();

    return (
        <>
            <Picker
                style={{ height: 50, width: '100%' }}
                selectedValue={values[selectedName]}
                onValueChange={(itemName, itemIndex) => {
                    // console.log(itemName)
                    setSelectedItem(itemName)
                    setFieldValue(selectedName, itemName)
                }}>
                {pickerItemNames.map((value, index) => renderPicker(value, index))}
            </Picker>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
})

export default MyPicker