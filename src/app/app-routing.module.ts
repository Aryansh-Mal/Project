import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {ProductOverview1Component} from './product-overview1/product-overview1.component';
import {AccessComponent} from './access/access.component';
import {GatewayComponent} from './gateway/gateway.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'FirstComponent', pathMatch: 'full'},
  {path: 'first-component', component: FirstComponent },
  {path: 'second-component', component: SecondComponent },
  {path:'productOverview1-component', component:ProductOverview1Component},
  {path: 'access-component', component:AccessComponent},
  {path: 'gateway-component', component:GatewayComponent},
  {path:'about-component', component:AboutComponent},
  {path:'contact-component', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
