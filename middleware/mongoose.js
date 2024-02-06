import mongoose from "mongoose";
const connectToDatabase =async ()=>{
  if(mongoose.connections[0].readyState){
   return mongoose.connection.asPromise()
   
  }
  await mongoose.connect('mongodb+srv://ibrahimbajwa1065:ABib381381@cluster0.bathrnt.mongodb.net/ClientInfo', { useNewUrlParser: true, useUnifiedTopology: true })
 
}



export default connectToDatabase;