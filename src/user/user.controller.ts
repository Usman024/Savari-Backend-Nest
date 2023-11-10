import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUser } from "./dto/createUser.dto";
import { UpdateUser } from "./dto/updateUser.dto";

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get('/:id')
    async getUser(@Param('id') id: String): Promise<CreateUser> {
        const user = await this.userService.getUser(id)
        return user
    }

    @Get()
    async getUsers(@Param('id') id: String): Promise<CreateUser[]> {
        const users = await this.userService.getUsers()
        return users
    }


    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() createUser: CreateUser): Promise<CreateUser> {
        const user = await this.userService.createUser(createUser)
        return user
    }

    @Patch(':id')
    async updateUser(@Param('id') id: String, @Body() updateUser: UpdateUser): Promise<CreateUser> {
        const user = await this.userService.updateUser(id, updateUser)
        return user
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: String): Promise<CreateUser> {
        const user = await this.userService.deleteUSer(id)
        return user
    }

}