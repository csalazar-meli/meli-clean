import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'full-moon-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() public breads: string[] = [];

  @Output() breadPressed = new EventEmitter<string>();
}
