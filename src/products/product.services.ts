import { Injectable } from "@nestjs/common";
import { UpdateProduct } from "./dto/update-product.dto";
import { CreateProduct } from "./dto/create-product.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./schema/product.schema";
import { Model } from "mongoose";

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private modal: Model<Product>) { }
    create(body: CreateProduct) {
        return this.modal.create(body)
    }

    getProduct(id: String) {
        return this.modal.findById(id).populate(['category'])
    }

    getAllProductInCategory(categoryId: String) {
        return this.modal.find({ category: categoryId }).populate([{
            path: "category",
            select: ['name', 'tags']
        }])
    }

    getAllProductOfCreator(creatorId: String) {
        return this.modal.find({ creator: creatorId }).populate([{
            path: 'category',
            select: ['name'],
        }])
    }

    deleteProduct(id: String) {
        return this.modal.findByIdAndDelete(id)
    }

    updateProduct(id: String, body: UpdateProduct) {
        return this.modal.findByIdAndUpdate(id, body)
    }

}