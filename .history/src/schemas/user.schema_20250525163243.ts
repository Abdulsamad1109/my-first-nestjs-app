import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class user{

    @Prop()
    username: string
    
    email: string
}