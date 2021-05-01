import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryItemComponent } from './components/categories/category-item/category-item.component';
import { RouterModule } from "@angular/router";
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryProductsComponent } from './components/categories/category-products/category-products.component';
import { OrderPageComponent } from './components/cart/order-page/order-page.component';
import { LoginComponent } from './components/account/login/login.component';
// import { HTT}
import { AuthInterceptor } from './AuthInterceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProductListComponent,
    ProductItemComponent,
    FooterComponent,
    CategoriesComponent,
    CategoryItemComponent,
    CartComponent,
    CategoryProductsComponent,
    OrderPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

],
providers: [
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true 
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
