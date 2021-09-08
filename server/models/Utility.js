import mongoose from 'mongoose';

const UtilitySchema = mongoose.Schema({
    overAllImage: [String],
    detailImage: [String],

    title: String,
    description: String,

    type: String,
    side: String,
    technique: String,
    map: String,
});

const Utility = mongoose.model('Utility', UtilitySchema);

export default Utility;