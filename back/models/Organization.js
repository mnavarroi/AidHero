const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema(
    {
        name: {
            type: String,
            required: "El nombre es obligatorio"
        },
        last_name: {
            type: String,
            required: "El apellido es obligatorio"
        },
        organization_name: {
            type: String,
            required: "El nombre de la organización es obligatorio"
        },
        email: {
            type: String,
            required: "El email de contacto es obligatorio"
        },
        password: {
            type: String,
            required: true
        },
        profile_pic: String,
        description: {
            type: String,
            required: "Describe a qué se dedica tu fundación"
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "update_at"
        }
    }
);

module.exports = mongoose.model("Organization", organizationSchema);