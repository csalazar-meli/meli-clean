import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '@meli-clean/frontend/features/products/presentation';

@Component({
  selector: 'meli-clean-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  public breadcrumbs: string[] = [];

  constructor(
    private router: Router,
    private categoriesService: CategoriesService
  ) {}

  public ngOnInit() {
    this.categoriesService.subscribe((categories) => {
      this.breadcrumbs = categories;
    });
  }

  public ngOnDestroy(): void {
    this.categoriesService.unsubscribe();
  }

  public onSearch(search: string) {
    this.router.navigate(['/items'], {
      queryParams: { search },
    });
  }

  public goToHome() {
    this.router.navigate(['/']);
  }
}
