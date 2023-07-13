import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}



  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    console.log('ADD A NEW PRODUCT');
    const generatedId = await this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }



  @Get()
  async getAllProducts() {
    console.log('GET ALL PRODUCTS');
    const products =  await this.productsService.getProducts();
    console.log(products);
    return products;
  }


  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    console.log('GET SINGLE PRODUCT');
    return this.productsService.getSingleProduct(prodId);
  }



  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    console.log('UPDATE PRODUCT');
    await this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return null;
  }


  @Delete(':id')
  async removeProduct(@Param('id') prodId: string) {
      console.log('REMOVE PRODUCT');
      await this.productsService.deleteProduct(prodId);
      return null;
  }
}