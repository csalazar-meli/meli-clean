import { ProductRepository } from '../repositories/product.repository';
import { SearchProductUseCase } from '../use-cases/search-product.use-case';

describe('Core: Products/SearchProductUseCase', () => {
  let useCase: SearchProductUseCase | null;
  let repository: ProductRepository;

  beforeEach(() => {
    repository = { search: jest.fn() } as unknown as ProductRepository;
    useCase = new SearchProductUseCase(repository);
  });

  afterEach(() => {
    useCase = null;
  });

  it(`Given a query string to search
      When user invoke seach products
      Then should filter by query passed`, async () => {
    // Arrange
    jest.spyOn(repository, 'search');
    const query = 'query-test';

    // Act
    await useCase?.execute(query);

    // Assert
    expect(repository.search).toHaveBeenCalledWith(query);
  });
});
