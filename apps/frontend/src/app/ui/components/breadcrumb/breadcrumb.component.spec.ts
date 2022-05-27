import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('Ui/Angular/BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Given a breadscrumb component with breads
      When user view the breadscrumb
      Then should see list of items`, async () => {
    // Arrange
    const breads = ['test-1', 'test-2'];
    const nativeElement = fixture.nativeElement;

    // Act
    component.breads = breads;
    fixture.detectChanges();

    // Assert
    expect(nativeElement.querySelectorAll('.breadcrumb__item')).toHaveLength(
      breads.length
    );
  });
});
