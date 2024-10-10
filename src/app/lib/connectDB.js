const { MongoClient, ServerApiVersion } = require('mongodb');

export const connectDB = async ()=>{

let db;
if(db) {
    return db;
};

try {
  const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGOUSER}:${process.env.NEXT_PUBLIC_MONGOPASS}@cluster0.lel6e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  // const uri = `mongodb+srv://endGameProject:ezyPAm3Cgs6gT0IL@cluster0.lel6e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

      db = client.db("Quick_Bites")
    return db;
} catch (error) {
    console.log(error);
}


}