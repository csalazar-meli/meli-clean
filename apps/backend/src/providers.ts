import { ItemInteractor, ProductRepository } from '@meli-clean/backend/core';

import { environment } from './environments/environment';
import { injectionResolver, register } from './utils/injection-resolver.util';

export function registerProviders() {
  register(
    ProductRepository,
    new environment.providers[ProductRepository.name]()
  );

  register(
    ItemInteractor,
    new ItemInteractor(injectionResolver(ProductRepository))
  );
}
