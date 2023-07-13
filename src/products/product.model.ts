

import * as mongoose from 'mongoose';


export const ProductSchema = new mongoose.Schema({
      title: {type: String , require: true} , 
      description : String , 
      price : {type: Number , require: true} ,
})


export interface Product extends mongoose.Document{
    id: string,
    title: string,
    description: string,
    price: number,
  
}