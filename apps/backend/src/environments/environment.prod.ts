import { ProductRepository } from '@meli-clean/backend/core';
import { FetchProductRepository } from '@meli-clean/backend/data';

const providers = {
  [ProductRepository.name]: FetchProductRepository,
};

export const environment = {
  production: true,
  providers,
};
