import { ProductRepository } from '@meli-clean/backend/core';
import { FakeProductRepository } from '@meli-clean/backend/data';

const providers = {
  [ProductRepository.name]: FakeProductRepository,
};

export const environment = {
  production: false,
  providers,
};
