import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty({ message: 'Please enter username' })
  @ApiProperty({ description: 'username', example: 'johndoe' })
  username: string;

  @IsNotEmpty({ message: 'Please enter password' })
  @ApiProperty({ description: 'password', example: 'onedotcom' })
  password: string;

  @IsNotEmpty({ message: 'Please select role' })
  @ApiProperty({
    description: 'User role id',
    example: 1,
  })
  role_id: number;
}

export class LoginDto {
  @IsNotEmpty({ message: 'Please enter username' })
  @ApiProperty({ description: 'username', example: 'johndoe' })
  username: string;

  @IsNotEmpty({ message: 'Please enter password' })
  @ApiProperty({ description: 'password', example: 'onedotcom' })
  password: string;
}
