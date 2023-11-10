import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { quizModule } from './quiz/quiz.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { CategoryModule } from './categories/category.module';
import { ProductModule } from './products/product.module';
import { QuoteModule } from './quote/quote.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".local.env"
    }),
    MongooseModule.forRootAsync(
      {
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          uri: configService.get("MONGO_URI")
        }),
        inject: [ConfigService]
      }
    ),
    TestModule, quizModule, UserModule, CategoryModule, ProductModule, QuoteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
