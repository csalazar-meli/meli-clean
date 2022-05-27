import { Request, Response } from 'express';

import { ItemInteractor } from '@meli-clean/backend/core';

export function ItemDetailController(itemInteractor: ItemInteractor) {
  return async (request: Request, response: Response) => {
    const data = await itemInteractor.detail(
      encodeURIComponent(request.params.id)
    );

    response.json(data);
  };
}
