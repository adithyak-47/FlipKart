import { Component, OnInit, Output } from '@angular/core';
import { ICategoryList } from './top-bar/category-list/ICategoryList';
import { LocalStorageService } from '../service/local-storage.service';
import { IProduct } from './product-list/product.interface';


@Component({
  selector: 'app-parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.scss']
})
export class ParentContainerComponent implements OnInit {


  public categoriesList!: Array<ICategoryList>;
  public productsList!: Array<IProduct>;
  public cartProducts!: Array<IProduct>;
  

  constructor(private readonly localStorageService: LocalStorageService){}

  public ngOnInit(): void {
    
    this.localStorageService.setCategories();
    this.localStorageService.setAvailableProducts();

    const categories = this.localStorageService.getCategories();
    const products = this.localStorageService.getAvailableProducts();
    
    
    this.categoriesList = JSON.parse(categories);
    this.productsList = JSON.parse(products);
    this.cartProducts = this.localStorageService.getCartProducts();
  }

  public addProductToCart(product: IProduct): void{
    this.localStorageService.addProductToCart(product);
  }



}
