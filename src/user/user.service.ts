import { Injectable } from "@nestjs/common";
import { CreateUser } from "./dto/createUser.dto";
import { UpdateUser } from "./dto/updateUser.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schema/user.schema";
import { Model } from "mongoose";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModal: Model<User>) { }
    createUser(createUser: CreateUser): any {
        let user: CreateUser = {
            first_name: createUser.first_name,
            last_name: createUser.last_name,
            age: createUser.age,
            email: createUser.email,
            updated_at: new Date().getTime(),
            created_at: new Date().getTime()
        }
        return this.userModal.create(user)

    }

    async getUser(id: String): Promise<CreateUser> {
        return this.userModal.findById(id)

    }

    async getUsers(): Promise<CreateUser[]> {
        return this.userModal.find()

    }


    async deleteUSer(id: String): Promise<CreateUser> {
        return this.userModal.findByIdAndDelete(id)

    }

    async updateUser(id: String, updateUser: UpdateUser): Promise<CreateUser> {
        let user: UpdateUser = {
            first_name: updateUser.first_name,
            last_name: updateUser.last_name,
            age: updateUser.age,
            email: updateUser.email,
            updated_at: new Date().getTime(),
            created_at: updateUser.created_at
        }

        return this.userModal.findByIdAndUpdate(id, user, { new: true })
    }
}

