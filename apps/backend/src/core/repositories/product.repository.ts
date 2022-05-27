import { ProductEntity } from '../entities/product.entity';

export abstract class ProductRepository {
  public abstract search(query: string): Promise<ProductEntity[]>;

  public abstract detail(id: string): Promise<ProductEntity>;
}
