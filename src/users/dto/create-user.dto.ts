import { IsEmail, IsNotEmpty } from 'class-validator';

//data transfer object
export class CreateUserDto {
  @IsEmail(
    {},
    {
      message: 'Email không được để trống',
    },
  )
  @IsNotEmpty({
    message: 'Email không được để trống',
  })
  email: string;

  @IsNotEmpty({
    message: 'Pasword không được để trống',
  })
  password: string;

  name: string;
  address: string;
}
