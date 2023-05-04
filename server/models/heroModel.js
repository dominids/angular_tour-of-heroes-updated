const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please add the hero name"],
    },
    class: {
        type: String,
        required: [true, "Please add the hero class"],
    },
}, {
    timestamps: true,
}
);

module.exports=mongoose.model("User", userSchema);
