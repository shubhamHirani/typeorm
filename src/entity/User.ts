
import {Entity, BaseEntity, PrimaryGeneratedColumn,Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany} from "typeorm"
import { Banker } from "./Banker"
import { Transaction } from "./Transaction"
import {Person} from './utils/person'

@Entity('client')
export class Client extends Person{ 
        @Column({
            unique: true,
            length: 10
        })
        cardNumber :string

        @Column({
        })
        balance: number

        @Column({
            type:'boolean',
            default: true,
            name: 'active'
        })
        is_active: boolean

        @CreateDateColumn()
        createdAt: Date

        @UpdateDateColumn()
        updatedAt : Date

        @ManyToMany(
            ()=> Banker
        )
        bankers : Banker[]

        @OneToMany(
            ()=> Transaction,
            transaction => transaction.client 
        )
        transaction : Transaction

}