import { Component, Input } from '@angular/core';

@Component({
  selector: 'full-moon-products-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  @Input() public status = '';
  @Input() public title = '';
  @Input() public priceAmount: string | null = '';
}
