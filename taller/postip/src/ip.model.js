"use strict";

const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const { Schema } = mongoose;

const IpSchema = new Schema(
    {
        ip: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
    },
    { timestamps: { createdAt: true, updatedAt: true } }
);

IpSchema.plugin(mongooseUniqueValidator);
const Ip = mongoose.model("ip", IpSchema);
module.exports.Ip = Ip; 