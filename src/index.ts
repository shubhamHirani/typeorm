import "reflect-metadata";
import {createConnection} from "typeorm";
import {Client} from "./entity/User";
import {Banker} from './entity/Banker'
import { Transaction } from './entity/Transaction';
import {CreateUser, DeleteUser, findAverageBalance, FindMaxBalance, FindMinBalance, findSumBalance, UpdateUser} from './migration/Client'
import { CreateBanker } from './migration/Banker'
import { CreateTransaction } from "./migration/Transaction";
import {Connection} from './migration/connection' 

createConnection({
    type:'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: undefined,
    database: 'banking',
    entities : [Client, Banker, Transaction],
    synchronize: true,
    logging: false
}).then(async connection => {

    console.log("database connected.........")
    // CreateTransaction()
    // CreateBanker()

    // Connection()

    // DeleteUser()
    // CreateUser()
    // UpdateUser()
    // FindMaxBalance()
    // FindMinBalance()
    // findAverageBalance()
    findSumBalance()
  
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(Client);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
