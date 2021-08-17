const express = require("express")


const path = require("path")
const hbs = require("hbs")
// const fs = require("fs")

const mongodb = require("mongodb");
const mongo = require("./mongo-stuff.js")
const request = require("request")
const glob = require("glob")


const views_path = path.join(__dirname, "..") +  "/views/"
const partials_path = path.join(__dirname, "..") +  "/views/partials/"
const public_directory = path.join(__dirname, "..") + "/public/"


/*
const views_path = "\\app\\views\\"
const partials_path = "\\app\\views\\partials\\"
const public_directory = "\\app\\public\\"
*/

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(public_directory))
app.set("view engine", "hbs")

app.set("views", views_path)


hbs.registerPartials(partials_path)



app.get("", (req, res) => {
    res.render("index")
})


app.get("/faq", (req, res) => {
    res.render("faq")
})


app.get("/show-squad/", (req, res) => {
    let formation = req.query.formation
    res.render("formations/" + formation)
})


app.get("/get-player-objs/", (req, res) => {
    let player_IDs = req.query.players.split("-")

    const MongoClient = mongodb.MongoClient
    
    //const connectionURL = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017"
    const connectionURL ="mongodb://127.0.0.1:27017"
    const databaseName = "new-db"
    
    MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
        if (error){
            return console.log("Unable to connect to database.")
        }
    
        const db = client.db(databaseName)
        //const db = client.db("heroku_grz2866t")

        db.collection("complete_players").find().toArray().then((result) => {
            let player_objs = []
            for (player_ID of player_IDs) {
                player_objs.push(result.find((e) => {
                    return e.player_ID.toString() === player_ID.toString()
                }))
            }
            res.send(player_objs)
        })
    })
})




app.get("/get-required-players/", (req, res) => {

    const MongoClient = mongodb.MongoClient
    
    //const connectionURL = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017"
    const connectionURL ="mongodb://127.0.0.1:27017"
    const databaseName = "new-db"
    
    MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
        if (error){
            return console.log("Unable to connect to database.")
        }
    
        const db = client.db(databaseName)
        //const db = client.db("heroku_grz2866t")
        
        db.collection("complete_players").find().toArray().then((result) => {
            res.send(result)
        })
    })
})



app.get("/get-player-stats/:player_ID", (req, res) => {
    var player_ID = decodeURIComponent(req.params.player_ID)

    const MongoClient = mongodb.MongoClient
    
    //const connectionURL =  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017"
    const connectionURL = "mongodb://127.0.0.1:27017"
    const databaseName = "new-db"
    
    MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
        if (error){
            return console.log("Unable to connect to database.")
        }
    
        const db = client.db(databaseName)
        //const db = client.db("heroku_grz2866t")
       
        db.collection("complete_players").find().toArray().then((result) => {
            
            let chosen_player = result.find((e) => {
                return e.player_ID === parseInt(player_ID)
            })

            res.render("show-player", {
                chosen_player:chosen_player
            })

        })
})

})


app.get("*", (req, res) => {
    res.send("\r\n\r\nThis site is still in development process, and this page is probably not yet ready.\r\nYou can message me from reddit: @Blackwater_7")
})





app.listen(port, () => {
    console.log("fifa serveri dinleniyor...")
})


/*

var combine = function(a, min) {
    var fn = function(n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    var all = [];
    for (var i = min; i < a.length; i++) {
        fn(i, a, [], all);
    }
    all.push(a);
    return all;
}


const remove_from_others = (id) => {
    for (item of infoList) {
        if (item.unknown_komsular.includes(id) ) {
            item.unknown_komsular.splice(item.unknown_komsular.indexOf(id), 1)
        }
    }
}


const get_checkable_count = () => {
    var count = 0
    for (item of infoList) {
        if (item.unknown_komsular.length === 0 && item.can_check === true) {
            count++
        }
    }

    return count
}


const get_hoper_count = () => {
    var count = 0
    for (item of infoList) {
        if (item.unknown_komsular.length === 1 && item.can_check === true) {
            count++
        }
    }

    return count
}


const printOnlyPoses = (sortedComb) => {
    var ece = []
    for (obj of sortedComb) {
        ece.push(obj.pos_name)
    }

    console.log(ece)
    console.log("\n")

}




var infoList = [
    {
        id: 0,
        default_komsular: [2,3,4],
        can_check:false,
        pos_name: "gk",
    },

    {
        id: 1,
        default_komsular: [2, 6],
        can_check:false,
        pos_name: "lb",

    },

    {
        id: 2,
        default_komsular: [1,3,0,6],
        can_check:false,
        pos_name: "cb1",

    },

    {
        id: 3,
        default_komsular: [7,2,4,0],
        can_check:false,
        pos_name: "cb2",

    },

    {
        id: 4,
        default_komsular: [5,3,0,8],
        can_check:false,
        pos_name: "cb3",
    },

    {
        id: 5,
        default_komsular: [4,8],
        can_check:false,
        pos_name: "rb",
    },

    {
        id: 6,
        default_komsular: [1,2,7,9],
        can_check:false,
        pos_name: "cm1",
    },

    {
        id: 7,
        default_komsular: [9,10,6,8,3],
        can_check:false,
        pos_name: "cm2",
    },

    {
        id: 8,
        default_komsular: [10,7,4,5],
        can_check:false,
        pos_name: "cm3",
    },

    {
        id: 9,
        default_komsular: [6,7,10],
        can_check:false,
        pos_name: "st1",
    },

    {
        id: 10,
        default_komsular: [8,7,9],
        can_check:false,
        pos_name: "st2",
    },

]



for (obj of infoList) obj.unknown_komsular = obj.default_komsular


var subsets = combine(infoList, 0);


subsets = subsets.filter((e) => {
    return e.length === 6
})


var comb_with_counts = []

for (comb of subsets) {
    
    var infoList = [
        {
            id: 0,
            default_komsular: [2,3,4],
            can_check:false,
            pos_name: "gk",
        },
    
        {
            id: 1,
            default_komsular: [2, 6],
            can_check:false,
            pos_name: "lb",
    
        },
    
        {
            id: 2,
            default_komsular: [1,3,0,6],
            can_check:false,
            pos_name: "cb1",
    
        },
    
        {
            id: 3,
            default_komsular: [7,2,4,0],
            can_check:false,
            pos_name: "cb2",
    
        },
    
        {
            id: 4,
            default_komsular: [5,3,0,8],
            can_check:false,
            pos_name: "cb3",
        },
    
        {
            id: 5,
            default_komsular: [4,8],
            can_check:false,
            pos_name: "rb",
        },
    
        {
            id: 6,
            default_komsular: [1,2,7,9],
            can_check:false,
            pos_name: "cm1",
        },
    
        {
            id: 7,
            default_komsular: [9,10,6,8,3],
            can_check:false,
            pos_name: "cm2",
        },
    
        {
            id: 8,
            default_komsular: [10,7,4,5],
            can_check:false,
            pos_name: "cm3",
        },
    
        {
            id: 9,
            default_komsular: [6,7,10],
            can_check:false,
            pos_name: "st1",
        },
    
        {
            id: 10,
            default_komsular: [8,7,9],
            can_check:false,
            pos_name: "st2",
        },
    
    ]

    for (obj of infoList) obj.unknown_komsular = obj.default_komsular





    for (spot of comb) {
        var ece = spot.id
        infoList[ece].can_check = true
        remove_from_others(ece)
    }
    

    var checked_count = get_checkable_count()
    var hoper_count = get_hoper_count()
    
    comb_with_counts.push({comb:comb, count:checked_count, hoper_count:hoper_count})

}

comb_with_counts.sort((a, b) => (a.count < b.count) ? 1 : -1)

var max_count = comb_with_counts[0].count

comb_with_counts = comb_with_counts.filter((e) => {
    return e.count === max_count
})

console.log(comb_with_counts)

comb_with_counts.sort((a, b) => (a.hoper_count < b.hoper_count) ? 1 : -1)



var first_six = comb_with_counts[0].comb


console.log("\nAbsolutely guarenteed first 6 are: ")
printOnlyPoses(first_six)


var order = "?"

// hadi diyelim yukardaki orderi otomatik olarak bulduk ...

*/