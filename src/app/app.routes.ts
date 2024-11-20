import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { HomeComponent } from './components/home/home.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"shop", component:ShopComponent},
    {path:"product/:id", component:SingleProductComponent},
    {path:"cart" ,component:CartComponent},
    {path:"cart/:id",component:CartComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent}
    
  
];


