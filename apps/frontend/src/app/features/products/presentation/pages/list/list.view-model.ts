import { ProductEntity } from '@meli-clean/frontend/features/products/core';

export class ListViewModel {
  public products: ProductEntity[] = [];
  public categories: string[] = [];
  public isLoading = false;
}
