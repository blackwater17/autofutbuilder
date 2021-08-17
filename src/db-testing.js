const {MongoClient, ObjectID} = require("mongodb")


const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "new-db"


const isSamePlayer = (p1, p2) => {
    if(!p1.club === "Icons" || !p2.club === "Icons") return false

    if(p1.player_name === p2.player_name
    && p1.card_name === p1.card_name && p1.age === p2.age && p1.foot === p2.foot) return true
    
    else return false
}

const hasWrongBase = (p1, p2) => {
    if(p1.base_card_id != p2.base_card_id) return true
    else return false
}






MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error){
        return console.log("Unable to connect to database.")
    }



    const db = client.db(databaseName)

    const update_someone = (player_id, new_base_card_id) => {
        let update_promise = db.collection("complete_players").updateOne({
            _id: new ObjectID(player_id)
        }, {
            $set: {
                base_card_id: new_base_card_id
            }
        })

        update_promise.then((res) => {
        }).catch((error) => {
            console.log(error)
        })
    }


    /*update_someone("5e986bc160ea57104e850464", 420)*/
    
    db.collection("complete_players").find().toArray().then((all_players_list) => {
        let i=all_players_list.length-1
        while(i>=0) {
            let current_player = all_players_list[i]
            console.log(current_player._id)

            i-=1

        }
        console.log("finito")
    })
})


