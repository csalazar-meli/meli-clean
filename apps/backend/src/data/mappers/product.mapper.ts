import { ItemPriceEntity, ProductEntity } from '@meli-clean/backend/core';
import { ProductResponse } from './product.response';

export class ProductMapper {
  public static from(
    product: ProductResponse,
    description = '',
    categories: string[] = []
  ): ProductEntity {
    return {
      author: {
        name: '',
        lastname: '',
      },
      item: {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        picture: this.getFirstPicture(product.pictures),
        condition: product.condition,
        soldQuantity: product.sold_quantity,
        isFreeShipping: product.shipping?.free_shipping,
        description,

        price: this.getPrice(
          product.prices?.prices,
          product.price,
          product.currency_id
        ),
      },
      categories,
    };
  }

  public static fromList(products: ProductResponse[]): ProductEntity[] {
    return products.map((product) => this.from(product));
  }

  private static getFirstPicture(pictures: ProductResponse['pictures']) {
    return pictures?.length > 0 ? pictures[0].secure_url : '';
  }

  private static getPrice(
    prices: ProductResponse['prices']['prices'],
    priceToFind: number,
    currencyId: string
  ): ItemPriceEntity {
    const price = prices?.find((price) => price.amount === priceToFind);
    const amount = price?.amount ?? priceToFind;

    return {
      amount,
      currency: price?.currency_id ?? currencyId,
      decimals: this.getDecimals(amount),
    };
  }

  private static getDecimals(amount: number): number {
    return amount.toString().split('.')[1]?.length ?? 0;
  }
}
