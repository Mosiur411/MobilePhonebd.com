import { Schema, model, models } from 'mongoose';
const userInfo = new Schema({
    names: {
        type: String,
        trim: true,
        default: ""
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    uid: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    role: {
        type: Boolean,
        trim: true,
        default: false,
    },
    // ip: {
    //     type: String,
    //     trim: true,
    //     required: true,
    // },
    img: {
        type: String,
        trim: true,
        default: ""
    },
    number: {
        type: String,
        trim: true,
        default: ""
    },
    nidFront: {
        type: String,
        trim: true,
        default: ""
    },
    nidBack: {
        type: String,
        trim: true,
        default: ""
    },
    country: {
        type: String,
        trim: true,
        default: ""
    },
    district: {
        type: String,
        trim: true,
        default: ""
    },
    upazila: {
        type: String,
        trim: true,
        default: ""
    },
    upazilaCode: {
        type: Number,
        trim: true,
        default: 0
    },
    union: {
        type: String,
        trim: true,
        default: ""
    },
    village: {
        type: String,
        trim: true,
        default: ""
    }
}, { timestamps: true });
const UserModal = models.user || model('user', userInfo);
export default UserModal;