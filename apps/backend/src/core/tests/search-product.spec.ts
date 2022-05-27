import { ProductRepository } from '../repositories/product.repository';
import { SearchProductUseCase } from '../use-cases/search-product.use-case';

describe('Core: DarkSide/SearchProductUseCase', () => {
  let useCase: SearchProductUseCase;
  let repository: ProductRepository;

  beforeEach(() => {
    repository = { search: jest.fn() } as unknown as ProductRepository;
    useCase = new SearchProductUseCase(repository);
  });

  afterEach(() => {
    useCase = null;
  });

  it(`Given a query string for search
      When user invoke seach products
      Then should filter by query passed`, async () => {
    // Arrange
    jest.spyOn(repository, 'search');
    const query = 'query-test';

    // Act
    await useCase.execute(query);

    // Assert
    expect(repository.search).toHaveBeenCalledWith(query);
  });
});
