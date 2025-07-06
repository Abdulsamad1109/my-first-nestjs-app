import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps: true})
export class User{

    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop({unique: true})
    email: string

    @Prop()
    password: string

    @Prop()
    role: string
}

export const UserSchema = SchemaFactory.createForClass(User)