import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('staffs')
export class Staff {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    subject: string

    @Column({unique: true})
    email: string

    @Column()
    @Exclude()
    password: string

}