import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'full-moon-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent {
  @Input() public placeholder = '';
  @Input() public buttonAriaLabel!: string;

  @Output() public searchPressed = new EventEmitter<string>();
}
