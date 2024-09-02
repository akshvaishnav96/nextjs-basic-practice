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
        console.log("database connected");
        
  
        db.connection.on("connected",()=>{
            console.log("db connected");
            dbConnected.connected= true
        })

        db.connection.on("error",(error)=>{
            console.log("mongodb connection error : "+error.message);
            process.exit(1)
            
        })
    } catch (error) {
        console.log(error);
        
    }
}