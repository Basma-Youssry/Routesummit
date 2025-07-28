import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) {}

  headers:any = {token: localStorage.getItem('etoken')}
  addToCart(productId:string): Observable<any>{

  return this._HttpClient.post(`https://fakestoreapi.com/carts`, 
    {productId: productId}, 
    {
      headers: this.headers
    });
  }
}
