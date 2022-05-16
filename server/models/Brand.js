import mongoose from "mongoose";

const Brand = new mongoose.Schema({
    name: {type: String}
}, {timestamps: true})

export default mongoose.model('Brand', Brand)