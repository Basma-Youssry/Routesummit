import { Component, OnInit } from '@angular/core';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor(private _EcomdataService: EcomdataService){}

   products:any[] = []; 
   isLoading = true;
   searchTerm:string = ''; 

   ngOnInit(): void {
     this._EcomdataService.getAllProducts().subscribe({

       next: (response) => {
        this.products = response;
        this.isLoading = false;
        //  console.log(this.products)
       } 
     })
   }


   selectedSort = '';

  sortProducts() {
    switch (this.selectedSort) {
      case 'priceLowToHigh':
        this.products.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        this.products.sort((a, b) => b.price - a.price);
        break;
      case 'nameAZ':
        this.products.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
  }

}
  

//   products:any[] = [];

//   ngOnInit(): void {
//     this._EcomdataService.getAllProducts().subscribe({
     
//       }
//     })
// }

// export class HomeComponent implements OnInit {
//   constructor(private _EcomdataService: EcomdataService){}

//   products:any[] = [];

//   ngOnInit(): void {
//     this._EcomdataService.getAllProducts().subscribe({
//       next: (response) => {
       
        
//         this.products = response;

//          console.log(this.products);
//       }
//     })
//   }
