import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule} from '@angular/material/tabs';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'; 
import { MatIconModule } from "@angular/material/icon";
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {ProductService } from "./product.service";
import {HttpClientModule} from '@angular/common/http';
import {ProductOverviewComponent } from './product-overview/product-overview.component';
import {ProductOverview1Component } from './product-overview1/product-overview1.component';

import {GatewayComponent } from './gateway/gateway.component';
import { AccessComponent } from './access/access.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ProductOverviewComponent,
    ProductOverview1Component,
    GatewayComponent,
    AccessComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTreeModule,
    MatGridListModule,
    MatButtonModule,
    HttpClientModule
   
  ],
  
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
