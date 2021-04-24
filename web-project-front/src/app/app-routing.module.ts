import { OrderPageComponent } from './components/cart/order-page/order-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryProductsComponent } from './components/categories/category-products/category-products.component';
import { LoginComponent } from './components/account/login/login.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';

const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "cart", component: CartComponent },
  { path: "categories/:id", component:CategoryProductsComponent},
  { path: "cart/ordering", component: OrderPageComponent},
  { path:'login', component:LoginComponent},
  { path:'sign-up', component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
