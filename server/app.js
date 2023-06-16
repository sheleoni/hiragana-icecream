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


    app.get('/setCharacterScore', (req, res) => {
        // Assume this is your score data
        const scoreData = {    // hiragana
            "あ": 1,
            "い": 2,
            "う": 3,
            "え": 0,
            "お": 0,
            "か": 0,
            "が": 0,
            "き": 0,
            "ぎ": 0,
            "く": 0,
            "ぐ": 0,
            "け": 0,
            "げ": 0,
            "こ": 0,
            "ご": 0,
            "さ": 0,
            "ざ": 0,
            "し": 0,
            "じ": 0,
            "す": 0,
            "ず": 0,
            "せ": 0,
            "ぜ": 0,
            "そ": 0,
            "ぞ": 0,
            "た": 0,
            "だ": 0,
            "ち": 0,
            "ぢ": 0,
            // "っ": 0,
            "つ": 0,
            "づ": 0,
            "て": 0,
            "で": 0,
            "と": 0,
            "ど": 0,
            "な": 0,
            "に": 0,
            "ぬ": 0,
            "ね": 0,
            "の": 0,
            "は": 0,
            "ば": 0,
            "ぱ": 0,
            "ひ": 0,
            "び": 0,
            "ぴ": 0,
            "ふ": 0,
            "ぶ": 0,
            "ぷ": 0,
            "へ": 0,
            "べ": 0,
            "ぺ": 0,
            "ほ": 0,
            "ぼ": 0,
            "ぽ": 0,
            "ま": 0,
            "み": 0,
            "む": 0,
            "め": 0,
            "も": 0,
            "や": 0,
            "ゆ": 0,
            "よ": 0,
            "ら": 0,
            "り": 0,
            "る": 0,
            "れ": 0,
            "ろ": 0,
            "わ": 0,
            "ん": 0,

            // katakana
            "ア": 0,
            "イ": 0,
            "ウ": 0,
            "エ": 0,
            "オ": 0,
            "カ": 0,
            "ガ": 0,
            "キ": 0,
            "ギ": 0,
            "ク": 0,
            "グ": 0,
            "ケ": 0,
            "ゲ": 0,
            "コ": 0,
            "ゴ": 0,
            "サ": 0,
            "ザ": 0,
            "シ": 0,
            "ジ": 0,
            "ス": 0,
            "ズ": 0,
            "セ": 0,
            "ゼ": 0,
            "ソ": 0,
            "ゾ": 0,
            "タ": 0,
            "ダ": 0,
            "チ": 0,
            "ヂ": 0,
            // "ッ": 0,
            "ツ": 0,
            "ヅ": 0,
            "テ": 0,
            "デ": 0,
            "ト": 0,
            "ド": 0,
            "ナ": 0,
            "ニ": 0,
            "ヌ": 0,
            "ネ": 0,
            "ノ": 0,
            "ハ": 0,
            "バ": 0,
            "パ": 0,
            "ヒ": 0,
            "ビ": 0,
            "ピ": 0,
            "フ": 0,
            "ブ": 0,
            "プ": 0,
            "ヘ": 0,
            "ベ": 0,
            "ペ": 0,
            "ホ": 0,
            "ボ": 0,
            "ポ": 0,
            "マ": 0,
            "ミ": 0,
            "ム": 0,
            "メ": 0,
            "モ": 0,
            "ヤ": 0,
            "ユ": 0,
            "ヨ": 0,
            "ラ": 0,
            "リ": 0,
            "ル": 0,
            "レ": 0,
            "ロ": 0,
            "ワ": 0,
            "ヰ": 0,
            "ヱ": 0,
            "ヲ": 0,
            "ン": 0}

        // Find the document and update it
        collection.findOneAndUpdate(
            { _id: new ObjectId(process.env.SAMPLE_OBJ_ID) },
            { $set: { characterScores: scoreData } },
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
                res.json({score: result});
            })
            .catch(error => {
                console.error('Failed to retrieve score:', error);
                res.status(500).json({error: 'Failed to retrieve score'});
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
