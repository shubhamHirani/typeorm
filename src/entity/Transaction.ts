import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Client } from './User'

export enum TransactionType{
    DEBIT = 'debited',
    CREDIT = 'credited'
}

@Entity()
export class Transaction extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'enum',
        enum: TransactionType
    })
    type: string

    @Column({
        type: 'numeric'
    })
    amount: number

    @ManyToOne(
        ()=> Client,
        client=> client.transaction
    )
    @JoinColumn({
        name: 'clientId'
    })
    client : Client
}