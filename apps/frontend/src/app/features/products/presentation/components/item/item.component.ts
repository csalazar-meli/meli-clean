import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'full-moon-products-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() public image = '';
  @Input() public title = '';
  @Input() public priceAmount?: string = '';
  @Input() public isFreeShipping = false;
  @Input() public shippingIcon = '';

  @Output() public selected: EventEmitter<void> = new EventEmitter();
}
