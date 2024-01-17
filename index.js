const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.ktxzlkz.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const divisionDB = client.db("KenunDB").collection("division");
        const districtsDB = client.db("KenunDB").collection("districts");
        const upazilasDB = client.db("KenunDB").collection("upazilas");

        app.get('/division', async (req, res) => {
            const result = await divisionDB.find().toArray();
            res.send(result);
        })
        app.get('/districts/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { division_id: id }
            const result = await districtsDB.find(query).toArray();
            res.send(result);
        })
        app.get('/upazilas/:id', async (req, res) => {
            const id = req.params.id;
            const query = { district_id: id }
            const result = await upazilasDB.find(query).toArray();
            res.send(result);
        })
        app.post('/districts', async (req, res) => {
            const result = await districtsDB.find().toArray();
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('running Server')
})
app.listen(port, () => {
    console.log(`this is the port ${port}`)
})