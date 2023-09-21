import { Component, OnInit, Output } from '@angular/core';
import { ICategoryList } from './top-bar/category-list/ICategoryList';
import { LocalStorageService } from '../service/local-storage.service';
import { IProduct } from './product-list/product.interface';
import { IUserDetails } from './IUserDetails';
import { ApiServiceService } from '../api-service.service';
import { IProducts } from './iproducts';


@Component({
  selector: 'app-parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.scss']
})
export class ParentContainerComponent implements OnInit {


  public categoriesList!: Array<ICategoryList>;
  public productsList!: Array<IProduct>;
  public userList: Array<IUserDetails> = []
  public cartProducts!: Array<IProduct>;
  
  
  public items: Array<IProducts> = []


  constructor(private readonly localStorageService: LocalStorageService, private apiService: ApiServiceService) { }

  public ngOnInit(): void {
    this.apiService.getProduct().subscribe((data: any) => {
      data.products.forEach((obj: IProducts) => {
        this.items.push(obj)
      })
      //this.products= data.products;
      console.log(this.items)
    })

    this.localStorageService.setCategories();
    this.localStorageService.setAvailableProducts();

    const categories = this.localStorageService.getCategories();
    const products = this.localStorageService.getAvailableProducts();

    this.categoriesList = JSON.parse(categories);
    this.productsList = JSON.parse(products);

    const users = this.localStorageService.getUserDetails()
    this.userList = JSON.parse(users)

    this.cartProducts = this.localStorageService.getCartProducts();
  }

  public addProductToCart(product: IProduct): void {
    this.localStorageService.addProductToCart(product);
  }



}
