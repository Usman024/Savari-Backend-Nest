import { ArrayMinSize, IS_LENGTH, IsMongoId, IsNotEmpty, IsOptional, IsString, MinLength, isNotEmpty } from "class-validator";

export class CreateCategory {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: String

    @ArrayMinSize(1)
    tags: Array<String>

    // @IsOptional()
    @IsMongoId()
    @IsNotEmpty()
    creator: String

    @IsNotEmpty()
    @IsString()
    extra: String

}