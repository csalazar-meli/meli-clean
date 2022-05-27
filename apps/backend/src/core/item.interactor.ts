import { ProductRepository } from './repositories/product.repository';
import { DetailProductUseCase } from './use-cases/detail-product.use-case';
import { SearchProductUseCase } from './use-cases/search-product.use-case';

export class ItemInteractor {
  public searchProductUseCase: SearchProductUseCase;
  public detailProductUseCase: DetailProductUseCase;

  constructor(private repository: ProductRepository) {
    this.searchProductUseCase = new SearchProductUseCase(this.repository);
    this.detailProductUseCase = new DetailProductUseCase(this.repository);
  }

  public search(query: string) {
    return this.searchProductUseCase.execute(query);
  }

  public detail(id: string) {
    return this.detailProductUseCase.execute(id);
  }
}
