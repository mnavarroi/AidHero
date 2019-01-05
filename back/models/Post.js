const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        post_name: {
            type: String,
            required: "The name of your project is required"
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: "This project should have a lead"
        },
        organization_name: {
            type: Schema.Types.ObjectId,
            ref: "Organization",
            required: "This project should be part of an NGO"
        },
        pics: String,
        description: {
            type: String,
            required: "Please write a description for your project"
        },
        needs: {
            type: String,
            required: "Please describe what are your needs"
        },
        location:{
            type: String,
            required: "The location is required"
        }
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "update_at"
        }
    }
);

module.exports = mongoose.model("Post", postSchema);