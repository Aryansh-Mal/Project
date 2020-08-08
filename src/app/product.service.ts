import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from "./Product";

@Injectable(
  
)
export class ProductService {

private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    console.log(this.baseUrl+'/product');
    return this.http.get(this.baseUrl+'/product');
  }

  createProduct(user: object): Observable<Object> {
    return this.http.post<Product>(this.baseUrl+'/product', user);
  }
 

  // updateEmployee(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  deleteProduct(id: number): Observable<any> {
    console.log(this.baseUrl+'/product/{id}');
    return this.http.delete(this.baseUrl+'/product/'+id);
  }

  // getEmployeesList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  // }
}
