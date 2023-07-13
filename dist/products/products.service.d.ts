import { Product } from './product.model';
import { Model } from 'mongoose';
export declare class ProductsService {
    private productModel;
    private products;
    constructor(productModel: Model<Product>);
    insertProduct(title: string, desc: string, price: number): Promise<string>;
    getProducts(): Product[];
    getSingleProduct(productId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    updateProduct(productId: string, title: string, desc: string, price: number): void;
    deleteProduct(prodId: string): void;
    private findProduct;
}
