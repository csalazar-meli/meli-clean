import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInteractor } from '@meli-clean/frontend/features/products/core';

import { CategoriesService } from '../../services/categories.service';
import { DetailViewModel } from './detail.view-model';

@Component({
  selector: 'full-moon-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit, OnDestroy {
  public viewModel = new DetailViewModel();

  private queryStringSubscription$!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productInteractor: ProductInteractor,
    private categoriesService: CategoriesService
  ) {}

  public async ngOnInit() {
    this.processParams();
  }

  public ngOnDestroy(): void {
    this.queryStringSubscription$?.unsubscribe();
  }

  private processParams() {
    this.queryStringSubscription$ = this.route.params.subscribe((param) => {
      this.loadDetail(<string>param['id']);
    });
  }

  private async loadDetail(id: string) {
    this.viewModel.product = null;

    if (!id) {
      return;
    }

    try {
      this.viewModel.isLoading = true;
      this.viewModel.product = await this.productInteractor.detail(
        encodeURIComponent(id)
      );

      this.categoriesService.emit(this.viewModel.product.categories);
      this.viewModel.isLoading = false;
    } catch (error) {
      this.viewModel.product = null;
      this.viewModel.isLoading = false;
      console.log(error);
    }
  }
}
