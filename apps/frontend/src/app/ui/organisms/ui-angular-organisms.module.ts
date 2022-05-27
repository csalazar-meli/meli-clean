import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiAngularComponentsModule } from '../components/ui-angular-components.module';
import { HeaderOrganism } from './header/header.organism';
import { StateIndicatorOrganism } from './state-indicator/state-indicator.organism';

const DECLARATIONS = [HeaderOrganism, StateIndicatorOrganism];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiAngularComponentsModule,
  ],
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
})
export class UiAngularOrganismsModule {}
