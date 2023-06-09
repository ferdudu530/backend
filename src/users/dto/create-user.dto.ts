import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    readonly id: number;
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    @IsNotEmpty()
    @IsString()
    readonly password: string;
    @IsNotEmpty()
    @IsString()
    @Length(3, 6)
    readonly role: string;
}
