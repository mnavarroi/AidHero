const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: "Name is required"
        },
        last_name: {
            type: String,
            required: "Last name is required"
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: "E-mail is required",
            unique: [true, "This e-mail has been registered before."]
        },
        locations: [String],
        about: String,
        facebookId: String,
        profile_pic: {
            type: String,
            default: 'http://icons.iconarchive.com/icons/roundicons/100-free-solid/128/customer-service-icon.png'
        },
        organizations:
            {
                type: Schema.Types.ObjectId,
                ref: 'Organization',
            },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "update_at"
        }
    }
);

module.exports = mongoose.model("User", userSchema);