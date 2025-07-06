import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class user{

    @Prop({unique: true})
    username: string

    @Prop({unique: true})
    email: string

    password: string

    role: string
}

const 