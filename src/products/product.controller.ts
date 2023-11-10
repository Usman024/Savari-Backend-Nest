import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./product.services";
import { CreateProduct } from "./dto/create-product.dto";
import { UpdateProduct } from "./dto/update-product.dto";

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    @UsePipes(ValidationPipe)
    createProduct(@Body() body: CreateProduct) {
        return this.productService.create(body)
    }

    @Get(':id')
    getProduct(@Param('id') id: String) {
        return this.productService.getProduct(id)
    }


    @Get('category/:id')
    getAllProductInCategory(@Param('id') id: String) {
        return this.productService.getAllProductInCategory(id)
    }

    @Get('creator/:id')
    getAllProductOfCreator(@Param('id') id: String) {
        return this.productService.getAllProductOfCreator(id)
    }

    @Delete()
    deleteProduct(@Param('id') id: String) {
        return this.productService.deleteProduct(id)
    }

    @Patch(':id')
    updateProduct(@Param('id') id: String, @Body() body: UpdateProduct) {
        return this.productService.updateProduct(id, body)
    }
}