import { AuthorEntity } from './author.entity';
import { ItemPriceEntity } from './item-price.entity';

export interface ProductEntity {
  author: AuthorEntity;
  id: string;
  title: string;
  thumbnail: string;
  image: string;
  condition: string;
  soldQuantity?: number;
  description?: string;
  price: ItemPriceEntity;
  isFreeShipping: boolean;
  categories: string[];
}
