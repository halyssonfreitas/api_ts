"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const NewsSchema_1 = require("../models/NewsSchema");
// function model create a colection news based on NewsSchema
exports.default = mongoose.model("news", NewsSchema_1.default);
