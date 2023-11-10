import { Body, Controller, Delete, Param, Patch, Post, Get, UsePipes, ValidationPipe, BadRequestException, NotFoundException, HttpException } from "@nestjs/common";
import { CreateQuote } from "./dto/create-quote.dto";
import { QuoteServices } from "./quote.services";
import { UpdateQuote } from "./dto/update-quote.dto";
import { StatusEnum } from "./status.enum";


@Controller("quotes")
export class QuoteController {
    constructor(private readonly quoteServices: QuoteServices) {
    }

    @Post()
    @UsePipes(ValidationPipe)
    createQuote(@Body() body: CreateQuote) {
        return this.quoteServices.create(body)
    }


    @Patch(':id')
    @UsePipes(ValidationPipe)
    update(@Param("id") id: String, @Body() body: UpdateQuote) {
        return this.quoteServices.update(id, body)
    }

    @Delete(':id')
    async delete(@Param('id') id: String) {
        try {
            const result = await this.quoteServices.delete(id)
            return result
        }
        catch (error) {
            if (error instanceof HttpException) {
                throw new NotFoundException(error.message);
            }
            throw error;


        }
    }


    @Get('/all')
    getAll() {
        return this.quoteServices.getAll()
    }

    @Get(':id')
    get(@Param('id') id: String) {
        console.log("get by id")
        return this.quoteServices.get(id)
    }

    @Get('/all/:status')
    getAllNew(@Param('status') status: StatusEnum) {
        const statusCheck: StatusEnum = StatusEnum[status.toUpperCase()];
        if (!statusCheck) {
            let message = `Allowed Status in Url ${StatusEnum.NEW}, ${StatusEnum.DECLINED} or ${StatusEnum.OPEN}`
            throw new BadRequestException(message);
        }
        return this.quoteServices.getAllByStatus(statusCheck)
    }
}

