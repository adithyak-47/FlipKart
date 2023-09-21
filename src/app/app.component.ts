import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Flipkart';


    // this.apiService.getProduct().subscribe(
    //   (data) => {
    //     data.forEach(element => {
    //     });
    // })
  //}

}
