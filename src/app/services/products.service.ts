import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private appUrl: string;
  private apiUrl: string;

  constructor( private http:HttpClient ) { 
    this.appUrl = environment.engpoint;
    this.apiUrl = '/products'
  }

  getProducts(): Observable<Product[]> {
    return   this.http.get<any[]>( this.appUrl + this.apiUrl  )
  }


}
