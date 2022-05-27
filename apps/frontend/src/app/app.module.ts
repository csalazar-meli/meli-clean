import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeaturesProductsModule } from '@meli-clean/frontend/features/products/presentation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { UiAngularModule } from './ui/ui-angular.module';

@NgModule({
  declarations: [AppComponent, HomePage],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiAngularModule,
    FeaturesProductsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
