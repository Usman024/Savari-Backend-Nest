import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Quote } from "./schema/quote.schema";
import { Model } from "mongoose";
import { CreateQuote } from "./dto/create-quote.dto";
import { UpdateQuote } from "./dto/update-quote.dto";
import { StatusEnum } from "./status.enum";

@Injectable()
export class QuoteServices {
    constructor(@InjectModel(Quote.name) private modal: Model<Quote>) { }
    create(body: CreateQuote) {
        return this.modal.create(body)
    }

    update(id: String, body: UpdateQuote) {
        return this.modal.findByIdAndUpdate(id, body, { new: true })
    }

    async delete(id: String) {
        console.log("deleting", id)
        const deletedDocument = await this.modal.findByIdAndDelete(id);

        if (!deletedDocument) {
            throw new HttpException('Document not found or already deleted', HttpStatus.NOT_FOUND);
        }

        return deletedDocument;
    }

    get(id: String) {
        return this.modal.findById(id)
    }

    getAll() {
        return this.modal.find().exec()
    }

    getAllByStatus(status: StatusEnum) {
        return this.modal.find({ status })
    }
}