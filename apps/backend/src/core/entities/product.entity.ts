import { AuthorEntity } from './author.entity';
import { ItemEntity } from './item.entity';

export interface ProductEntity {
  author: AuthorEntity;
  item: ItemEntity;
  categories?: string[];
}
