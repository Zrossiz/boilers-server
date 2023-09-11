import { ApiProperty } from '@nestjs/swagger';

class ShoppingCartItem {
  @ApiProperty({ example: 61 })
  id: number;

  @ApiProperty({ example: 'Boiler_name' })
  name: string;

  @ApiProperty({ example: 7800 })
  price: number;

  @ApiProperty({
    example: '["https://loremflickr.com/640/480/technics?random=22"]',
  })
  images: string;

  @ApiProperty({ example: 0 })
  in_stock: number;

  @ApiProperty({ example: 'Henry' })
  boiler_manufacturer: string;

  @ApiProperty({ example: 'Sensor' })
  parts_manufacturer: string;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 1 })
  partId: number;

  @ApiProperty({ example: 1 })
  count: number;

  @ApiProperty({ example: 1 })
  total_price: number;

  @ApiProperty({ example: '2023-09-08T13:34:25.925Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-09-08T13:34:25.925Z' })
  updatedAt: string;
}

export class GetAllResponse extends ShoppingCartItem {}

export class AddToCartResponse extends ShoppingCartItem {}

export class UpdateCountResponse {
  @ApiProperty({ example: '1' })
  count: number;
}

export class UpdateCountRequest {
  @ApiProperty({ example: '1' })
  count: number;
}

export class TotalPriceResponse {
  @ApiProperty({ example: '1' })
  total_price: number;
}

export class TotalPriceRequest {
  @ApiProperty({ example: '7100' })
  total_price: number;
}
