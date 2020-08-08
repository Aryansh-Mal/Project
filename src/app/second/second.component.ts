import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Product } from "../Product";
import { ProductService } from "../product.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  products: any[];
  user: Product = new Product();
  constructor(private productService: ProductService,
    private router: Router) { }

    ngOnInit() {
      this.reloadData();
    }
    reloadData() {
      this.productService.getProduct().subscribe (
        da => {console.log(da)
          this.products=da;
        }
       
      );
    }
    deleteProduct(id: number) {
      this.productService.deleteProduct(id)
        .subscribe(
          da => {
            console.log('delete');
            this.reloadData();
          },
          error => console.log(error));
    }
    createUser(): void {
      this.productService.createProduct(this.user)
          .subscribe( da => {
            alert("User created successfully.");
          });
  
    };
  
    // employeeDetails(id: number){
    //   this.router.navigate(['details', id]);
    // }

}
