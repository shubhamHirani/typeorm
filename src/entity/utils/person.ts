import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Person extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string;
    
    @Column()
    lastName : string

    @Column()
    age: number

    @Column({
        unique: true
    })
    email: string

}