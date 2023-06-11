if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express');
const app = express();
const {MongoClient, ObjectId} = require('mongodb');
const cors = require('cors');

const port = process.env.BACKEND_PORT;
const uri = process.env.DB_CONNECTION_STRING;
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri);

app.use(cors({
    origin: 'https://hiragana-icecream.sheleoni.com',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));app.use(express.json());

// Connect to the MongoDB database
client.connect().then(() => {
    console.log('Connected to MongoDB');

    const collection = client.db(dbName).collection('hiraganaScores');

    app.get('/score', (req, res) => {
        collection.findOne({_id: ObjectId(process.env.SAMPLE_OBJ_ID)})
            .then(result => {
                res.json({score: result});
            })
            .catch(error => {
                console.error('Failed to retrieve score:', error);
                res.status(500).json({error: 'Failed to retrieve score'});
            });
    });

    app.get('/', (req, res) => {
        collection
            .findOne({_id: new ObjectId(process.env.SAMPLE_OBJ_ID)})
            .then(result => {
                console.log('Sample record:', result);
                res.json({message: 'Sample record', data: result});
            })
            .catch(err => {
                console.error('Failed to retrieve record', err);
                res.status(500).send('Failed to retrieve record');
            });
    });

    app.post('/submitScore', async (req, res) => {
        console.log('POST request received at /submitScore');
        console.log('req.body:', req.body);
        const {username, totalScore} = req.body;
        collection.updateOne(
            {nickName: username},
            {
                $set: {totalScore}
            }
        ).then(() => {
            res.json({message: 'Score submitted successfully'});
        }).catch((error) => {
            console.error('Failed to submit score:', error);
            res.status(500).json({error: 'Failed to submit score'});
        });
    });

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});
