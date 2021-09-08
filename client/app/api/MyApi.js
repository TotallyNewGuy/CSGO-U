import client from "./client";

const MAPS = "/maps";
const UTILITIES = "/utilities";

const getMaps = () => client.get(MAPS);
const getUtilities = () => client.get(UTILITIES);

const addOne = (data, onUploadProgress) => {
    return client.post(
        UTILITIES,
        data,
        { onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total), }
    )
}

const deleteOne = (id) => client.delete(UTILITIES, { id })

const updateOne = (updateData, onUploadProgress) => {
    return client.patch(UTILITIES, updateData, {
        onUploadProgress: (progress) =>
            onUploadProgress(progress.loaded / progress.total),
    })
}

export default {
    getUtilities,
    getMaps,
    addOne,
    deleteOne,
    updateOne,
};