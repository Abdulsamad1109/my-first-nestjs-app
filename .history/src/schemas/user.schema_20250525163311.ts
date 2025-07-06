import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class user{

    @Prop()
    username: string
    @p
    email: string

    password: string

    role: string
}