const mongoose = require("mongoose");
const config = require("config");

const UsersSchema = mongoose.Schema({
    name: {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true
    },
    password: {
        hash: {
            type: String,
            required: true
        },
        salt: String
    },
    token_expiration: Number,
    is_active: {
        type: Boolean,
        required: true,
        default: true
    },
    is_Admint: Boolean
}, {
    collection: "User",
    timeStamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
    toObject: {
        virtuals: true
    },
    toJson: {
        virtuals: true
    }
});

module.exports = mongoose.model("User", UsersSchema);