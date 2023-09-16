import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../product-list/product.interface';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {


  public cartProducts!: Array<IProduct>;
  public totalPrice: number = 0;

  constructor(private readonly localStorageService: LocalStorageService, private readonly router: Router){}

  public ngOnInit(): void {
    this.cartProducts = this.localStorageService.getCartProducts();

    this.calculateTotalPrice();
  }

  public calculateTotalPrice(): void{
    for(let cartItem of this.cartProducts){
      this.totalPrice += cartItem.price;
    }
  }

  public goHome(): void{
    this.router.navigate(['']);
  }

}
