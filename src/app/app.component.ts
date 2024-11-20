import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products.service';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './components/shop/shop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 

}