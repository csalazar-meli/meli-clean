import { ProductEntity as ProductResponseEntity } from '@meli-clean/backend/core';
import { ProductEntity } from '@meli-clean/frontend/features/products/core';

export class ProductMapper {
  public static from(product: ProductResponseEntity): ProductEntity {
    return {
      author: product.author,
      categories: product.categories as string[],
      image: product.item.picture,
      ...product.item,
    };
  }

  public static fromList(products: ProductResponseEntity[]): ProductEntity[] {
    return products.map((product) => this.from(product));
  }
}
