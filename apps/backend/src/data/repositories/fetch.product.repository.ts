import fetch from 'cross-fetch';

import { ProductEntity, ProductRepository } from '@meli-clean/backend/core';

import { ProductMapper } from '../mappers/product.mapper';

const API_SEARCH_ENDPOINT = 'https://api.mercadolibre.com/sites/MLA/search?q=';
const API_SEARCH_ENDPOINT_LIMIT = '&limit=4';
const API_DETAIL_ENDPOINT = 'https://api.mercadolibre.com/items/';
const API_CATEGORIES_ENDPOINT = 'https://api.mercadolibre.com/categories/';

export class FetchProductRepository implements ProductRepository {
  public async search(query: string): Promise<ProductEntity[]> {
    const response = await fetch(
      API_SEARCH_ENDPOINT + query + API_SEARCH_ENDPOINT_LIMIT
    ).then((response) => response.json());

    const products = ProductMapper.fromList(response.results);

    if (products.length > 0) {
      products[0].categories = await this.getCategories(
        response.results[0]?.category_id
      );
    }

    return products;
  }

  public async detail(id: string): Promise<ProductEntity> {
    const data = await fetch(API_DETAIL_ENDPOINT + id).then((response) =>
      response.json()
    );

    const description = await this.getDescription(id);
    const categories = await this.getCategories(data.category_id);

    return ProductMapper.from(data, description.plain_text, categories);
  }

  private async getDescription(id: string) {
    return await fetch(API_DETAIL_ENDPOINT + id + '/description').then(
      (response) => response.json()
    );
  }

  private async getCategories(id: string) {
    if (!id) {
      return [];
    }

    const data = await fetch(API_CATEGORIES_ENDPOINT + id).then((response) =>
      response.json()
    );

    return data.path_from_root.map(
      (category: { name: string }) => category.name
    );
  }
}
