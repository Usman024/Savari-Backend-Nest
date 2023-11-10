import { IsEmail, IsNotEmpty, Length, isNotEmpty } from 'class-validator';

export class createQuizDto {

    @Length(1, 10)
    @IsNotEmpty()
    id: String

    @IsNotEmpty()
    @Length(3, 255)
    title: String
}