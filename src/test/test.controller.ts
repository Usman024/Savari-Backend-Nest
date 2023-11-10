import { Controller, Get } from "@nestjs/common";
import { TestService } from "./test.service";

@Controller('/test')
export class TestController {
    constructor(private readonly testService: TestService) { }

    @Get()
    getHello(): String {
        return this.testService.getHelloTest()
    }
}