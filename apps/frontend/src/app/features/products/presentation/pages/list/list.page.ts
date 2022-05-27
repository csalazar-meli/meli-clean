import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInteractor } from '@meli-clean/frontend/features/products/core';

import { CategoriesService } from '../../services/categories.service';
import { ListConfig } from './list.config';
import { ListViewModel } from './list.view-model';

interface ListQueryParam {
  search: string;
}

@Component({
  selector: 'meli-clean-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnDestroy {
  public viewModel = new ListViewModel();
  public config = ListConfig;

  private queryStringSubscription$!: Subscription;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private productInteractor: ProductInteractor,
    private categoriesService: CategoriesService
  ) {}

  public async ngOnInit() {
    this.processQueryString();
  }

  public ngOnDestroy(): void {
    this.queryStringSubscription$?.unsubscribe();
  }

  public goToDetails(productId: string) {
    this.router.navigate([`${this.config.routes.itemsDetail}${productId}`]);
  }

  private processQueryString() {
    this.queryStringSubscription$ = this.route.queryParams.subscribe(
      (queryParam) => {
        if (<ListQueryParam>queryParam['search']) {
          this.loadResults(queryParam['search']);
        }
      }
    );
  }

  private async loadResults(search: string) {
    try {
      this.viewModel.products = [];
      this.viewModel.isLoading = true;

      this.viewModel.products = await this.productInteractor.search(
        encodeURIComponent(search)
      );

      this.categoriesService.emit(this.viewModel.products[0]?.categories);
      this.viewModel.isLoading = false;
    } catch (error) {
      this.viewModel.isLoading = false;
      console.error(error);
    }
  }
}
