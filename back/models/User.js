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
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: "El email es obligatorio",
            unique: [true, "Este correo ya está ha registrado"]
        },
        locations: [String],
        about: String,
        facebookId: String,
        profile_pic: {
            type: String,
            default: 'http://icons.iconarchive.com/icons/roundicons/100-free-solid/128/customer-service-icon.png'
        },
        organizations: [
            {
                type: Schema.Types.ObjectId,
                ref: 'ONG',
            }
        ],
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "update_at"
        }
    }
);

module.exports = mongoose.model("User", userSchema);