import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop({ required: true, type: String, })
    name: String

    @Prop({ required: true, type: Array })
    tags: Array<String>

    @Prop({ required: true, type: Types.ObjectId, ref: "User" })
    creator: String

    @Prop({ required: true, type: String })
    extra: String
}

export const CategorySchema = SchemaFactory.createForClass(Category)


