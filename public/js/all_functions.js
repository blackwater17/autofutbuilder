const submit_filter_button = document.querySelector(".submit-filter")
const cancel_filter_button = document.querySelector(".cancel-filter")
const all_text_inputs = document.querySelectorAll(".text-input-area")
const filter_player_boxes = document.querySelectorAll(".filter-player-box")
const filter_popup = document.querySelector(".filter-popup")
const some_form_area = document.querySelector(".some-form-stuff")
const continue_button = document.querySelector(".continue")
const all_single_squads = document.querySelector(".all-single-squads")
const phase_1 = document.querySelector("#phase-1")
const phase_2 = document.querySelector("#phase-2")
const phase_3 = document.querySelector("#phase-3")
const next_phase_button = document.querySelector("#next-phase")
const icons_toggle = document.querySelector("#icons-toggle")
const mode_toggle = document.querySelector("#mode-toggle")
const nlw_toggle = document.querySelector("#nlw-toggle")
const chem_toggle = document.querySelector("#chem-toggle")
const found_squads_title = document.querySelector(".found-squads-title")
const allow_legends_span = document.querySelector(".allow-legends-span")
const allow_free_mode_span = document.querySelector(".allow-free-mode-span")
const only_nlw_span = document.querySelector(".only-nlw-span")
const allow_7_chem_span = document.querySelector(".allow-7-chem-span")

const sliders = document.querySelectorAll(".slider-0")
const imp_spans = document.querySelectorAll(".demo")
const doll_area = document.querySelector(".doll-area")
const statlar_area = document.querySelector(".statlar-area")
var unknown_squad_area = document.querySelector(".unknown-squad-area")

var device = "desktop"
var device_width = document.documentElement.clientWidth
var device_height = document.documentElement.clientHeight

if (device_width < 480) device = "mobile"


const switch_popup = () => {        
    unknown_squad_area.style.display = "none"
    filter_popup.style.display = "block"
    statlar_area.style.display = "block"

    document.querySelectorAll(".rule-header").forEach((div) => {
        div.style.display = "none"
    })

    next_phase_button.style.display = "none"
    document.querySelector(".simdi-goster").style.display = "none"
      
    window.scrollTo(0, 0);
    
}


const view_doll = () => {
    filter_popup.style.display = "none"
    statlar_area.style.display = "none"
    doll_area.style.display = "block"

    window.scrollTo(0, 0);

}


const show_unknown_squad = () => {
    unknown_squad_area.style.display = "block"
    filter_popup.style.display = "none"

    document.querySelectorAll(".rule-header").forEach((div) => {
        div.style.display = "block"
    })

    next_phase_button.style.display = "block"
    document.querySelector(".simdi-goster").style.display = "inline-block"

    statlar_area.style.display = "none"
    doll_area.style.display = "none"

    window.scrollTo(0, 0);
}









var chosen_stats = []


function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


const get_total_points = () => {
    let total = 0
    document.querySelectorAll(".slider-0").forEach((e) => {
        total+=parseInt(e.value)
    })

    return total
}


const clear_new_inputs = () => {

    document.querySelectorAll(".stat-category").forEach((div) => {
        div.style.backgroundImage = ""
    })

    document.querySelectorAll(".stat").forEach((stat) => {
        stat.style.backgroundColor = ""
        stat.style.border = "1px solid #FFDC00"
        stat.style.color = "white"

        if(stat.className.includes("stat-category")) stat.style.color = "black"


    })

    document.querySelectorAll(".slider-0").forEach((slider) => {
        slider.value = 0
    })

    document.querySelectorAll(".demo").forEach((demo) => {
        demo.innerHTML = 0
    })


}








document.querySelectorAll(".stat").forEach((e) => {

    e.addEventListener("click", () => {
        let stat_name = e.className.split(" ")[1].replace("-b","")
        if (chosen_stats.includes(stat_name)) {
            chosen_stats.splice(chosen_stats.indexOf(stat_name), 1);
            e.style.backgroundColor = ""
            e.style.border = "1px solid #FFDC00"
            e.style.color = "white"

            if(e.className.includes("stat-category")) {
                e.style.color = "black"    
                e.style.backgroundImage = ""
            }
        }

        else {
            e.style.backgroundColor = "#FFDC00"; //sarı yaptık arkayı
            e.style.border = "1px solid #eee"
            e.style.color = "black"
            e.style.backgroundImage = "none"
            chosen_stats.push(stat_name)
        }

    })
}) 



document.querySelector(".go-to-doll").addEventListener("click", () => {


    // simdi default 10 tane yaratacam.

    document.querySelector(".left-cont-container").innerHTML = ""
    document.querySelector(".right-cont-container").innerHTML = ""

    for (let i=0;i<5;i++) {
        document.querySelector(".left-cont-container").innerHTML += "<div class=\"slidecontainer\"><div class=\"stat-title\">STAT_TITLE</div><input type=\"range\" min=\"0\" max=\"26\" value=\"0\" class=\"slider-0\"><p>Effect on player: <span class=\"demo\">0</span></p></div>"
        document.querySelector(".right-cont-container").innerHTML += "<div class=\"slidecontainer\"><div class=\"stat-title\">STAT_TITLE</div><input type=\"range\" min=\"0\" max=\"26\" value=\"0\" class=\"slider-0\"><p>Effect on player: <span class=\"demo\">0</span></p></div>"
        
    }
  
    

    if (chosen_stats.length > 10) alert("You can't select more than 10 stats!")

    let delete_div_count = 10 - chosen_stats.length
    

    let left_del_count = Math.floor(delete_div_count/2)
    let right_del_count = Math.ceil(delete_div_count/2)




    for (let i=0; i<left_del_count; i++) {   
        document.querySelectorAll(".slidecontainer")[0].remove()
    }

    for (let i=0;i<right_del_count;i++) {
        document.querySelectorAll(".slidecontainer")[document.querySelectorAll(".slidecontainer").length-1].remove()
    }



    let i=0
    while (i<chosen_stats.length) {
        document.querySelectorAll(".stat-title")[i].innerHTML = toTitleCase(chosen_stats[i].replace("_", " "))
        i++
    }


    for (let i=0; i<document.querySelectorAll(".slider-0").length; i++) {
  
        document.querySelectorAll(".demo")[i].innerHTML = 0 // Display the default slider value

        document.querySelectorAll(".slider-0")[i].oninput = function() {
            let total_points = get_total_points()
    
            for (let j=0; j<document.querySelectorAll(".slider-0").length; j++) {    
                document.querySelectorAll(".demo")[j].innerHTML = ((document.querySelectorAll(".slider-0")[j].value / total_points) * 100).toFixed(1).toString() + "%"
                                
                window[chosen_stats[j]] = (document.querySelectorAll(".slider-0")[j].value / total_points).toFixed(2)


            }
            
        }

    }

    view_doll()

})







document.querySelector(".go-ez-mode").addEventListener("click", () => {

    for (stat of chosen_stats) {
        //current_filter_player[stat] = 1/chosen_stats.length
        
        for (let i=0;i<chosen_filter_players.length;i++) {
            chosen_filter_players[i][stat] = 1/chosen_stats.length
        }
        
    }


    //window[current_box.id.split("_")[0] + "_max_budget"] = 0 // simdilik sadece 0 olsun, sadece total budget alcaz ilerde
    
    for (let i=0;i<chosen_current_boxes.length;i++) {
        window[chosen_current_boxes[i].id.split("_")[0] + "_max_budget"] = 0
    }


    chosen_stats = []
    chosen_filter_players = []

    //current_box.style.opacity = "1"
    //current_box.filled = true

    for (let i=0; i<chosen_current_boxes.length;i++) {
        chosen_current_boxes[i].style.opacity = "1"
        chosen_current_boxes[i].filled = true
    }


    for (let i=0; i<chosen_current_boxes.length;i++) {
        chosen_current_boxes[i].querySelector("div").textContent = "✓"
        chosen_current_boxes[i].style.color = "#4DFF00"
        chosen_current_boxes[i].querySelector("div").style.color = "#4DFF00"
        chosen_current_boxes[i].querySelector("div").style.fontSize = "85px"

        chosen_current_boxes[i].style.pointerEvents = "none"
        chosen_current_boxes[i].style.opacity = "0.5";
    
 
    }

    document.querySelector(".simdi-goster").style.opacity = "0.5"
    document.querySelector(".simdi-goster").style.cursor = "not-allowed"

    // current_box.querySelector("div").textContent = "✓"
    // current_box.style.color = "#4DFF00"
    // current_box.querySelector("div").style.fontSize = "96px";
 


    clear_new_inputs()
    show_unknown_squad()


})


document.querySelector(".cancel-filtering").addEventListener("click", () => {
    show_unknown_squad()
})






var mode
var isIconMode
var only_nlw
var seven_chem_ok
var phase = 1


var gk_parameters = {}
var lb_parameters = {}
var cb1_parameters = {}
var cb2_parameters = {}
var cb3_parameters = {}
var rb_parameters = {}
var lm1_parameters = {}
var lm2_parameters = {}
var cm1_parameters = {}
var cm2_parameters = {}
var cm3_parameters = {}
var cm4_parameters = {}
var cm5_parameters = {}
var cm6_parameters = {}
var rm1_parameters = {}
var rm2_parameters = {}
var cam1_parameters = {}
var cam2_parameters = {}
var cam3_parameters = {}
var st1_parameters = {}
var st2_parameters = {}


var js_already_loaded = false

const loadjs = () => {      //formation parametreye gerek yok yenide
    // formation change oldugu AN false yapcaz ilerde.
    if (js_already_loaded === true) return false

    var myScript = document.createElement('script');
    //myScript.setAttribute('src', '/js/builders/' + formation + "-builder.js");
    myScript.setAttribute('src', '/js/functional-builder.js');
    //myScript.setAttribute('src', '/js/old-functional.js');
    document.body.appendChild(myScript);

    js_already_loaded = true

    
}


const clear_filter_values = () => {
    all_text_inputs.forEach((text_input) => {     
        text_input.value = 0
    
    })
}







// initialization budget
var gk_max_budget = 0
var lb_max_budget = 0
var cb1_max_budget = 0
var cb2_max_budget = 0
var cb3_max_budget = 0
var rb_max_budget = 0
var lm1_max_budget = 0
var lm2_max_budget = 0
var cm1_max_budget = 0
var cm2_max_budget = 0
var cm3_max_budget = 0
var cm4_max_budget = 0
var cm5_max_budget = 0
var cm6_max_budget = 0
var rm1_max_budget = 0
var rm2_max_budget = 0
var cam1_max_budget = 0
var cam2_max_budget = 0
var cam3_max_budget = 0
var st1_max_budget = 0
var st2_max_budget = 0


document.querySelector(".simdi-goster").addEventListener("click", () => {

    if(chosen_filter_players.length === 0) {
        alert("You must highlight at least one player!")
        stopExecuting()
    }

    all_single_squads.style.display = "none"
    
    chosen_stats = []

    document.querySelector("body").style.minHeight = "1500px"
    clear_new_inputs() // tam emin değilim ama hayırlısı

    switch_popup()


})

var chosen_filter_players = []
var chosen_current_boxes = []


filter_player_boxes.forEach((box) => {
    box.filled = false

    box.addEventListener("click", () => {
        

        if (!chosen_filter_players.includes(window[box.id])) {
            //current_filter_player = window[box.id] 
            chosen_filter_players.push(window[box.id])
            //current_box = box // ST1 BOX, GK BOX etc...
            chosen_current_boxes.push(box)

            box.style.opacity = "1"
            box.querySelector("div").style.color = "#FFDC00"
            box.querySelector("div").style.transform = "scale(1.3)"

       
        }

        else {

            var index = chosen_filter_players.indexOf(window[box.id]);
            chosen_filter_players.splice(index, 1);
            
            var index2 = chosen_current_boxes.indexOf(box)
            chosen_current_boxes.splice(index2, 1)

            box.style.opacity = ""
            box.querySelector("div").style.color = ""
            box.querySelector("div").style.transform = ""
        }



        if (chosen_filter_players.length > 0) {
            document.querySelector(".simdi-goster").style.opacity = "1"
            document.querySelector(".simdi-goster").style.cursor = "pointer"
        }

        else {
            document.querySelector(".simdi-goster").style.opacity = "0.5"
            document.querySelector(".simdi-goster").style.cursor = "not-allowed"
        }



        //set_spot_area(current_box.id) SET SPOT AREA GÖZÜKMESİN

        //clear_filter_values()
       

        /*
        if (box.filled === true) {      //yeniden girdigimde yoık olmasın diye

           for(let [key, value] of Object.entries(current_filter_player)) {
                filter_popup.querySelector("."+key + "-b").style.backgroundColor = "#01FF70"
                filter_popup.querySelector("."+key + "-b").style.color = "black"
                chosen_stats.push(key)
            }  

            //document.querySelector("#max-price").value = window[current_box.id.split("_")[0] + "_max_budget"]   //daha once girilen price hatirlamak icin
        }
             */


    })
})





submit_filter_button.addEventListener("click", () => {

    //window[current_box.id.split("_")[0] + "_max_budget"] = parseInt(document.querySelector("#max-price").value) // her spot için kanser max budget ayarlama
    
    
    //window[current_box.id.split("_")[0] + "_max_budget"] = 0 // simdilik sadece 0 olsun, sadece total budget alcaz ilerde
    for (let i=0; i<chosen_current_boxes.length;i++) {
        window[chosen_current_boxes[i].id.split("_")[0] + "_max_budget"] = 0 
    }


    for (stat of chosen_stats) {
        //current_filter_player[stat] = parseFloat(window[stat])
        for (let i=0; i<chosen_filter_players.length; i++) {
            chosen_filter_players[i][stat] = parseFloat(window[stat])
        }
    }

    // bunu yapcam                 current_filter_player[sss] = 1/chosen_stats.length
    // yukardakli calisti gibi ama yeniden stat eklerse alayını alıyo taglarda oldugu gibi





    chosen_stats = []
    chosen_filter_players = []

    // current_box.style.opacity = "1"
    // current_box.filled = true

    for (let i=0; i<chosen_current_boxes.length; i++) {
        chosen_current_boxes[i].style.opacity = "1"
        chosen_current_boxes[i].filled = true
        chosen_current_boxes[i].querySelector("div").style.color = "#4DFF00"
    }
    

    // current_box.querySelector("div").textContent = "✓"
    // current_box.style.color = "#4DFF00"
    // current_box.querySelector("div").style.fontSize = "96px";



    for (let i=0; i<chosen_current_boxes.length;i++) {
        chosen_current_boxes[i].querySelector("div").textContent = "✓"
        chosen_current_boxes[i].style.color = "#4DFF00"
        chosen_current_boxes[i].querySelector("div").style.fontSize = "85px"

        chosen_current_boxes[i].style.pointerEvents = "none"
        chosen_current_boxes[i].style.opacity = "0.5";
    }


    document.querySelector(".simdi-goster").style.opacity = "0.5"
    document.querySelector(".simdi-goster").style.cursor = "not-allowed"

    clear_new_inputs()


    show_unknown_squad()



})


document.querySelectorAll(".mode input").forEach((input) => {
    input.addEventListener("click", () => { 
        if(input.value === "not-free") mode = "not-free"
        else if(input.value === "FREE") mode = "FREE"

    })
})





continue_button.addEventListener("click", () => {

    all_single_squads.style.display = "block"

    phase_3.style.display = "none"

    document.querySelector("body").style.minHeight = "1500px"

    if (device === "mobile") document.querySelector("body").style.minHeight = "4000px"

    window.scrollTo(0, 0);

    chosen_formation = document.querySelector("#formations").value

    var estimated_max_budget = replaceAll(document.querySelector(".est-budget").value, ",", "")

    if (estimated_max_budget > 0 ) {

        gk_max_budget = estimated_max_budget / 8
        lb_max_budget = estimated_max_budget / 8
        cb1_max_budget = estimated_max_budget / 8
        cb2_max_budget = estimated_max_budget / 8
        cb3_max_budget = estimated_max_budget / 8
        rb_max_budget = estimated_max_budget / 8
        lm1_max_budget = estimated_max_budget / 8
        lm2_max_budget = estimated_max_budget / 8
        cm1_max_budget = estimated_max_budget / 8
        cm2_max_budget = estimated_max_budget / 8
        cm3_max_budget = estimated_max_budget / 8
        cm4_max_budget = estimated_max_budget / 8
        cm5_max_budget = estimated_max_budget / 8
        cm6_max_budget = estimated_max_budget / 8
        rm1_max_budget = estimated_max_budget / 8
        rm2_max_budget = estimated_max_budget / 8
        cam1_max_budget = estimated_max_budget / 8
        cam2_max_budget = estimated_max_budget / 8
        cam3_max_budget = estimated_max_budget / 8
        st1_max_budget = estimated_max_budget / 8
        st2_max_budget = estimated_max_budget / 8
    }



    loadjs(chosen_formation)

    console.log(chosen_formation + " yüklenmeye çalışıyor...")
 
    document.querySelector(".all-single-squads").innerHTML = ""
    localStorage.setItem("results", "[]")
    
})


document.querySelector("#next-phase").addEventListener("click", () => {
    change_phase(phase)
    phase++
    window.scrollTo(0, 0);
})

// bosluklari sildim bubnu ekledim

const get_complete_players = () => {
    let url = "/get-required-players/"
    //let url = "http://192.168.2.81:3000/get-required-players/"
    
    /*
    let players = fetch(url).then((res) => { return res.json()})
    return players
    */
   
    return fetch(url).then((res) => {
        return res.json()
    })


}


const set_value = (player, params) => {

    //default
    if (Object.keys(params).length === 0 && params.constructor === Object) params={"rating":1}
    
    let total = 0;
    let bl = 0;
    
    for (const key in params) {

        if(key === "base_total") {
            total += ( player[key]/6 ) * params[key]
        }
        
        else {
            total += player[key] * params[key]
        }

        bl+=params[key]



    }
    return (total / bl) 
}


const get_point = (player1, player2) => {
    let point = 0

    if(player1.nationality === player2.nationality) point+=1

    let icon_count = 0
    if(player1.league.trim() === "Icons") icon_count+=1
    if(player2.league.trim() === "Icons") icon_count+=1

    if(icon_count === 0){
        if(player1.league === player2.league){
            point+=1
            if(player1.club === player2.club){
                point+=1
            }
        }

        return point
    }

    else if(icon_count === 1) return point+1
    else if(icon_count === 2) return point+2

}



const appendAccording = (current_what, full_according_list) => {
    for (new_pl of full_according_list) {
        if(canAddThis(current_what, new_pl) === true){
            current_what.push(new_pl)
            return true
        }       
    }
}



const get_player_status = (current_player, linked_players) => {

    let count = 0
    let total = 0

    for (linked_player of linked_players){
        total+=get_point(linked_player, current_player)
        count+=1
    }

    let ortalama = total / count


    if (seven_chem_ok === false) {
        
        if (only_nlw === false){
            if (ortalama >= 1) return "OK"
            else return "bad-chem"
        }

        else {
            if (ortalama === 1) return "OK"
            else return "bad-chem"
        }
    }

    else {
        if (ortalama >= 0.5) return "OK"
        else return "bad-chem"
    }


}


const have_hope = (danger_player, linked_players) => {

    let count = 0
    let total = 0 

    for (linked_player of linked_players){
        total+=get_point(linked_player, danger_player)
        count+=1
    }

    total+=2 //3tu 2 yaptim
    count+=1

    let ortalama = total / count

    if(ortalama >= 1) return true
    else return false
}



const canAddThis = (incomplete_squad, possible_new_player) => {
    for (pl of incomplete_squad) {
        if(pl.base_card_id === possible_new_player.base_card_id) return false
    }
    return true
}




function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}


const get_nation_league_count = (squad) => {
    let nation = []
    let league = []
    for (player of squad){
        if(!nation.includes(player.nationality)) nation.push(player.nationality)
        if(!league.includes(player.league)) league.push(player.league)   
    }

    return [nation.length.toString() + "N" + league.length.toString() + "L"]
} 


const get_icon_count = (squad) => {
    let icon_count = 0
    for (pl of squad) {
        if(pl.club.trim() === "Icons") icon_count++
    }
    return icon_count
}


const get_avg_rating = (squad) => {
    let total = 0
    for (pl of squad) {
        total+=pl.rating
    }
    return Math.floor(total/11)
}


const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const get_price = (squad) => {
        
    total_price = 0
    let new_str

    for (pl of squad) {

        if (typeof(pl.ps4_price) === "number") {
            pl.ps4_price = pl.ps4_price.toString()
        }

        if(pl.ps4_price.includes("K")) version="K"
        else if(pl.ps4_price.includes("M")) version="M"
        else if(pl.ps4_price.trim() === "0"){
            total_price += 10000000
            continue
        }

        else version="fakir"

  

        if(version==="fakir"){
            total_price+=parseInt(pl.ps4_price)
            eklenen_price = parseInt(pl.ps4_price)

        }

        else if(version==="K") {
            new_str = pl.ps4_price.slice(0, -1); 
            
            if(!new_str.includes(".")){
                total_price += parseInt(new_str) * 1000
                eklenen_price = parseInt(new_str) * 1000
            }
            
            else{
                if(new_str.split(".")[1].length === 1){
                    total_price+= (parseInt(new_str.split(".")[0]) * 1000 ) + (parseInt(new_str.split(".")[1]) * 100)
                    eklenen_price = (parseInt(new_str.split(".")[0]) * 1000 ) + (parseInt(new_str.split(".")[1]) * 100)
                }
                
                else{
                    total_price+= (parseInt(new_str.split(".")[0]) * 1000 ) + (parseInt(new_str.split(".")[1]) * 10)
                    eklenen_price = (parseInt(new_str.split(".")[0]) * 1000 ) + (parseInt(new_str.split(".")[1]) * 10)
                }
            }
       
        }

        else if(version==="M") {
            new_str = pl.ps4_price.slice(0, -1); 
            
            if(!new_str.includes(".")){
                 total_price += parseInt(new_str) * 1000000
                 eklenen_price = parseInt(new_str) * 1000000
            }
            else{
                if(new_str.split(".")[1].length === 1){
                    total_price+= (parseInt(new_str.split(".")[0]) * 1000000) + (parseInt(new_str.split(".")[1]) * 100000)
                    eklenen_price = (parseInt(new_str.split(".")[0]) * 1000000) + (parseInt(new_str.split(".")[1]) * 100000)
                }
                
                else{
                    total_price+= (parseInt(new_str.split(".")[0]) * 1000000) + (parseInt(new_str.split(".")[1]) * 10000)
                    eklenen_price = (parseInt(new_str.split(".")[0]) * 1000000) + (parseInt(new_str.split(".")[1]) * 10000)
                }
            }

        }
        

    }
    
    return total_price
}


const stopExecuting = () => {
    throw new Error("Kullaci istegiyle program durduruldu.");
}


const is_very_different_sq = (sq1, sq2) => {

    let sq1_base_ids = []
    let sq2_base_ids = []

    let tmp
    let new_count=0

    for (pl of sq1) sq1_base_ids.push(pl.base_card_id)
    for (pl of sq2) sq2_base_ids.push(pl.base_card_id) 

    for (base_id of sq1_base_ids){
        tmp = sq2_base_ids.find((id) => {
            return id === base_id
        })

        if(tmp === undefined) new_count++
    }

    if(new_count >= 3) return true
    else return false
}


const get_current_duration = (startDate) => {
    var endDate   = new Date();
    var seconds = ((endDate.getTime() - startDate.getTime())/1000)
    return seconds
}


const get_squad_value = (squad, order) => {

    var squat_point = 0

    for (let j=0; j<11; j++) {
        squat_point+=squad[j][order[j] + "_value"]  
    }
    
    return squat_point
}


const canEnterTop100 = (squad_obj, final) => {
    if (final.length < 100) return true
    
    if (squad_obj.squad_rating > final[final.length-1].squad_rating) return true
    else return false
}


const set_spot_area = (X_parameters) => {
    let spot = X_parameters.split("_")[0].toUpperCase()
    document.querySelector("#chosen-spot").innerHTML = spot
}

const change_phase = (current_phase_num) => {

    if (current_phase_num === 1) {

        // document.querySelectorAll(".empty-card").forEach((div) => {
        //     div.textContent = "?"
        // })

        filter_player_boxes.forEach((div) => {
            div.querySelector("div").textContent = "?"
        })


        //document.querySelectorAll(".rule-header")[1].style.fontSize = "45px";

        phase_1.style.display = "none"


        unknown_squad_area.style.marginTop = "-191px"

        unknown_squad_area.style.pointerEvents = "all";
        unknown_squad_area.style.webkitFilter = "none";
        next_phase_button.style.marginTop = "34px";

        document.querySelector(".default-configs").style.display = "block"

        if(device === "desktop") unknown_squad_area.style.transform = "scale(0.42)";
        else if (device === "mobile") {

            document.querySelectorAll(".rule-header")[1].style.fontSize = "90px";
            unknown_squad_area.style.transform = "scale(1.15)";
            unknown_squad_area.style.marginTop = "250px"
            next_phase_button.style.marginTop = "54px";
            document.querySelector("#gk-stats").textContent = "GK STATS"
        
        }


        phase_2.style.display = "block"
    }

    else if (current_phase_num === 2) {
    
        unknown_squad_area.style.display = "none"
        document.querySelector(".default-configs").style.display = "none"

        phase_2.style.display = "none"

        continue_button.style.display = "block"
 
        next_phase_button.style.display = "none"
        phase_3.style.display = "block"


    }
}


icons_toggle.addEventListener("change", () => {

    if (icons_toggle.checked) {
        isIconMode = true
        allow_legends_span.style.color = "#2196F3"
    }

    else {
        isIconMode = false
        allow_legends_span.style.color = "#AAAAAA"
    }


})


mode_toggle.addEventListener("change", () => {
    
    if (mode_toggle.checked) {
        mode = "FREE"
        allow_free_mode_span.style.color = "#2196F3"
    }

    else {
        mode = "not-free"
        allow_free_mode_span.style.color = "#AAAAAA"
    }

})



nlw_toggle.addEventListener("change", () => {
    
    if (nlw_toggle.checked) {
        only_nlw = true
        only_nlw_span.style.color = "#2196F3"

        chem_toggle.checked = false
        allow_7_chem_span.style.color = "#AAAAAA"
        seven_chem_ok = false
    }

    else {
        only_nlw = false
        only_nlw_span.style.color = "#AAAAAA"
    }

})


chem_toggle.addEventListener("change", () => {
    
    if (chem_toggle.checked) {
        seven_chem_ok = true
        allow_7_chem_span.style.color = "#2196F3"

        nlw_toggle.checked = false
        only_nlw_span.style.color = "#AAAAAA"
        only_nlw = false
        
    }

    else {
        seven_chem_ok = false
        allow_7_chem_span.style.color = "#AAAAAA"
    }

})

filter_player_boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        // switch_popup()


    })
})


cancel_filter_button.addEventListener("click", () => {
    show_unknown_squad()
})




document.addEventListener('keydown', (e) => {
    let popup_display = filter_popup.style.display
    if (e.key === "Escape") show_unknown_squad()
})


function replaceAll(str, find, replace) {
    var escapedFind=find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    return str.replace(new RegExp(escapedFind, 'g'), replace);
}


function is_numeric(str){
    return /^\d+$/.test(str);
}


const budget_comma = () => {

    var ece =  document.querySelector(".est-budget").value

    if (!is_numeric(ece[ece.length-1])) {
        document.querySelector(".est-budget").value = ece.slice(0, -1)
        return false
    }
    
    var without_comma = replaceAll(ece.toString(), ",", "" )
    document.querySelector(".est-budget").value = numberWithCommas(without_comma)
}


const zoomInOut = (div) => {
    while (true) {
        div.style.transform = "scale(1.5)"
        div.style.transform = "scale(0.5)"
    }
}