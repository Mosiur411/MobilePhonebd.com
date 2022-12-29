import { Schema, model, models } from 'mongoose';
const product = new Schema({
    productNames: {
        type: String,
        trim: true,
        required: true
    },
    brand: {
        type: String,
        trim: true,
        required: true
    },
    img: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: String,
        trim: true,
        required: true,
        default: 'Up Come',
    },
    release: {
        type: String,
        trim: true,
        required: true
    },
    color: [],
    connectivity: [
        {
            network: {
                type: String,
                trim: true,
                default: ''
            },
            sim: {
                type: String,
                trim: true,
                default: ''
            },
            wlan: {
                type: String,
                trim: true,
                default: ''
            },
            bluetooth: {
                type: String,
                trim: true,
                default: ''
            },
            gPS: {
                type: String,
                trim: true,
                default: ''
            },
            radio: {
                type: Boolean,
                trim: true,
                default: true
            },
            usb: {
                type: String,
                trim: true,
                default: ''
            },
            otg: {
                type: Boolean,
                trim: true,
                default: true
            },
            usbTypeC: {
                type: Boolean,
                trim: true,
                default: true
            },
            nfc: {
                type: String,
                trim: true,
                default: ''
            },
        }

    ],
    body: [
        {
            style: {
                type: String,
                trim: true,
                default: ''
            },
            material: {
                type: String,
                trim: true,
                default: ''
            },
            waterProve: {
                type: Boolean,
                trim: true,
                default: false
            },
            dimensions: {
                type: String,
                trim: true,
                default: ''
            },
            Weight: {
                type: Number,
                trim: true,
                default: 0
            }
        }
    ],
    display: [
        {
            size: {
                type: Number,
                trim: true,
                default: 0
            },
            resolution: {
                type: String,
                trim: true,
                default: ''
            },
            technology: {
                type: String,
                trim: true,
                default: ''
            },
            protection: {
                type: String,
                trim: true,
                default: ''
            },
            features: {
                type: String,
                trim: true,
                default: ''
            }
        }
    ],
    backCamera: [
        {
            backResolution: {
                type: Number,
                trim: true,
                default: 0
            },
            backFeatures: {
                type: String,
                trim: true,
                default: ''
            },
            backVideoRecording: {
                type: String,
                trim: true,
                default: ''
            }
        }
    ],
    frontCamera: [
        {
            frontResolution: {
                type: Number,
                trim: true,
                default: 0
            },
            frontFeatures: {
                type: String,
                trim: true,
                default: ''
            },
            frontVideoRecording: {
                type: String,
                trim: true,
                default: ''
            }
        }
    ],
    battery: [
        {
            typeCapacity: {
                type: String,
                trim: true,
                default: ''
            },
            fastCharging: {
                type: String,
                trim: true,
                default: ''
            }
        }
    ],
    performance: [
        {
            operatingSystem: {
                type: String,
                trim: true,
                default: ''
            },
            chipset: {
                type: String,
                trim: true,
                default: ''
            },
            ram: {
                type: String,
                trim: true,
                default: ''
            },
            processor: {
                type: String,
                trim: true,
                default: ''
            },
            gPU: {
                type: String,
                trim: true,
                default: ''
            },
        }
    ],
    storage: [
        {
            rom: {
                type: String,
                trim: true,
                default: ''
            },
            microSDSlot: {
                type: String,
                trim: true,
                default: ''
            },
        }
    ],
    sound: [
        {
            Jack: {
                type: Boolean,
                trim: true,
                default: false
            },
            features: {
                type: String,
                trim: true,
                default: ''
            }
        }
    ],
    security: [
        {
            fingerprint: {
                type: String,
                trim: true,
                default: ''
            },
            faceUnlock: {
                type: Boolean,
                trim: true,
                default: false
            },
            voiceUnlock: {
                type: Boolean,
                trim: true,
                default: false
            }
        }
    ],
    others: [
        {
            notificationLight: {
                type: Boolean,
                trim: true,
                default: false
            },
            sensors: {
                type: String,
                trim: true,
                default: ''
            },
            manufactured: {
                type: String,
                trim: true,
                default: ''
            },
            madeIn: {
                type: String,
                trim: true,
                default: ''
            }
        }
    ],

}, { timestamps: true });
const AdminModel = models.product || model('product', product);
export default AdminModel