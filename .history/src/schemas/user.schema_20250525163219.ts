import { Schema } from "@nestjs/mongoose";

@Schema()
export class user{
    @prop
    username: string
}