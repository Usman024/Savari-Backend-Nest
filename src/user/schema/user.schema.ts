import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type UserDocument = User & Document
@Schema()
export class User {
    @Prop({ required: true, type: String, index: true, trim: true })
    first_name: String

    @Prop({ required: true, type: String })
    last_name: String

    @Prop({ required: true, type: Number })
    age: Number

    @Prop({ required: true, type: String })
    email: String

    @Prop({ required: true, type: Number })
    updated_at: Number

    @Prop({ required: true, type: Number })
    created_at: Number

}

export const UserSchema = SchemaFactory.createForClass(User)