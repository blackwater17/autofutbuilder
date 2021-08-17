const urlParams = new URLSearchParams(window.location.search);

const formation = urlParams.get("formation")
const player_ids = urlParams.get("players").split("-")
const body = document.querySelector("body")
const squad_area = document.querySelector("#SQUAD-AREA")
const loading_img = document.querySelector(".loading-img")
const header = document.querySelector("header")


const get_squad_players = () => {
    let url = window.location.href.replace("show-squad", "get-player-objs")
    let players = fetch(url).then((res) => { return res.json()})        

    return players
}


var my_squad = {squad:[]}

get_squad_players().then((player_objects) => {

    my_squad.squad = player_objects
    var sq = my_squad.squad

    switch(formation) {

        // inOrder = [ sq[0], sq[1], sq[2], sq[3], sq[4], sq[5], sq[6], sq[7], sq[8], sq[9], sq[10] ]  //DEFAULT

        case "3-1-4-2":
            inOrder = [ sq[0], sq[1], sq[2], sq[3], sq[5], sq[7], sq[4], sq[8], sq[6], sq[9], sq[10] ]  //3142
            break

        case "3-4-1-2":
            inOrder = [ sq[0], sq[1], sq[2], sq[3], sq[4], sq[6], sq[7], sq[5], sq[8], sq[9], sq[10] ]  //3412
            break

        case "3-4-2-1":
            inOrder = [ sq[0], sq[1], sq[2], sq[3], sq[4], sq[6], sq[7], sq[5], sq[8], sq[10], sq[9] ]  //3421
            break

        case "3-4-3":
            inOrder = [ sq[10], sq[8], sq[7], sq[9], sq[0], sq[5], sq[6], sq[4], sq[1], sq[2], sq[3] ]  //343
            break

        case "4-1-2-1-2":
            inOrder = [ sq[0], sq[3], sq[1], sq[2], sq[6], sq[4], sq[5], sq[7], sq[8], sq[9], sq[10] ]  //41212
            break

        case "4-1-2-1-2 (2)":
            inOrder = [ sq[0], sq[3], sq[1], sq[2], sq[6], sq[4], sq[5], sq[7], sq[8], sq[9], sq[10] ]  //41212 (2)
            break

        case "4-1-3-2":
            inOrder = [ sq[0], sq[3], sq[1], sq[2], sq[6], sq[4], sq[5], sq[7], sq[8], sq[9], sq[10] ]  //4132
            break

        case "4-1-4-1":
            inOrder = [ sq[0], sq[3], sq[1], sq[2], sq[10], sq[4], sq[5], sq[7], sq[8], sq[9], sq[6] ] 
            break

        case "4-2-3-1":
            inOrder = [ sq[10], sq[6], sq[7], sq[9], sq[8], sq[4], sq[5], sq[1], sq[2], sq[3], sq[0] ] 
            break

        case "4-2-3-1 (2)":
            inOrder = [ sq[0], sq[4], sq[1], sq[2], sq[10], sq[5], sq[3], sq[9], sq[8], sq[6], sq[7] ]
            break

        case "4-2-2-2":
            inOrder =  [ sq[0], sq[3], sq[1], sq[2], sq[10], sq[5], sq[7], sq[4], sq[9], sq[6], sq[8] ]  
            break

        case "4-4-2":
            inOrder =  [ sq[0], sq[3], sq[1], sq[2], sq[10], sq[4], sq[5], sq[7], sq[9], sq[6], sq[8] ]  
            break

        case "4-4-2 (2)":
            inOrder =  [ sq[0], sq[3], sq[1], sq[2], sq[10], sq[4], sq[5], sq[7], sq[9], sq[6], sq[8] ]  
            break

        case "4-2-4":
            inOrder =  [ sq[0], sq[4], sq[1], sq[2], sq[10], sq[3], sq[7], sq[5], sq[6], sq[8], sq[9] ]
            break

        case "4-3-1-2":
            inOrder = [ sq[0], sq[3], sq[1], sq[2], sq[10], sq[4], sq[5], sq[9], sq[7], sq[6], sq[8] ] 
            break

        case "4-3-2-1":
            inOrder = [ sq[10], sq[6], sq[7], sq[8], sq[9], sq[3], sq[4], sq[5], sq[0], sq[1], sq[2] ]   
            break

        case "4-3-3":
            inOrder = [ sq[0], sq[4], sq[1], sq[2], sq[5], sq[6], sq[3], sq[7], sq[9], sq[8], sq[10] ]    
            break

        case "4-3-3 (2)":
            inOrder = [ sq[0], sq[4], sq[1], sq[2], sq[5], sq[6], sq[3], sq[7], sq[8], sq[9], sq[10] ]    
            break

        case "4-3-3 (3)":
            inOrder = [ sq[10], sq[6], sq[7], sq[8], sq[9], sq[0], sq[3], sq[5], sq[1], sq[2], sq[4] ]    
            break

        case "4-3-3 (4)":
            inOrder = [ sq[0], sq[3], sq[1], sq[2], sq[9], sq[4], sq[6], sq[8], sq[5], sq[7], sq[10] ]    
            break

        case "4-3-3 (5)":
            inOrder = [ sq[0], sq[4], sq[1], sq[2], sq[5], sq[6], sq[3], sq[9], sq[7], sq[8], sq[10] ]    
            break

        case "4-4-1-1":
            inOrder = [ sq[0], sq[3], sq[1], sq[2], sq[9], sq[5], sq[4], sq[8], sq[10], sq[7], sq[6] ]    
            break

        case "4-4-1-1 (2)":
            inOrder = [ sq[0], sq[3], sq[1], sq[2], sq[9], sq[5], sq[4], sq[8], sq[10], sq[7], sq[6] ]    
            break

        case "4-5-1":
            inOrder = [ sq[0], sq[4], sq[1], sq[2], sq[5], sq[6], sq[3], sq[7], sq[8], sq[9], sq[10] ]    
            break

        case "4-5-1 (2)":
            inOrder = [ sq[7], sq[0], sq[2], sq[6], sq[9], sq[1], sq[3], sq[5], sq[8], sq[10], sq[4] ]    
            break

        case "5-2-1-2":
            inOrder = [ sq[0], sq[4], sq[1], sq[2], sq[3], sq[5], sq[6], sq[7], sq[8], sq[9], sq[10] ]    
            break

        case "5-2-2-1":
            inOrder = [ sq[0], sq[4], sq[1], sq[2], sq[3], sq[5], sq[6], sq[7], sq[8], sq[9], sq[10] ]    
            break

        case "5-3-2":
            inOrder = [ sq[4], sq[1], sq[2], sq[3], sq[5], sq[10], sq[0], sq[6], sq[9], sq[7], sq[8] ]    
            break

        case "5-4-1":
            inOrder = [ sq[0], sq[4], sq[1], sq[2], sq[3], sq[5], sq[6], sq[7], sq[8], sq[9], sq[10] ]    
            break

        case "3-5-2":
            inOrder = [ sq[10], sq[7], sq[8], sq[9], sq[3], sq[5], sq[6], sq[4], sq[2], sq[0], sq[1] ]  //352
            break
    }


    my_squad.squad = inOrder

    var i=0

    while(i<11){
        let current_player = my_squad.squad[i]

        document.querySelectorAll(".player-name")[i].innerHTML = my_squad.squad[i].card_name.toUpperCase();
        document.querySelectorAll(".rating")[i].innerHTML = my_squad.squad[i].rating;
        document.querySelectorAll(".position")[i].innerHTML = my_squad.squad[i].position;

        if(current_player.position != "GK"){
            document.querySelectorAll(".pace span")[i].innerHTML = current_player.pace;
            document.querySelectorAll(".shooting span")[i].innerHTML = my_squad.squad[i].shooting;
            document.querySelectorAll(".passing span")[i].innerHTML = my_squad.squad[i].passing;
            document.querySelectorAll(".dribbling span")[i].innerHTML = my_squad.squad[i].dribbling;
            document.querySelectorAll(".defending span")[i].innerHTML = my_squad.squad[i].defending;
            document.querySelectorAll(".physicality span")[i].innerHTML = my_squad.squad[i].physicality;
        }
        else{
            document.querySelectorAll(".pace span")[i].innerHTML = current_player.diving;
            document.querySelectorAll(".shooting span")[i].innerHTML = my_squad.squad[i].handling;
            document.querySelectorAll(".passing span")[i].innerHTML = my_squad.squad[i].kicking;
            document.querySelectorAll(".dribbling span")[i].innerHTML = my_squad.squad[i].reflexes;
            document.querySelectorAll(".defending span")[i].innerHTML = my_squad.squad[i].speed;
            document.querySelectorAll(".physicality span")[i].innerHTML = my_squad.squad[i].positioning_base;
        }


        let trimmed_nation_name = my_squad.squad[i].nationality.trim()
        let trimmed_club_name = my_squad.squad[i].club.trim()
        let pl_ID = my_squad.squad[i].player_ID

        set_box_design(current_player, document.querySelectorAll(".player-box")[i])

        document.querySelectorAll(".player-face")[i].href = "/get-player-stats/" + my_squad.squad[i].player_ID
        //document.querySelectorAll(".player-face")[i].href = "http://127.0.0.1:3000/get-player-stats/" + my_squad.squad[i].player_ID
        document.querySelectorAll(".player-face")[i].style.backgroundImage = "url(\"" + "/img/faces/" + pl_ID.toString() + ".png" + "\")"
        document.querySelectorAll(".nation")[i].style.backgroundImage = "url(\"" + "/img/nations/" + trimmed_nation_name + ".png" + "\")"
        document.querySelectorAll(".club")[i].style.backgroundImage = "url(\"" + "/img/clubs/" + trimmed_club_name + ".png" + "\")"

        i+=1;
    }


    document.querySelectorAll(".player-face").forEach((e) => {

        var tmp = document.createElement("img")
        var img_ = e.style.backgroundImage
        var img_url = ("/img" + img_.split("/img")[1].replace("\")", ""))
        tmp.src = img_url


        tmp.onload = function() {
            var width = this.naturalWidth;

            if (width < 200) {         
                e.style.backgroundSize = "151%"
                e.style.backgroundPosition = "center"
                e.style.right = "30px"
                e.style.bottom = "111px"

            }

            else if (width < 260) {         
                e.style.backgroundSize = "178%"
                // e.style.backgroundPosition = "center"
                e.style.right = "35px"
                e.style.bottom = "110px"

            }

        }

        // yukarda bazı kartların yamuk durmasını duzelttim, NORMAL oyuncular için.

    })





    squad_area.style.display = "block"
    loading_img.style.display = "none"
    header.style.display = "block"
    // body.style.backgroundImage = "url(\"/img/oth/spotlight.png\")"

    body.style.backgroundColor = "#1b1f21";

})





const set_box_design = (player_obj, box_div) => {
    let rev = player_obj.revision

    if(rev === "Normal" || rev === "Rare"){
        if(player_obj.rating > 74) {
            box_div.style.backgroundImage = "url(\"" + "/img/cards/Gold Rare.png" + "\")"
            box_div.style.color = "black"
        }

        else if(player_obj.rating < 75 && player_obj.rating > 64){
            box_div.style.backgroundImage = "url(\"" + "/img/cards/Silver Rare.png" + "\")"
            box_div.style.color = "black"
        }

        else{
            box_div.style.backgroundImage = "url(\"" + "/img/cards/Bronze Rare.png" + "\")"
            box_div.style.color = "black"
        }

    }

    else if(rev === "IF" || rev == "SIF" || rev == "TIF" || rev == "FIF"){
        if(player_obj.rating > 74) {
            box_div.style.backgroundImage = "url(\"" + "/img/cards/Gold IF.png" + "\")"
            box_div.style.color = "#FFFF00"
        }

        else if(player_obj.rating < 75 && player_obj.rating > 64){
            box_div.style.backgroundImage = "url(\"" + "/img/cards/Silver IF.png" + "\")"
            box_div.style.color = "#DADADA"
        }

        else{
            box_div.style.backgroundImage = "url(\"" + "/img/cards/Bronze IF.png" + "\")"
            box_div.style.color = "#DADADA"
        }
    }

    else if(rev ===  "TOTY"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/TOTY.png" + "\")"
        box_div.style.color = "#FFFF00"
    }

    else if(rev ===  "Icon"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Icon.png" + "\")"
        box_div.style.color = "#565800"
    }

    else if(rev ===  "FUT Birthday"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/FUT Birthday.png" + "\")"
        box_div.style.color = "white"
    }

    else if(rev === "Libertadores"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Libertadores.png" + "\")"
        box_div.style.color = "white";
    }

    else if(rev ===  "Sudamericana"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Sudamericana.png" + "\")"
    }

    else if(rev === "UEL LIVE") {
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Europa SBC.png" + "\")"
        box_div.style.color = "black"
    }

    else if(rev === "Europa MOTM") {
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Europa MOTM.png" + "\")"
        box_div.style.color = "white"
    }

    else if(rev === "Summer Heat" || rev === "Summer Heat SBC") {
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Summer Heat.png" + "\")"
        box_div.style.color = "#CF0234"
    }

    else if(rev ===  "ShapeShifters" || rev === "ShapeShifters SBC"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Shape Shifter.png" + "\")"
    }

    else if(rev ===  "Winter Refresh"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Winter Refresh.png" + "\")"
        box_div.style.color = "#00FFF0"
    }

    else if(rev ===  "TOTW Moments"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Moments.png" + "\")"
        box_div.style.color = "#FFFF00"
    }

    else if(rev ===  "MOTM"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/MOTM.png" + "\")"
        box_div.style.color = "white"
    }

    else if(rev ===  "Future Stars"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Future Stars.png" + "\")"
        box_div.style.color = "#FFFF00"
    }

    else if(rev ===  "Headliners" || rev === "Headliners SBC"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Headliners.png" + "\")"
    }

    else if(rev ===  "FUTmas SBC"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/FUTMAS.png" + "\")"
        box_div.style.color = "#FFFF00"
    }

    else if(rev ===  "TOTY Nominee"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/TOTY Nominee.png" + "\")"
        box_div.style.color = "#FFFF00"
    }

    else if(rev ===  "Halloween" || rev === "Halloween SBC"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Halloween.png" + "\")"
        box_div.style.color = "#FF6100"
    }

    else if(rev ===  "CL"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Champions League Rare.png" + "\")"
        box_div.style.color = "#FF6100"
    }

    else if(rev ===  "CL MOTM"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/UCL MOTM.png" + "\")"
    }

    else if(rev ===  "UCL LIVE" || rev === "UCL LIVE SBC"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Champions League Live.png" + "\")"
        box_div.style.color = "#6689FF"
    }

    else if(rev ===  "CL TOTT" || rev === "CL TOTT SBC"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/CL TOTT.png" + "\")"
    }

    else if(rev ===  "OTW"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Ones To Watch.png" + "\")"
        box_div.style.color = "#FF3200"
    }

    else if(rev ===  "Premium SBC"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Premium SBC.png" + "\")"
        box_div.style.color = "#00C9FF"
    }

    else if(rev ===  "SBC"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/SBC.png" + "\")"
        box_div.style.color = "#00C9FF"
    }

    else if(rev ===  "Hero"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Heroes.png" + "\")"
        box_div.style.color = "#FFFF00"
    }

    else if(rev ===  "TOTY Flashback SBC" || rev === "Flashback SBC"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Flashback SBC.png" + "\")"
        box_div.style.color = "#FCFF8E"
    }

    else if(rev ===  "PL POTM"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/POTM EPL.png" + "\")"
        box_div.style.color = "#26A6FF"
    }

    else if(rev ===  "Bundes POTM"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/POTM Bundesliga.png" + "\")"
    }

    else if(rev ===  "MLS POTM"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/POTM MLS.png" + "\")"
    }

    else if(rev ===  "Ligue 1 POTM"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/POTM Ligue 1.png" + "\")"
        box_div.style.color = "#C1FF00"
    }

    else if(rev ===  "LaLiga POTM SBC"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/POTM La Liga.png" + "\")"
        box_div.style.color = "#5CB3CF"
    }

    else if(rev === "Libertadores KO Team"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Libertadores KO Team.png" + "\")"
        box_div.style.color = "white"
    }

    else if(rev ===  "Objective Special"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Objective - League Player.png" + "\")"
        box_div.style.color = "#FF3487"
    }

    else if(rev ===  "Objectives" || rev === ""){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Objective - Storyline.png" + "\")"
        box_div.style.color = "#FFFF00"
    }

    else if(rev ===  "Players Moments" || rev === "Player Moments SBC" || rev === "Player Moments Obj"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Player Moments.png" + "\")"
        box_div.style.color = "#FFFF00"
    }

    else if(rev ===  "TOTS" || rev === "TOTS SBC" || rev === "TOTS Obj" || rev === "TOTS-Obj"){
        box_div.style.backgroundImage = "url(\"" + "/img/cards/TOTS.png" + "\")"
        box_div.style.color = "#FFFF00"
    }

    else if(rev === "TOTS Moments Obj") {
        box_div.style.backgroundImage = "url(\"" + "/img/cards/TOTS Moments Obj.png" + "\")"
        box_div.style.color = "#FFFF00"
    }

    else{
        box_div.style.backgroundImage = "url(\"" + "/img/cards/Sudamericana.png" + "\")"
        box_div.style.color = "red"
    }

}

