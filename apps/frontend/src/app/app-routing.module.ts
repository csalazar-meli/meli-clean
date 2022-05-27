import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'items',
        loadChildren: () =>
          import('@meli-clean/frontend/features/products/presentation').then(
            (m) => m.FeaturesProductsModule
          ),
      },
    ],
  },

  // --------------------------
  // - ADD YOUR ROUTERS ABOVE -
  // --------------------------
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
