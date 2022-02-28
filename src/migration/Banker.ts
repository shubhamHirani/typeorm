import { getRepository } from 'typeorm'
import {Banker} from '../entity/Banker'

export const CreateBanker =async() => { 
    
    const BankerRepository =await getRepository(Banker)
    const banker =await BankerRepository.create({
        firstName: 'suresh',
        lastName: 'chaudhary',
        email: 'suresh33@gmail.com',
        age: 28,
        employeeNumber: 3460
    })
    await BankerRepository.save(banker)
    .then(async(result)=>{
        console.log(`banker is saved and id of the banker is ${result.id}`)
    })
    .catch(async(err)=> await console.log(`error is encountered ${err}`)
    )
}   