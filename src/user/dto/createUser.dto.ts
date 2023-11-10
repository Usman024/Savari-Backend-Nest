import { IsEmail, IsNotEmpty, Min, MinLength } from "class-validator";

export class CreateUser {
    @IsNotEmpty()
    @MinLength(3)
    first_name: String

    @IsNotEmpty()
    @MinLength(3)
    last_name: String

    @Min(18)
    @IsNotEmpty()
    age: Number

    @IsEmail()
    @IsNotEmpty()
    email: String

    updated_at: number


    created_at: number
}