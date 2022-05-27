import { Component, Input } from '@angular/core';

@Component({
  selector: 'full-moon-state-indicator',
  templateUrl: './state-indicator.organism.html',
  styleUrls: ['./state-indicator.organism.scss'],
})
export class StateIndicatorOrganism {
  @Input() public showEmptyCase = false;
  @Input() public showLoading = true;
}
