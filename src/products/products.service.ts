import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsModule } from './products.module';
import { response } from 'express';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(@InjectModel('Product') private productModel: Model<Product>){}



  async insertProduct(title: string, desc: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new this.productModel({
      title:title, 
      desc:desc, 
      price:price,
    });
    const result = await newProduct.save();
    console.log(result);
    return result.id as string;
  }



  async getProducts() {
    const products = await this.productModel.find().exec();    
    return products.map((prod) => ({
      id: prod.id , 
      title : prod.title , 
      description : prod.description , 
      price : prod.price
    }));
  }


  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId);
    return {
       id:product.id ,
       title:product.title,
       description:product.description,
       price:product.price
      } ;
  }



  async updateProduct(productId: string, title: string, desc: string, price: number) {
    const updatedProduct = await this.findProduct(productId);    
    if (title) {
      updatedProduct.title = title;
    }
    if (desc) {
      updatedProduct.description = desc;
    }
    if (price) {
      updatedProduct.price = price;
    }
    updatedProduct.save();
  }



  async deleteProduct(prodId: string) {
     const result =  await this.productModel.deleteOne({_id:prodId}).exec();
     if(result.deletedCount===0){
      throw new NotFoundException('Could not find product !!');
     }
     console.log(result);
  }



  private async findProduct(id: string): Promise<Product> {   
    let product;
    try{ 
          product = await this.productModel.findById(id);
    }catch(error){
      throw new NotFoundException('Could not find product.');
    }
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }



}