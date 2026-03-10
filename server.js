import 'dotenv/config'
import express from 'express'
import { MongoClient } from 'mongodb'

const app = express();
const port = 3001;
//assign the connectio string to a variable
const connectionString = process.env.MONGO_URI;

// create an instance of the client for the initial connection
const client = new MongoClient(connectionString);

app.get('/', async (req, res) => {
    try {
        //connect client to the server
        await client.connect();
        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });
        res.json({ message: "Successfully connected to the database!" })
        console.log("Connected successfully to MongoDB!");
    } catch (error) {
        res.json({ message: "Failed to connect to the database." })
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

})

app.listen(port, () => {
    console.log("server is listening on port :" + port);
})