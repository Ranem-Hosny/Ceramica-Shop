import { Component,  OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FooterComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
  // intial variables
  Products :any[] =[];
 
  description:any;
  // constructor Funtion : render first ....
  constructor(private productsService:ProductsService ,private route:Router){
    this.description=this.productsService.discription;
  }

  //interface ....

  ngOnInit(): void {
    // show all products when i call it in template without calling the funtion ,products are got when the program run.
    this.getProducts()
 }

  gotoproduct(id:any){
    this.route.navigate(['/product',id]);

  }

  //Get products from db.json file using json server ....
  getProducts(){
    this.productsService.getAllproducts().subscribe((res :any) => {this.Products = res ;});
  };



 
}
 

  


