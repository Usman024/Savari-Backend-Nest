import { IsArray, IsMongoId, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateProduct {

    @IsNotEmpty()
    @MinLength(5)
    @IsString()
    title: String


    @IsNotEmpty()
    @MinLength(5)
    @IsString()
    description: String

    @IsNumber()
    @IsNotEmpty()
    quantity: Number

    @IsNotEmpty()
    @IsArray()
    tags: Array<String>

    @IsMongoId()
    @IsNotEmpty()
    category: String

    @IsMongoId()
    @IsNotEmpty()
    creator: String
}