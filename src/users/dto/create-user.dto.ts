import { IsString, IsEmail, MinLength, MaxLength, Matches, IsBoolean, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3, { message: 'Username must be at least 3 characters long' })
  @MaxLength(20, { message: 'Username must not exceed 20 characters' })
  readonly username: string;

  @IsEmail({}, { message: 'Invalid email format' })
  readonly email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @MaxLength(20, { message: 'Password must not exceed 20 characters' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, {
    message: 'Password must contain at least one letter, one number, and be at least 8 characters long',
  })
  readonly password: string;

  @IsBoolean()
  @IsOptional() // Eğer gönderilmezse, varsayılan olarak `false` kabul edilecek
  readonly isAdmin?: boolean;
}
