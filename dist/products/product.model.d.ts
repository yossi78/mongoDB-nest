import * as mongoose from 'mongoose';
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    description?: string;
    title?: string;
    price?: number;
}, mongoose.Document<unknown, {}, {
    description?: string;
    title?: string;
    price?: number;
}> & {
    description?: string;
    title?: string;
    price?: number;
} & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
}
