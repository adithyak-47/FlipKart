import { Injectable } from '@angular/core';
import { ICategoryList } from '../parent-container/top-bar/category-list/ICategoryList';
import {Categories} from '../parent-container/top-bar/category-list/categories';
import { Products } from '../parent-container/product-list/product';
import { IProduct } from '../parent-container/product-list/product.interface';
import { IUserDetails } from '../parent-container/IUserDetails';

@Injectable()
export class LocalStorageService {

  public static CATEGORIES_KEY: string = "categories";
  public static PRODUCTS_KEY: string = "products";
  public static USER_KEY='userdetails'


  public categories: Array<ICategoryList> = Categories;
  public products: Array<IProduct> = Products;  

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

  public setUserDetails(userDetails: IUserDetails): void{
    localStorage.setItem(LocalStorageService.USER_KEY, JSON.stringify(userDetails) );
  }

  public getUserDetails(): string {
    return localStorage.getItem(LocalStorageService.USER_KEY) || '';
  }
}
