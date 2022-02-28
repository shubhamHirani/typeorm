
import {Entity, BaseEntity, PrimaryGeneratedColumn,Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable} from "typeorm"
import { Client } from "./User"
import {Person} from './utils/person'

@Entity('banker')
export class Banker extends Person{

        @Column({
            unique: true
        })
        employeeNumber: number

        @CreateDateColumn()
        createdAt: Date

        @UpdateDateColumn()
        updatedAt : Date

        @ManyToMany(
            ()=> Client
        )
        @JoinTable({
            name: 'connected',
            joinColumn: {
                name : 'banker',
                referencedColumnName: 'id'
            },
            inverseJoinColumn : {
                name: 'client',
                referencedColumnName: 'id'
            }
        })
        clients: Client[]

}