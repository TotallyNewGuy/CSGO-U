import * as Yup from "yup";

export const MySchema = Yup.object().shape({
    overAllImage: Yup.array().min(1, "Please select at least one images."),
    detailImage: Yup.array().min(2, "Please select at least two images."),

    title: Yup.string().required('You need to describe this utility is for where').min(1).label("Title"),
    description: Yup.string().required('Please describe is how to throw detailedly').min(1).label("Description"),

    type: Yup.string().required('What kind of utility').label("Type of unitlity"),
    side: Yup.string().required('You need to choose CT or T').label("CT or T"),
    technique: Yup.string().required("How to throw it").label("How to throw"),
    map: Yup.string().required('You need to choose map').label("Map name"),
});