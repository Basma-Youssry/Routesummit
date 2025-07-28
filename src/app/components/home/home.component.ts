import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private _EcomdataService: EcomdataService, private _CartService:CartService){}

  products:any[] = [];
  isLoading = true;
  searchTerm:string = '';

  ngOnInit(): void {
    this._EcomdataService.getAllProducts().subscribe({
      next: (response) => {
       
        
        this.products = response;
        this.isLoading = false;
        //  console.log(this.products);
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

  addCart(id:string): void{
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response);
      },
      error:(err) => {
        console.log(err);
        
      }
    })
  }
}
