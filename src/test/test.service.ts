import { Injectable } from "@nestjs/common";

@Injectable()
export class TestService {
    getHelloTest(): String {
        return "hello test string"
    }

}