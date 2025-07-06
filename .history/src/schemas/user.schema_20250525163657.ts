import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{

    @Prop({unique: true})
    username: string

    @Prop({unique: true})
    email: string

    password: string

    role: string
}

export const userSchema = SchemaFactory.createForClass(User)