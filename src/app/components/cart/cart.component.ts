import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  product:any={};
  // array:any[]=[];
  // addtocart(prod:any){
  //   this.array.push(prod);
  // }
  id:any;
  constructor(private ProductService:ProductsService , private route :ActivatedRoute){
    this.id= this.route.snapshot.paramMap.get("id");
  }
  ngOnInit(): void {
    this.getproductById();
  }
    // get product by its id from server 
 getproductById(){
  this.ProductService.getProductById(this.id).subscribe((response:any) => {
    this.product = response;
  })
 }

}
