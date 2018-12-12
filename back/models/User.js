const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: "El nombre es obligatorio"
        },
        last_name: {
            type: String,
            required: "El apellido es obligatorio"
        },
        email: {
            type: String,
            required: "El email es obligatorio"
        },
        password: {
            type: String,
            required: true
        },
        profile_pic: String
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "update_at"
        }
    }
);

module.exports = mongoose.model("User", userSchema);