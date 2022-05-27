import { ProductEntity, ProductRepository } from '@meli-clean/backend/core';

import { ProductMapper } from '../mappers/product.mapper';

export class FakeProductRepository implements ProductRepository {
  public async search(): Promise<ProductEntity[]> {
    const response = [
      {
        id: 'MLA901089177',
        title: 'Pantalón Jogger Elastizado Tela Gabardina ',
        seller: {
          id: 111111111,
        },
        price: 2130,
        prices: {
          prices: [
            {
              amount: 2130,
              currency_id: 'ARS',
            },
          ],
        },
        currency_id: 'ARS',
        sold_quantity: 5000,
        condition: 'new',
        thumbnail:
          'http://http2.mlstatic.com/D_857806-MLA47776537755_102021-O.jpg',
        shipping: {
          free_shipping: false,
        },
        category_id: 'MLA109282',
      },
      {
        id: 'MLA801067364',
        title: 'Pantalones Hombre Cargo Gabardina Bolsillos Casuales Jogger',
        seller: {
          id: 222222222,
        },
        price: 2499,
        prices: {
          prices: [
            {
              amount: 2499,
              currency_id: 'ARS',
            },
            {
              amount: 2115.08,
              currency_id: 'ARS',
            },
          ],
        },
        currency_id: 'ARS',
        sold_quantity: 5000,
        condition: 'new',
        thumbnail:
          'http://http2.mlstatic.com/D_683534-MLA31478230215_072019-O.jpg',
        shipping: {
          free_shipping: false,
        },
        category_id: 'MLA109282',
      },
      {
        id: 'MLA886598947',
        title: 'Pantalón De Trabajo Clásico Pampero B/carpintero T. 38 Al 60',
        seller: {
          id: 333333333,
        },
        price: 2137.5,
        prices: {
          prices: [
            {
              amount: 2250,
              currency_id: 'ARS',
            },
            {
              amount: 2137.5,
              currency_id: 'ARS',
            },
          ],
        },
        currency_id: 'ARS',
        sold_quantity: 250,
        condition: 'new',
        thumbnail:
          'http://http2.mlstatic.com/D_749300-MLA43999181866_112020-O.jpg',
        shipping: {
          free_shipping: false,
        },
        category_id: 'MLA417961',
      },
      {
        id: 'MLA886598947',
        title: 'Pantalones Cargo Hombre Gabardina Bolsillos Jogger Jogging',
        seller: {
          id: 444444444,
        },
        price: 2950,
        prices: {
          prices: [
            {
              amount: 2950,
              currency_id: 'ARS',
            },
            {
              amount: 3200,
              currency_id: 'ARS',
            },
            {
              amount: 2802.5,
              currency_id: 'ARS',
            },
          ],
        },
        currency_id: 'ARS',
        sold_quantity: 5000,
        condition: 'new',
        thumbnail:
          'http://http2.mlstatic.com/D_961005-MLA42528532158_072020-O.jpg',
        shipping: {
          free_shipping: false,
        },
        category_id: 'MLA109282',
      },
    ];

    return ProductMapper.fromList(response);
  }

  public async detail(): Promise<ProductEntity> {
    const data = {
      id: 'MLA901089177',
      title: 'Pantalón Jogger Elastizado Tela Gabardina',
      seller_id: 153042319,
      category_id: 'MLA109282',
      price: 2130,
      currency_id: 'ARS',
      sold_quantity: 8412,
      condition: 'new',
      thumbnail:
        'http://http2.mlstatic.com/D_857806-MLA47776537755_102021-I.jpg',
      pictures: [
        {
          id: '762451-MLA47939555562_102021',
          url: 'http://http2.mlstatic.com/D_762451-MLA47939555562_102021-O.jpg',
          secure_url:
            'https://http2.mlstatic.com/D_762451-MLA47939555562_102021-O.jpg',
          size: '434x500',
          max_size: '720x829',
          quality: '',
        },
      ],
      secure_thumbnail:
        'https://http2.mlstatic.com/D_857806-MLA47776537755_102021-I.jpg',
      shipping: {
        free_shipping: false,
      },
    };

    const description = {
      plain_text:
        'JOGGERS ELASTIZADOS CON PUÑOS Y CORDÓN EN LA CINTURA. IDEALES PARA USO INFORMAL, FORMAL Y DEPORTIVO. Los joggers están fabricados con gabardina importada, algodón y elastano. Esto quiere decir que su textura es suave y cómoda al contacto con la piel así como también ceden por su elasticidad. Poseen cordón para ajustar en la cintura. Disponible en los siguientes colores: Negro Azul Verde Gris Beige Camel Celeste (tipo jean) SI ESTÁS BUSCANDO COMODIDAD, ESTA ES TU MEJOR OPCIÓN. - A TENER EN CUENTA AL ELEGIR ESTE PRODUCTO: -Productos 100% de calidad, directos de fábrica SIN etiquetas. -En lavados NO toma y NO destiñe. -Variedad en talles y colores. -Máxima comodidad. IMPORTANTE: Los joggers pueden tener un tono más claro o más oscuro según lo que muestran las fotos, debido a la tela utilizada para su fabricación y el lavado posterior a su confección. LOS JOGGERS VAN DEL 38 AL 48. LAS MEDIDAS DE CADA TALLE ESTÁN PUBLICADOS (máxima diferencia entre 1 o 2 cm). NUESTRA RECOMENDACIÓN ES ELEGIR UN TALLE SUPERIOR AL NORMALMENTE UTILIZADO PARA MAYOR COMODIDAD. --------------------------------------------------------- - POLÍTICA DE CAMBIOS: ¿Puedo solicitar cambio por talle y/o color? Es posible realizar el cambio por talle o por color, disponiendo de 10 días a partir de haberlo recibido. En este caso, los costos de envío corren a cargo del comprador. Si el producto es defectuoso o presenta alguna particularidad, los costos y cargos por envíos de cambios corren a cargo de SHOWROOM MAYORISTA. No dudes en contactarnos! --------------------------------------------------------- SOMOS SHOWROOM.MAYORISTA: SOMOS MERCADO LÍDER PLATINUM, PODÉS REALIZAR TU COMPRA CON TOTAL SEGURIDAD. ¿Por qué elegirnos? - Ofrecemos productos directos de fábrica. - La mejor calidad a un precio accesible. - Atención personalizada para que la experiencia de compra sea satisfactoria. Cualquier consulta, estamos a su disposición. --------------------------------------------------------- - MEDIOS DE PAGO: A TRAVÉS DE MERCADO PAGO, PUEDE ELEGIR PAGO MEDIANTE TARJETA DE CRÉDITO/DÉBITO Y CON DINERO DISPONIBLE EN SU CUENTA, O ABONAR POR MEDIOS ELECTRÓNICOS PRESENCIALMENTE EN EFECTIVO (RAPIPAGO, PAGOFACIL, ETC) DESCARGANDO PREVIAMENTE LA BOLETA. --------------------------------------------------------- - FORMAS DE ENVÍO: - Ofrecemos Mercado Envíos a todo el país. Podés consultar los tiempos de entrega en el detalle previo a confirmar tu compra. - Mercado Envíos Flex, para que tu pedido llegue en el día. - Retiros presenciales. Embalaje y encintado SIN costo adicional --------------------------------------------------------- - ¿Dónde estamos? Nos encontramos ubicados en el barrio de Villa del Parque, a pocas cuadras de la intersección Av. Nazca y Av. Álvarez Jonte. Transportes que te acercan: 24, 47, 63, 84, 109, 110, 124, 133, 134 --------------------------------------------------------- - HORARIOS DE ATENCIÓN: -Atención telefónica las 24hs. -Retiros de productos: Lunes a Viernes de 11hs a 19hs. Sábados de 11hs a 15hs (Previamente coordinado).',
    };

    return ProductMapper.from(data, description.plain_text);
  }
}
