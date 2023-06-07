import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    readonly id: number;
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    @IsNotEmpty()
    @IsString()
    readonly email: string;
    @IsNotEmpty()
    @IsString()
    readonly password: string;
    @IsNotEmpty()
    @IsString()
    readonly role: string;
}
