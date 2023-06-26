import  { Schema, model  } from "mongoose";
import mongoose from "mongoose";

const userSchema = Schema(
  {
    appCode: {
      type: String,
      default: () => new mongoose.Types.ObjectId().toString(),
      required: true,
    },

    projectId: {
      type: String,
      default: () => new mongoose.Types.ObjectId().toString(),
      required: true,
    },

    modelId: {
      type: String,
      default: () => new mongoose.Types.ObjectId().toString(),
      required: true,
    },

    version: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

const Portal = model("Portal", userSchema);

export default Portal;
