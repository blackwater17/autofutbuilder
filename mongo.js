const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "new-db"

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error){
        return console.log("Unable to connect to database.")
    }
    const db = client.db(databaseName)


    db.collection("complete_players").find({player_name: "Lionel Messi"}).toArray((err, players) => {
        console.log(players[2].rating)
    })

})
