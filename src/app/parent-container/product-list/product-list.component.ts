import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from './product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {


  @Input() public productsListFromParent!: Array<IProduct>;

  @Output() public cartProduct: EventEmitter<IProduct> = new EventEmitter();

  constructor(){}


  public addProductToCart(product: IProduct): void{
    this.cartProduct.emit(product);
    alert("Product has been added to cart.");
  }


}
