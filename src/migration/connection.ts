import { getRepository } from 'typeorm'
import {Banker} from '../entity/Banker'
import { Client } from '../entity/User'

export const Connection =async() => { 
    /**
     * client id
     *  15
     * 17
     * 18
     * 20
     * 21
     * 22
     * 23
     * bankers id
     * 7
     * 8
     * 9
     */
    const client = await Client.findOne(parseInt('15'))
    const banker = await Banker.findOne(parseInt('8'))

    if(!client || !banker){
        console.log({error : 'client or banker is not available'});
    }
    banker.clients = [
        client]

    await banker.save().then(()=> console.log('banker is connectd to client'))
    .catch(()=> console.log('something went wrong in connection')
    )
}
