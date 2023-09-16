import { Component, Input } from '@angular/core';
import { IProduct } from './product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {


  @Input() public productsListFromParent!: Array<IProduct>;

  constructor(){}


}
