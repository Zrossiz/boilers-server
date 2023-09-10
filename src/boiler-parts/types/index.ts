import { ApiProperty } from '@nestjs/swagger';

export interface IBoilerPartsQuery {
  limit: string;
  offset: string;
}

class BoilerParts {
  @ApiProperty({ example: 61 })
  id: number;

  @ApiProperty({ example: 'Henry' })
  boiler_manufacturer: string;

  @ApiProperty({ example: 7800 })
  price: number;

  @ApiProperty({ example: 'Sensor' })
  parts_manufacturer: string;

  @ApiProperty({ example: 1234 })
  vendor_code: string;

  @ApiProperty({ example: 'Boiler_name' })
  name: string;

  @ApiProperty({
    example: 'Laborum nesciunt nam ab maiores atque asperiores natus alias ad.',
  })
  description: string;

  @ApiProperty({
    example:
      '["https://loremflickr.com/640/480/technics?random=22","https://loremflickr.com/640/480/technics?random=17","https://loremflickr.com/640/480/technics?random=20","https://loremflickr.com/640/480/technics?random=7","https://loremflickr.com/640/480/technics?random=26","https://loremflickr.com/640/480/technics?random=8","https://loremflickr.com/640/480/technics?random=2"]',
  })
  images: string;

  @ApiProperty({ example: 0 })
  in_stock: number;

  @ApiProperty({ example: false })
  bestsellers: boolean;

  @ApiProperty({ example: false })
  new: boolean;

  @ApiProperty({ example: 0 })
  popularity: number;

  @ApiProperty({ example: 'Natus temporibus id quia provident iste corporis.' })
  compatibility: string;

  @ApiProperty({ example: '2023-09-08T13:34:25.925Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-09-08T13:34:25.925Z' })
  updatedAt: string;
}

export class PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: BoilerParts[];
}

export class Bestsellers extends BoilerParts {
  @ApiProperty({ example: true })
  bestsellers: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: Bestsellers[];
}

export class NewParts extends BoilerParts {
  @ApiProperty({ example: true })
  new: boolean;
}

export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: NewParts[];
}

export class SearchByLetterResponse extends BoilerParts {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class SearchResponse extends PaginateAndFilterResponse {
  @ApiProperty({ type: SearchByLetterResponse, isArray: true })
  rows: SearchByLetterResponse[];
}

export class SearchRequest {
  @ApiProperty({ example: 'L' })
  search: string;
}

export class GetByNameResponse extends BoilerParts {}

export class GetByNameRequest {
  @ApiProperty({ example: 'Porro laudantium.' })
  name: string;
}

export class FindOneResponse extends BoilerParts {}
