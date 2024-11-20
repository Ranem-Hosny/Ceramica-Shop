import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  discription:string ="Discover the beauty of ceramics with our handcrafted. This exquisite piece combines artistry and function, making it a versatile addition to any space. Whether used as a decorative accent or a practical item, this ceramic creation adds a touch of elegance to your surroundings. Showcases the craftsmanship and timeless appeal of ceramics. Its ensures it’s built to last, serving both as a beautiful addition and a functional part of your daily life. Experience the artistry of ceramics and enhance your living spaces with our. Order today and elevate your surroundings with this exquisite piece."

  
  constructor(private http:HttpClient) { }
  //shop
  getAllproducts(){
    return this.http.get("http://localhost:3000/products" );
    //we can get one product by its id
  };
 //single product
  getProductById(id: any){
    return this.http.get("http://localhost:3000/products/"+id);
  }

}
