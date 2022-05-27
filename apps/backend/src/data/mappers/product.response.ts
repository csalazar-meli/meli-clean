export interface ProductResponse {
  id: string;
  title: string;
  thumbnail: string;
  condition: string;
  sold_quantity: number;
  price: number;
  currency_id: string;
  category_id: string;
  seller_id?: number;

  seller?: {
    id: number;
  };

  pictures?: {
    id: string;
    url: string;
    secure_url: string;
  }[];

  prices?: {
    prices: {
      currency_id: string;
      amount: number;
    }[];
  };

  shipping: {
    free_shipping: boolean;
  };
}
