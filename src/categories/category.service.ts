import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose";
import { Category, CategoryDocument } from "./category.schema.ts/category.schema";
import { Model } from "mongoose";
import { CreateCategory } from "./category.dto.ts/create-category.dto";
import { UpdateCategory } from "./category.dto.ts/update-category.dto";

@Injectable()
export class CategoryServices {
    constructor(
        @InjectModel(Category.name) private readonly model: Model<CategoryDocument>
    ) { }

    async create(createCategorydto: CreateCategory) {
        console.log("this is here", createCategorydto)

        let category = await (await this.model.create(createCategorydto)).save()
        return category
    }

    update(id: String, updateCategorydto: UpdateCategory) {
        return this.model.findByIdAndUpdate(id, updateCategorydto, { new: true })
    }

    get(id: String) {
        return this.model.findById(id).populate("creator")
    }

    getMyCategories(id: any) {
        return this.model.find({ creator: id }).populate('creator')
    }

    delete() { }

}