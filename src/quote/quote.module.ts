import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Quote, QuoteSchema } from "./schema/quote.schema";
import { QuoteController } from "./quote.controller";
import { QuoteServices } from "./quote.services";

@Module({
    imports: [MongooseModule.forFeature([{ name: Quote.name, schema: QuoteSchema }])],
    controllers: [QuoteController],
    providers: [QuoteServices]
}) export class QuoteModule { }