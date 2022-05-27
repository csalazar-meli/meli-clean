import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductEntity as ProductResponseEntity } from '@meli-clean/backend/core';
import { ProductEntity, ProductRepository } from '@meli-clean/frontend/features/products/core';

import { ProductMapper } from '../mappers/product.mapper';

const API_SEARCH_ENDPOINT = 'http://localhost:3333/api/items?q=';
const API_DETAIL_ENDPOINT = 'http://localhost:3333/api/items/';

@Injectable()
export class HttpProductRepository implements ProductRepository {
  constructor(private http: HttpClient) {}

  public async search(query: string): Promise<ProductEntity[]> {
    const response = await this.http
      .get(API_SEARCH_ENDPOINT + query)
      .toPromise();

    return ProductMapper.fromList(response as ProductResponseEntity[]);
  }

  public async detail(id: string): Promise<ProductEntity> {
    const product = await this.http.get(API_DETAIL_ENDPOINT + id).toPromise();

    return ProductMapper.from(product as ProductResponseEntity);
  }
}
