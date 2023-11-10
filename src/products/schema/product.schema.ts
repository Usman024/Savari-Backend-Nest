import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type productDocument = Product & Document


@Schema({ timestamps: true, versionKey: false })
export class Product {
    @Prop({ required: true, type: String })
    title: String

    @Prop({ required: true, type: String })
    description: String

    @Prop({ required: true, type: Number })
    quantity: Number

    @Prop({ required: true, type: Types.ObjectId, ref: "Category" })
    category: String

    @Prop({ required: true, type: Types.ObjectId, ref: "User" })
    creator: String


    @Prop({ required: true, type: Array<String> })
    tags: Array<String>

}

export const ProductSchema = SchemaFactory.createForClass(Product)