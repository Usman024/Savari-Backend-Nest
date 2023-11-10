import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CategoryServices } from "./category.service";
import { MongooseModule } from "@nestjs/mongoose";
import { CategorySchema, Category } from "./category.schema.ts/category.schema";


@Module({
    imports: [MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])],
    providers: [CategoryServices],
    controllers: [CategoryController]
})

export class CategoryModule { }