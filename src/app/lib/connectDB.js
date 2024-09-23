const { MongoClient, ServerApiVersion } = require('mongodb');

export const connectDB = async ()=>{

let db;
if(db) {
    return db;
};

try {
    const uri =`mongodb+srv://${process.env.mongoDB_user}:${process.env.mongoDB_pass}@cluster0.ngsjczb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

      db = client.db("quickBites")
    return db;
} catch (error) {
    console.log(error);
}


}