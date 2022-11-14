import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { formComponent } from './components/form/form.component';
import { productsComponent } from './components/products/products.component';
import { startComponent } from './components/startPage/start.component';

@NgModule({
  declarations: [
    AppComponent,
    formComponent,
    productsComponent,
    startComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // formComponent,
    // productsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
