import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

import colors from "../config/colors";
import ButtonInput from "../components/forms/ButtonInput";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import { Form, FormField, SubmitButton, } from "../components/forms";
import { MySchema } from "../config/ValidationSchema";
import MyApi from "../api/MyApi";
import LoadingScreen from "../screens/LoadingScreen";

function UpdateUtility({ route, navigation }) {
    const [updateVisible, setUpdateVisible] = useState(false)
    const [progress, setProgress] = useState(0)

    const { data, setData, reload } = route.params
    const id = data._id

    const handleSubmit = async (data) => {
        setProgress(0)
        setUpdateVisible(true)

        setData(data)
        const send = { id, data }
        const result = await MyApi.updateOne(send, (progress) => setProgress(progress))
        if (!result.ok) {
            setUpdateVisible(false)
            return alert('Could not update your data!')
        }
        reload()
        // alert('Update success!')
        // navigation.navigate(data.map, {
        //     mapName: data.map,
        // })
    }

    return (
        <ScrollView>
            <Screen style={styles.container}>
                {/* formik get old data */}
                <LoadingScreen
                    progress={progress}
                    visible={updateVisible}
                    onDone={() => {
                        setUpdateVisible(false)
                        navigation.goBack()
                    }}
                />
                <Form
                    initialValues={{
                        overAllImage: data.overAllImage,
                        detailImage: data.detailImage,

                        title: data.title,
                        description: data.description,

                        type: data.type,
                        side: data.side,
                        technique: data.technique,
                        map: data.map,
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={MySchema}
                >
                    {/* 投掷物的效果图1张 */}
                    <FormImagePicker listLength={1} name="overAllImage" />

                    {/* 投掷物的详解教学图多张 */}
                    <FormImagePicker listLength={2} name="detailImage" />

                    {/* 投掷物的简介，扔到哪的 */}
                    <FormField maxLength={255} name="title" placeholder="Title" />
                    {/* 投掷物的教学，具体从哪扔到哪 */}
                    <FormField maxLength={255} name="description" placeholder="Description" />

                    <ButtonInput isUpdate={true} name='side' inputType={'Side'} pickerItemNames={['CT', 'T']} />
                    <ButtonInput isUpdate={true} name='type' inputType={'Utility type'} pickerItemNames={['Smoke', 'Molotov', 'Grenade', 'Flash']} />
                    <ButtonInput isUpdate={true} name='technique' inputType={'Technique'} pickerItemNames={['Throw', 'Jump throw', 'Other']} />
                    <ButtonInput isUpdate={true} name='map' inputType={'Map name'} pickerItemNames={['Dust2', 'Mirage', 'Inferno']} />

                    <SubmitButton title="UPDATE" />
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

export default UpdateUtility;