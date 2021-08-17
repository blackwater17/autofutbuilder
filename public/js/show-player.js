const urlParams = new URLSearchParams(window.location.search);

const player_ID = window.location.href.split("stats/")[1]
const all_inputs = document.querySelectorAll(".text-input-area")
const req_url = '/get-required-players/'
//const req_url = 'http://127.0.0.1:3000/get-required-players/'


for (item of all_inputs) {
    try {
        if (item.value === "NULL" || item.value.startsWith("max") || item.value === "0") item.value = "-"
        else {
            item.value =  chosen_player[item.id]        
        }
    }

    catch(e) {

    }
}