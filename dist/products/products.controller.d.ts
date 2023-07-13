import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): Promise<{
        id: string;
    }>;
    getAllProducts(): Promise<{
        id: any;
        title: string;
        description: string;
        price: number;
    }[]>;
    getProduct(prodId: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number): any;
    removeProduct(prodId: string): any;
}
