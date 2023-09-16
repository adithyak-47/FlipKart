import { Injectable } from '@angular/core';
import { ICategoryList } from '../parent-container/top-bar/category-list/ICategoryList';
import {Categories} from '../parent-container/top-bar/category-list/categories';
import { Products } from '../parent-container/product-list/product';
import { IProduct } from '../parent-container/product-list/product.interface';

@Injectable()
export class LocalStorageService {

  public static CATEGORIES_KEY: string = "categories";
  public static PRODUCTS_KEY: string = "products";
  public static CART_KEY: string = "cart";

  public categories: Array<ICategoryList> = Categories;
  public products: Array<IProduct> = Products;

  public cartProducts!: Array<IProduct>;
  

  constructor() { }

  public setCategories(): void{
    localStorage.setItem(LocalStorageService.CATEGORIES_KEY, JSON.stringify(this.categories));
  }

  public getCategories(): string{
    return localStorage.getItem(LocalStorageService.CATEGORIES_KEY) || "";
  }

  public setAvailableProducts(): void{
    localStorage.setItem(LocalStorageService.PRODUCTS_KEY, JSON.stringify(this.products));
  }

  public getAvailableProducts(): string{
    return localStorage.getItem(LocalStorageService.PRODUCTS_KEY) || "";
  }

  public getCartProducts(): Array<IProduct>{
    const cartItems = localStorage.getItem(LocalStorageService.CART_KEY) || "";
    if(cartItems) this.cartProducts = JSON.parse(cartItems);
    else this.cartProducts = [];
    console.log(cartItems)
    return this.cartProducts;
  }



  public addProductToCart(product: IProduct): void{
    this.getCartProducts();
    console.log(this.cartProducts);
    this.cartProducts.push(product);
    localStorage.setItem(LocalStorageService.CART_KEY, JSON.stringify(this.cartProducts));
  }

}
