import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class user{

    @Prop()
    username: string
    @pr
    email: string

    password: string

    role: string
}