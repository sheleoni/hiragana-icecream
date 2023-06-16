if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express');
const app = express();
const {MongoClient, ObjectId} = require('mongodb');
const cors = require('cors');

const port = process.env.PORT || process.env.BACKEND_PORT;
const uri = process.env.DB_CONNECTION_STRING;
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri);

const sampleIceCreamScoopData = [
    {
        "name": "うさぎ",
        "imgURL": "https://res.cloudinary.com/dd1dw34dc/image/upload/v1684249747/hiragana_game/icecream_scoops/%E3%81%86%E3%81%95%E3%81%8D%E3%82%99_gjhohn.png"
    },
    {
        "name": "えび",
        "imgURL": "https://res.cloudinary.com/dd1dw34dc/image/upload/v1684249748/hiragana_game/icecream_scoops/%E3%81%88%E3%81%B2%E3%82%99_nozshj.png"
    }
]

app.use(express.json());
app.use(cors());

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

    const ObjectId = require('mongodb').ObjectId;

    app.post('/setIceCreamScoop', (req, res) => {
        // Access the ice cream scoop data sent from the frontend
        const iceCreamScoopData = req.body.iceCreamScoops;

        // Find the document and update it
        collection.findOneAndUpdate(
            { _id: new ObjectId(process.env.SAMPLE_OBJ_ID) },
            { $set: { iceCreamScoop: iceCreamScoopData } },
            { returnOriginal: false }  // This option returns the updated document
        )
            .then(result => {
                res.json({score: result.value});  // result.value contains the updated document
            })
            .catch(error => {
                console.error('Failed to submit icecream scoops:', error);
                res.status(500).json({error: 'Failed to submit icecream scoops'});
            });
    });

    app.post('/setTideLevel', (req, res) => {
        // Access the ice cream scoop data sent from the frontend
        const tideLevelData = req.body.tideLevel;

        // Find the document and update it
        collection.findOneAndUpdate(
            { _id: new ObjectId(process.env.SAMPLE_OBJ_ID) },
            { $set: { tideLevel: tideLevelData } },
            { returnOriginal: false }  // This option returns the updated document
        )
            .then(result => {
                res.json({score: result.value});  // result.value contains the updated document
            })
            .catch(error => {
                console.error('Failed to submit tide level data:', error);
                res.status(500).json({error: 'Failed to submit tide level data'});
            });
    });


    app.post('/setCharacterScore', (req, res) => {
        // Assume this is your score data
        const characterScoreData = req.body.characterScore;

        // Find the document and update it
        collection.findOneAndUpdate(
            { _id: new ObjectId(process.env.SAMPLE_OBJ_ID) },
            { $set: { characterScores: characterScoreData } },
            { returnOriginal: false }  // This option returns the updated document
        )
            .then(result => {
                res.json({score: result.value});  // result.value contains the updated document
            })
            .catch(error => {
                console.error('Failed to retrieve score:', error);
                res.status(500).json({error: 'Failed to retrieve score'});
            });
    });


    app.get('/getCharacterScore', (req, res) => {
        collection.findOne({_id: ObjectId(process.env.SAMPLE_OBJ_ID)})
            .then(result => {
                res.json({score: result});
            })
            .catch(error => {
                console.error('Failed to retrieve score:', error);
                res.status(500).json({error: 'Failed to retrieve score'});
            });
    });

    app.get('/getIceCreamStack', (req, res) => {
        collection.findOne({_id: ObjectId(process.env.SAMPLE_OBJ_ID)})
            .then(result => {
                if(result.iceCreamScoops){
                    res.json({iceCreamScoops: result.iceCreamScoops});
                } else {
                    throw new Error('Failed to retrieve ice cream scoops');
                }
            })
            .catch(error => {
                console.error('Failed to retrieve ice cream scoops:', error);
                res.status(500).json({error: 'Failed to retrieve ice cream scoops'});
            });
    });


    app.get('/getTide', (req, res) => {
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
                console.log('Retrieved record:', result);
                res.json({message: 'Retrieved record', data: result});
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
