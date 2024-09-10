import mongoose from "mongoose";

const dbConnected = {
    connected : false
}

const {MONGODB_URL,MONGODB_DATABASE} = process.env
export default async function dbConn(){
    try {
        if(dbConnected.connected){
           console.log("database already connected");
           
           return 
        }
        const db = await mongoose.connect(`${MONGODB_URL}${MONGODB_DATABASE}`)
        dbConnected.connected= true
        
  

    } catch (error) {
        console.log(error);
        
    }
}