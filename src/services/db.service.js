const e = require("express");
const mongoDB = require('mongodb').MongoClient;
const url = 'mongodb+srv://Node5DatabaseLesson:Romachamp10@cluster0.vvxdepz.mongodb.net/?retryWrites=true&w=majority';


class DbService {
    async get(data) {
        const connection = await mongoDB.connect(url);

        const db = connection.db('InfoProject');

        let record = await db.collection('weather').find({}).sort({_id: -1}).limit(1);

        let returnData;

        // it works
        await record.forEach(element => {
            returnData = element;
        })

        return returnData;
    }

    async addDataToDb(data) {
        const connection = await mongoDB.connect(url);

        const db = connection.db('InfoProject');

        await db.collection('weather').insertOne(data, function (error, result) {
            if (error) {
                throw error;
            }
        });
    }
}

module.exports = new DbService();