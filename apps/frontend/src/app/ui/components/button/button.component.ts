import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';

export enum ButtonType {
  PRIMARY = '--button-primary',
  SECONDARY = '--button-secondary',
  TERTIARY = '--button-tertiary',
}

@Component({
  selector: 'full-moon-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements AfterViewInit {
  @Input() public set theme(type: string) {
    this.type = type;
    this.updateType();
  }

  public types = ButtonType;
  private type!: string;

  constructor(private elementRef: ElementRef) {}

  public ngAfterViewInit(): void {
    this.updateType();
  }

  private updateType(): void {
    const button: HTMLButtonElement =
      this.elementRef.nativeElement.querySelector('.button');

    button?.style.setProperty(
      '--button-background-color',
      'var(' + (this.type ?? ButtonType.PRIMARY) + ')'
    );
  }
}
