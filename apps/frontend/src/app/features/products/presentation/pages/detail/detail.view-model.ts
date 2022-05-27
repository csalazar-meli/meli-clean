import { ProductEntity } from '@meli-clean/frontend/features/products/core';

export class DetailViewModel {
  public product: ProductEntity | null = null;
  public isLoading = false;
}
