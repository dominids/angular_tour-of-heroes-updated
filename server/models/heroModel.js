const mongoose = require("mongoose");

const heroSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add the hero name"],
    },
    clas: {
        type: String,
        required: [true, "Please add the hero class"],
    },
}, {
    timestamps: true,
    
}
);

module.exports=mongoose.model("Hero", heroSchema);
