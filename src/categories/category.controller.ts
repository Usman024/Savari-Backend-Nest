import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateCategory } from "./category.dto.ts/create-category.dto";
import { CategoryServices } from "./category.service";
import { Mongoose, Types } from "mongoose";

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryServices: CategoryServices) { }
    @UsePipes(ValidationPipe)
    @Post()
    createCategory(@Body() createCategory: CreateCategory) {
        return this.categoryServices.create(createCategory)
    }

    @Get(':id')
    getCategory(@Param('id') id: String) {
        return this.categoryServices.get(id)
    }

    @Get('myAll/:id')
    getMyAllCategory(@Param('id') id: String) {
        return this.categoryServices.getMyCategories(id)
    }

}