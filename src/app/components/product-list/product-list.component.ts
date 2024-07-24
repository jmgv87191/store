import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { ProductsStateService } from '../../services/products-state.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent  {

/*   
  listaProductos :Product[] = []

  ngOnInit(): void {
    this.getProducts();
    setTimeout(() => {
      
      console.log(this.listaProductos)
    }, 200);
  }


  constructor( private _productService: ProductsService ){

  }


  getProducts(){
    this._productService.getProducts().subscribe((data)=>{
      this.listaProductos = data
    })
  } */

    productsState = inject(ProductsStateService)


}
