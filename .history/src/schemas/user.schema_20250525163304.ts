import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class user{

    @Prop()
    username: string
    pro
    email: string

    password: string

    role: string
}