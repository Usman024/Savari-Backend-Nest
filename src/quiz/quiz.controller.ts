import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { quizServices } from "./quiz.service";
import { createQuizDto } from "./dto/quiz.dto";

@Controller('/quizzes')
export class quizController {
    constructor(private readonly quizServices: quizServices) { }

    @Get('/:id')
    getQuizById(@Param('id') id: any): Object {
        return this.quizServices.getQuiz(id)
    }

    @Get()
    getQuizzes(): Array<any> {
        return this.quizServices.getQuizzes()
    }

    @UsePipes(ValidationPipe)
    @Post()
    createQuiz(@Body() quiz: createQuizDto): String {
        return this.quizServices.createQuiz(quiz)
    }

    @Delete('/:id')
    deleteQuiz(@Param('id') id: any): Array<any> {
        return this.quizServices.deleteQuiz(id)
    }
}