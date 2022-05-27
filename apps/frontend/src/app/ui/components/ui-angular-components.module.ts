import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { LoadingComponent } from './loading/searcher.component';
import { SearcherComponent } from './searcher/searcher.component';

const DECLARATIONS = [
  SearcherComponent,
  BreadcrumbComponent,
  ButtonComponent,
  LoadingComponent,
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
})
export class UiAngularComponentsModule {}
