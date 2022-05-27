import { ProductEntity } from '../entities/product.entity';
import { ProductRepository } from '../repositories/product.repository';

export class DetailProductUseCase {
  constructor(protected repository: ProductRepository) {}

  public execute(id: string): Promise<ProductEntity> {
    return this.repository.detail(id);
  }
}
