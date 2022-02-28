import { type } from 'os'
import { getRepository } from 'typeorm'
import {Transaction, TransactionType} from '../entity/Transaction'
import { Client } from '../entity/User'

export const CreateTransaction =async() => { 
    
    const client = await Client.findOne(parseInt('23'))
    /**
     * client id
     * 15
     * 17
     * 18
     * 20
     * 21
     * 22
     * 23
    */ 
    if(!client){
        return console.log({message : 'client not exist'});
        
    }
    const TransactionRepository =await getRepository(Transaction)
    const transaction =await TransactionRepository.create({
        type: TransactionType.CREDIT,
        amount: 345680,
        client
    })

   
    await TransactionRepository.save(transaction)
    .then(async(result)=>{
        console.log(`banker is saved and id of the banker is ${result.id}`)
    })
    .catch(async(err)=> await console.log(`error is encountered ${err}`)
    )
    if(transaction.type === TransactionType.DEBIT){
        client.balance = client.balance - transaction.amount
    }else if(transaction.type === TransactionType.CREDIT){
        client.balance = client.balance + transaction.amount
    }

    await client.save().then(()=> console.log('transaction is added successfully'))
    .catch(()=>console.log({error: 'something went wrong'})
    )
}   