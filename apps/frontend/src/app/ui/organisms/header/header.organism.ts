import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'full-moon-header',
  templateUrl: './header.organism.html',
  styleUrls: ['./header.organism.scss'],
})
export class HeaderOrganism {
  @Input() public logo = '/assets/images/logo.png';
  @Input() public logoAlt = 'Logo de mercado libre, presiona para ir al inicio';
  @Input() public searchPlaceholder = 'Nunca dejes de buscar';

  @Output() public logoPressed = new EventEmitter<string>();
  @Output() public searchPressed = new EventEmitter<string>();
}
