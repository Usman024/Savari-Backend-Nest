import { Module } from "@nestjs/common";
import { quizServices } from "./quiz.service";
import { quizController } from "./quiz.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Quiz, quizSchema } from "./schema/quiz.schema";


@Module({
    imports: [MongooseModule.forFeature([{ name: Quiz.name, schema: quizSchema }])],
    controllers: [quizController],
    providers: [quizServices]
})

export class quizModule { }