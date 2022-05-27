import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ProductInteractor, ProductRepository } from '@meli-clean/frontend/features/products/core';
import { HttpProductRepository } from '@meli-clean/frontend/features/products/data';
import { UiAngularModule } from '../../../ui/ui-angular.module';

import { ItemComponent } from './components/item/item.component';
import { SummaryComponent } from './components/summary/summary.component';
import { FeaturesProductsRoutingModule } from './features-products-routing.module';
import { DetailPage } from './pages/detail/detail.page';
import { ListPage } from './pages/list/list.page';
import { CategoriesService } from './services/categories.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UiAngularModule,
    FeaturesProductsRoutingModule,
  ],
  declarations: [ListPage, DetailPage, ItemComponent, SummaryComponent],
})
export class FeaturesProductsModule {
  public static forRoot(): ModuleWithProviders<FeaturesProductsModule> {
    return {
      ngModule: FeaturesProductsModule,
      providers: [
        CurrencyPipe,
        DecimalPipe,
        CategoriesService,
        {
          provide: ProductRepository,
          useClass: HttpProductRepository,
        },
        {
          provide: ProductInteractor,
          deps: [ProductRepository],
          useClass: ProductInteractor,
        },
      ],
    };
  }
}
