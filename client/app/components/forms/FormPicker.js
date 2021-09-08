import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) {
  // values是所有的formik要提交的对象，input框
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <Picker
        // 在所有formik要提交的对象中选中之前传进name的那个
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}

        items={items}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
