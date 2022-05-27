import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailPage } from './pages/detail/detail.page';
import { ListPage } from './pages/list/list.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage,
  },
  {
    path: ':id',
    component: DetailPage,
  },
];

@NgModule({
  providers: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesProductsRoutingModule {}
