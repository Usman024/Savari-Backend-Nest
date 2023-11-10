import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type QuizDocument = HydratedDocument<Quiz>

@Schema()
export class Quiz {

    @Prop()
    title: string;

    @Prop()
    id: number;
}

export const quizSchema = SchemaFactory.createForClass(Quiz)