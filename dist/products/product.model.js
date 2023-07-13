"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: String,
    price: { type: Number, require: true },
});
//# sourceMappingURL=product.model.js.map