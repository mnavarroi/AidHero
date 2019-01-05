const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema(
    {
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User",
            required: true
        },
        comments:[{
            type:Schema.Types.ObjectId,
            ref:"Comment",
        }],
        organization_name: {
            type: String,
            required: "The name of your organization is required"
        },
        description: {
            type: String,
            required: "Please describe what does your NGO do."
        },
        profile_pic: {
            type: String,
            default: 'http://icons.iconarchive.com/icons/roundicons/100-free-solid/128/whale-icon.png'
        },
        website: String,
        facebookAccount: String,
        instagramAccount: String,
        phoneNumber: String,
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "update_at"
        }
    }
);

module.exports = mongoose.model("Organization", organizationSchema);