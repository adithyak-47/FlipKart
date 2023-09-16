import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from './product.interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {


  @Input() public productsListFromParent!: Array<IProduct>;

  @Output() public cartProduct: EventEmitter<IProduct> = new EventEmitter();

  constructor(private readonly localStorageService: LocalStorageService){}


  public addProductToCart(product: IProduct): void{

    const user = this.localStorageService.getUserDetails();
    if(user === ''){
      alert('You need to login or sign up to add item');
    }
    else{
      this.cartProduct.emit(product);
      alert("Product has been added to cart.");
    }
  }
}
