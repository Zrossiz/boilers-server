import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'Ivan123' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Ivan',
        password: 'Ivan123',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'Session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'Ivan123' })
  password: string;
}

export class SignupResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({
    example: '$2b$10$hx6xTAd4AcBK.5whElE8J.SjJlhOx.2H6tOPuYV7T4hwBOywBn7e.',
  })
  password: string;

  @ApiProperty({ example: 'Ivan@mail.ru' })
  email: string;

  @ApiProperty({ example: '2023-09-07T20:32:33.444Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-09-07T20:32:33.444Z' })
  createdAt: string;
}
