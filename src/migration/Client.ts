import { stringify } from 'querystring'
import {getRepository} from 'typeorm'
import {Client} from '../entity//User'

export const CreateUser = async() =>{
    const userRepository = await getRepository(Client)
    const user = await userRepository.create({
        firstName: 'devam',
        lastName: 'parikh',
        age: 25,
        email: 'parikhdevam72@gmail.com',
        cardNumber: 'devam72361',
        balance: 4364320,
    })
    await userRepository.save(user)
    .then(async(result)=>await console.log('user is saved and id of the user is ' +result.id))
    .catch(async(err)=>await console.log('error encountered '+err)
    )
}

export const DeleteUser =async () => {
    const userRepository = await getRepository(Client)
    const user = await userRepository.delete({
        firstName: 'mahesh'
    })
    .then(async(user)=>{await console.log(`user is deleted`)})
    .catch(async(err)=>{await console.log('error encountered '+err);})
    
}

export const UpdateUser = async()=>{
    const userRepository = await getRepository(Client)
    const UpdatedUser = await userRepository.update({firstName: 'mahesh'},{firstName: 'maheshlal'})
    .then(async()=>{await console.log(`user is updated `)})
    .catch(async(err)=>await console.log(`error encountered ${err}`)
    ) 
}

export const FindUser = async()=>{
    const userRepository = await getRepository(Client)
    const user = userRepository.find({firstName : 'mahesh'})
    .catch((err)=>console.log(err))
    console.log(user);  
}

export const FindMaxBalance =async () => {
    const clientRepository = await getRepository(Client)

    const maxAmount = await clientRepository.createQueryBuilder('client')
    .select('MAX(client.balance)', 'balance')
    .getRawOne()

    console.log(maxAmount);
}

export const FindMinBalance =async () => {
    const clientRepository = await getRepository(Client)

    const minAmount = await clientRepository.createQueryBuilder('client')
    .select('MIN(client.balance)', 'balance')
    .getRawOne()

    console.log(minAmount);
}

export const findAverageBalance =async () => {
    const userRepository = await getRepository(Client)
    const avgAmount = await userRepository.createQueryBuilder('client')
    .select('AVG(client.balance)', 'average')
    .getRawOne()

    console.log(avgAmount);   
}


export const findSumBalance =async () => {
    const userRepository = await getRepository(Client)
    const sum = await userRepository.createQueryBuilder('client')
    .select('SUM(client.balance)', 'average')
    .getRawOne()

    console.log(sum);   
}

