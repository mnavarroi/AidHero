const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        post_name: {
            type: String,
            required: "El nombre de tu proyecto es obligatorio"
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: "Este proyecto debe de tener un responsable"
        },
        organization_name: {
            type: Schema.Types.ObjectId,
            ref: "Organization",
            required: "Este proyecto debe pertenecer a una ONG"
        },
        pics: String,
        description: {
            type: String,
            required: "Describe tu proyecto"
        },
        needs: {
            type: String,
            required: "Describe qué estás buscando"
        },
        location:{
            type: String,
            required: "La ubicación donde necesitas la ayuda es necesaria"
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