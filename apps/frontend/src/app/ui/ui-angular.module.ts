import { NgModule } from '@angular/core';

import { UiAngularComponentsModule } from './components/ui-angular-components.module';
import { UiAngularOrganismsModule } from './organisms/ui-angular-organisms.module';

const MODULES = [UiAngularComponentsModule, UiAngularOrganismsModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class UiAngularModule {}
