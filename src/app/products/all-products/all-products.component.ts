import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent  implements OnInit{
allproducts:any=[]

searchterm:string='';
  constructor(private api:ApiService){}

  ngOnInit():void{
    this.api.getProducts().subscribe(
      (data:any)=>{
        this.allproducts=data.products
      }
    )
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
  }



}
