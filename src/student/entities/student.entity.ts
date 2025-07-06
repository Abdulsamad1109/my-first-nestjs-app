import { Exclude } from "class-transformer";
import { Role } from "src/auth/roles.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('students')
export class Student {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({unique: true})
    email: string

    @Column()
    @Exclude()
    password: string

    @Column( {type: "enum", enum: Role, array: true, default: [Role.STUDENT] }  )
    roles: Role[]
}