import { IsNotEmpty,  IsNumber,  IsString, Min,} from 'class-validator';


export class CreateMenuDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @IsNumber()
  @Min(0, { message: 'Price must be at least 0' })
  price: number;
}