import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    nombre: string;

    @IsEmail()
    email: string;
}