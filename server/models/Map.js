import mongoose from 'mongoose';

const MapSchema = mongoose.Schema({
    title: String,
    URL: String,
});

const Map = mongoose.model('Map', MapSchema);

export default Map;