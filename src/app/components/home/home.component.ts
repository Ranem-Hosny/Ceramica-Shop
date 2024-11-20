import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  Products :any[] =[];
constructor(private route:Router ,private productsService:ProductsService){}
gotoproduct(id:any){
  this.route.navigate(['/cart',id]);
}
gotoproductimg(id:any){
  this.route.navigate(['/product',id]);
}
ngOnInit(): void {
  // show all products when i call it in template without calling the funtion ,products are got when the program run.
  this.getProducts()
}
getProducts(){
  this.productsService.getAllproducts().subscribe((res :any) => {this.Products = res ;});}
}
