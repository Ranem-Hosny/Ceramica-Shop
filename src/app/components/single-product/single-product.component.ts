import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute,  Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,RouterLink,CommonModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit {
  product:any={};
  id:any;
  description:any;
   constructor(private ProductService:ProductsService , private route :ActivatedRoute , private root:Router){
     this.id= this.route.snapshot.paramMap.get("id");
     
     this.description=this.ProductService.discription;
 
   }
   gotoproduct(id:any){
    this.root.navigate(['/cart',id]);
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
