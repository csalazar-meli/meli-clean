import { ProductRepository } from '../repositories/product.repository';
import { ProductEntity } from '../entities/product.entity';

export class SearchProductUseCase {
  constructor(protected repository: ProductRepository) {}

  public execute(query: string): Promise<ProductEntity[]> {
    return this.repository.search(query);
  }
}
