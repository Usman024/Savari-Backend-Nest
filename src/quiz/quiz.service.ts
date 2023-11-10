import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Quiz } from "./schema/quiz.schema";
import { Model } from "mongoose";

@Injectable()
export class quizServices {
    constructor(@InjectModel(Quiz.name) private quizModel: Model<Quiz>) { }

    quizzes = [
        {
            id: 1,
            title: "quiz 1"
        }, {
            id: 2,
            title: "quiz 2"
        }, {
            id: 3,
            title: "quiz 3"
        }, {
            id: 4,
            title: "quiz 4"
        }, {
            id: 5,
            title: "quiz 5"
        },
    ];


    getQuiz(id: any): Object {
        console.log('in', id, typeof this.quizzes[0].id)
        let quiz = this.quizzes.find((quiz) => id == quiz.id)
        return quiz
    }

    getQuizzes(): Array<any> {
        return this.quizzes
    }

    createQuiz(quiz: any): any {
        const createdCat = new this.quizModel(quiz);
        return createdCat.save();
        // this.quizzes.push(quiz)
    }

    deleteQuiz(id): Array<any> {
        let index = null
        this.quizzes.find((quiz: any, i) => {
            if (id == quiz.id) {
                index = i
            }
        })
        console.log("id", id)
        console.log("index", index)
        if (index != null)
            this.quizzes.splice(index, 1)
        return this.quizzes
    }
}