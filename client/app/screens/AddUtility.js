import React, { useState } from "react";
import { StyleSheet, ScrollView, Alert } from "react-native";

import colors from "../config/colors";
import ButtonInput from "../components/forms/ButtonInput";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import { Form, FormField, SubmitButton, } from "../components/forms";
import { MySchema } from "../config/ValidationSchema";
import MyApi from "../api/MyApi";
import LoadingScreen from "./LoadingScreen";

function AddUtility() {
    const [uploadVisible, setUploadVisible] = useState(false)
    const [progress, setProgress] = useState(0)
    const handleSubmit = async (data, { resetForm }) => {
        setProgress(0)
        setUploadVisible(true)

        const result = await MyApi.addOne(data, (progress) => setProgress(progress));
        resetForm()
        if (!result.ok) {
            setUploadVisible(false)
            return alert('Could not save your data!')
        }
    }

    return (
        <ScrollView>
            <Screen style={styles.container}>
                {/* use formik to initialize form */}
                <LoadingScreen
                    progress={progress}
                    visible={uploadVisible}
                    onDone={() => {
                        setUploadVisible(false)
                    }}
                />
                <Form
                    initialValues={{
                        overAllImage: [],
                        detailImage: [],

                        title: "",
                        description: "",

                        type: "",
                        side: "",
                        technique: "",
                        map: "",
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={MySchema}
                >
                    <FormImagePicker listLength={1} name="overAllImage" />
                    <FormImagePicker listLength={4} name="detailImage" />

                    <FormField maxLength={255} name="title" placeholder="Title" />
                    <FormField maxLength={255} name="description" placeholder="Description" />

                    <ButtonInput isUpdate={false} name='side' inputType={'Side'} pickerItemNames={['CT', 'T']} />
                    <ButtonInput isUpdate={false} name='type' inputType={'Utility type'} pickerItemNames={['Smoke', 'Molotov', 'Grenade', 'Flash']} />
                    <ButtonInput isUpdate={false} name='technique' inputType={'Technique'} pickerItemNames={['Throw', 'Jump throw', 'Other']} />
                    <ButtonInput isUpdate={false} name='map' inputType={'Map name'} pickerItemNames={['Inferno', 'Dust2', 'Mirage']} />

                    <SubmitButton title="Post" />
                </Form>
            </Screen>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        padding: 10,
    },
})

export default AddUtility;