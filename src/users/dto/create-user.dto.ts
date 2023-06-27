import { IsString } from 'class-validator';

export class CreateUserDto {
    readonly id: number;
    @IsString()
    readonly name: string;
    @IsString()
    readonly email: string;
    @IsString()
    readonly password: string;
    @IsString()
    readonly role: string;
}
