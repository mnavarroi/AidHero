const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        author:{
            type:Schema.Types.ObjectId,
            ref:"User",
            required: true
        },
        comment: {
            type: String,
            required: true
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "update_at"
        }
    }
);

module.exports = mongoose.model("Comment", commentSchema);