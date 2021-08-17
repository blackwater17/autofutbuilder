var gk = document.querySelector("#gk")
var cb1 = document.querySelector("#cb1")
var cb2 = document.querySelector("#cb2")
var cb3 = document.querySelector("#cb3")
var lm1 = document.querySelector("#lm1")
var lm2 = document.querySelector("#lm2")
var rm1 = document.querySelector("#rm1")
var rm2 = document.querySelector("#rm2")
var cm1 = document.querySelector("#cm1")
var cm2 = document.querySelector("#cm2")
var cm3 = document.querySelector("#cm3")
var cm4 = document.querySelector("#cm4")
var cm5 = document.querySelector("#cm5")
var cm6 = document.querySelector("#cm6")
var cam1 = document.querySelector("#cam1")
var cam2 = document.querySelector("#cam2")
var cam3 = document.querySelector("#cam3")
var st1 = document.querySelector("#st1")
var st2 = document.querySelector("#st2")

const formation2 = urlParams.get("formation")

switch(formation2) {

    case "3-4-2-1":

        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        cb1.style.bottom = "200px"
        cb1.style.left = "125px"

        cb2.style.bottom = "200px"
        cb2.style.marginLeft = "50%"
        cb2.style.marginRight = "50%"
        cb2.style.transform = "translate(-50%, 0%)"

        cb3.style.bottom = "200px"
        cb3.style.right = "125px"

        lm1.style.bottom = "534px"
        lm1.style.left = "44px"

        rm1.style.bottom = "534px"
        rm1.style.right = "44px"

        cm1.style.bottom = "450px"
        cm1.style.left = "300px"

        cm2.style.bottom = "450px"
        cm2.style.right = "300px"

        st1.style.bottom = "810px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"

        lm2.style.bottom = "740px"
        lm2.style.left = "270px"

        rm2.style.bottom = "740px"
        rm2.style.right = "270px"

        break

    case "3-4-3":

        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        cb1.style.bottom = "200px"
        cb1.style.left = "125px"

        cb2.style.bottom = "200px"
        cb2.style.marginLeft = "50%"
        cb2.style.marginRight = "50%"
        cb2.style.transform = "translate(-50%, 0%)"

        cb3.style.bottom = "200px"
        cb3.style.right = "125px"

        lm1.style.bottom = "534px"
        lm1.style.left = "44px"

        rm1.style.bottom = "534px"
        rm1.style.right = "44px"

        cm1.style.bottom = "450px"
        cm1.style.left = "300px"

        cm2.style.bottom = "450px"
        cm2.style.right = "300px"

        st1.style.bottom = "810px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"

        lm2.style.bottom = "730px"
        lm2.style.left = "210px"

        rm2.style.bottom = "730px"
        rm2.style.right = "210px"

        break

    case "4-1-2-1-2":

        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "380px"
        cm1.style.marginLeft = "50%"
        cm1.style.marginRight = "50%"
        cm1.style.transform = "translate(-50%, 0%)"

        lm1.style.bottom = "515px"
        lm1.style.left = "184px"

        rm1.style.bottom = "515px"
        rm1.style.right = "184px"

        cam1.style.bottom = "632px"
        cam1.style.marginLeft = "50%"
        cam1.style.marginRight = "50%"
        cam1.style.transform = "translate(-50%, 0%)"

        st1.style.bottom = "820px"
        st1.style.left = "300px"

        st2.style.bottom = "820px"
        st2.style.right = "300px"

        break

    case "4-1-2-1-2 (2)":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm2.style.bottom = "380px"
        cm2.style.marginLeft = "50%"
        cm2.style.marginRight = "50%"
        cm2.style.transform = "translate(-50%, 0%)"

        cm1.style.bottom = "515px"
        cm1.style.left = "184px"

        cm3.style.bottom = "515px"
        cm3.style.right = "184px"

        cam1.style.bottom = "632px"
        cam1.style.marginLeft = "50%"
        cam1.style.marginRight = "50%"
        cam1.style.transform = "translate(-50%, 0%)"

        st1.style.bottom = "820px"
        st1.style.left = "300px"

        st2.style.bottom = "820px"
        st2.style.right = "300px"

        break

    case "4-1-3-2":

        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "380px"
        cm1.style.marginLeft = "50%"
        cm1.style.marginRight = "50%"
        cm1.style.transform = "translate(-50%, 0%)"

        lm1.style.bottom = "515px"
        lm1.style.left = "184px"

        rm1.style.bottom = "515px"
        rm1.style.right = "184px"

        cm2.style.bottom = "632px"
        cm2.style.marginLeft = "50%"
        cm2.style.marginRight = "50%"
        cm2.style.transform = "translate(-50%, 0%)"

        st1.style.bottom = "820px"
        st1.style.left = "300px"

        st2.style.bottom = "820px"
        st2.style.right = "300px"

        break

    case "4-1-4-1":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "480px"
        cm1.style.left = "270px"

        cm2.style.bottom = "390px"
        cm2.style.marginLeft = "50%"
        cm2.style.marginRight = "50%"
        cm2.style.transform = "translate(-50%, 0%)"

        cm3.style.bottom = "480px"
        cm3.style.right = "270px"

        lm1.style.bottom = "560px"
        lm1.style.left = "90px"

        rm1.style.bottom = "560px"
        rm1.style.right = "90px"

        st1.style.bottom = "770px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"
        break   

    case "4-2-3-1":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "430px"
        cm1.style.left = "240px"

        cm2.style.bottom = "430px"
        cm2.style.right = "240px"

        cam1.style.bottom = "670px"
        cam1.style.left = "264px"

        cam2.style.bottom = "610px"
        cam2.style.marginLeft = "50%"
        cam2.style.marginRight = "50%"
        cam2.style.transform = "translate(-50%, 0%)"

        cam3.style.bottom = "670px"
        cam3.style.right = "264px"


        st1.style.bottom = "840px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"
        break

    case "4-2-3-1 (2)":

        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "430px"
        cm1.style.left = "240px"

        cm2.style.bottom = "430px"
        cm2.style.right = "240px"

        lm1.style.bottom = "650px"
        lm1.style.left = "130px"

        cam1.style.bottom = "590px"
        cam1.style.marginLeft = "50%"
        cam1.style.marginRight = "50%"
        cam1.style.transform = "translate(-50%, 0%)"

        rm1.style.bottom = "650px"
        rm1.style.right = "130px"


        st1.style.bottom = "840px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"
        break

    case "4-2-2-2":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "420px"
        cm1.style.left = "320px"

        cm2.style.bottom = "420px"
        cm2.style.right = "320px"

        cam1.style.bottom = "620px"
        cam1.style.left = "224px"

        cam2.style.bottom = "620px"
        cam2.style.right = "224px"


        st1.style.bottom = "820px"
        st1.style.left = "330px"

        st2.style.bottom = "820px"
        st2.style.right = "330px"
        break

    case "4-4-2":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "472px"
        cm1.style.left = "320px"

        cm2.style.bottom = "472px"
        cm2.style.right = "320px"

        lm1.style.bottom = "585px"
        lm1.style.left = "124px"

        rm1.style.bottom = "585px"
        rm1.style.right = "124px"


        st1.style.bottom = "820px"
        st1.style.left = "330px"

        st2.style.bottom = "820px"
        st2.style.right = "330px"
        break

    case "4-4-2 (2)":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "432px"
        cm1.style.left = "320px"

        cm2.style.bottom = "432px"
        cm2.style.right = "320px"

        lm1.style.bottom = "585px"
        lm1.style.left = "124px"

        rm1.style.bottom = "585px"
        rm1.style.right = "124px"


        st1.style.bottom = "820px"
        st1.style.left = "330px"

        st2.style.bottom = "820px"
        st2.style.right = "330px"
        break

    case "4-2-4":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "472px"
        cm1.style.left = "320px"

        cm2.style.bottom = "472px"
        cm2.style.right = "320px"

        lm1.style.bottom = "725px"
        lm1.style.left = "164px"

        rm1.style.bottom = "725px"
        rm1.style.right = "164px"


        st1.style.bottom = "820px"
        st1.style.left = "330px"

        st2.style.bottom = "820px"
        st2.style.right = "330px"
        break

    case "4-3-2-1":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "470px"
        cm1.style.left = "200px"

        cm2.style.bottom = "470px"
        cm2.style.marginLeft = "50%"
        cm2.style.marginRight = "50%"
        cm2.style.transform = "translate(-50%, 0%)"

        cm3.style.bottom = "470px"
        cm3.style.right = "200px"

        st1.style.bottom = "820px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"

        lm1.style.bottom = "760px"
        lm1.style.left = "290px"

        rm1.style.bottom = "760px"
        rm1.style.right = "290px"

        break

    case "4-3-3":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "470px"
        cm1.style.left = "200px"

        cm2.style.bottom = "470px"
        cm2.style.marginLeft = "50%"
        cm2.style.marginRight = "50%"
        cm2.style.transform = "translate(-50%, 0%)"

        cm3.style.bottom = "470px"
        cm3.style.right = "200px"

        st1.style.bottom = "820px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"

        lm1.style.bottom = "730px"
        lm1.style.left = "240px"

        rm1.style.bottom = "730px"
        rm1.style.right = "240px"

        break

    case "4-3-3 (2)":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "470px"
        cm1.style.left = "200px"

        cm2.style.bottom = "400px"
        cm2.style.marginLeft = "50%"
        cm2.style.marginRight = "50%"
        cm2.style.transform = "translate(-50%, 0%)"

        cm3.style.bottom = "470px"
        cm3.style.right = "200px"

        st1.style.bottom = "820px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"

        lm1.style.bottom = "730px"
        lm1.style.left = "240px"

        rm1.style.bottom = "730px"
        rm1.style.right = "240px"

        break

    case "4-3-3 (3)":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "440px"
        cm1.style.left = "200px"

        cm2.style.bottom = "480px"
        cm2.style.marginLeft = "50%"
        cm2.style.marginRight = "50%"
        cm2.style.transform = "translate(-50%, 0%)"

        cm3.style.bottom = "440px"
        cm3.style.right = "200px"

        st1.style.bottom = "820px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"

        lm1.style.bottom = "730px"
        lm1.style.left = "240px"

        rm1.style.bottom = "730px"
        rm1.style.right = "240px"

        break

    case "4-3-3 (4)":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "450px"
        cm1.style.left = "200px"

        cam1.style.bottom = "555px"
        cam1.style.marginLeft = "50%"
        cam1.style.marginRight = "50%"
        cam1.style.transform = "translate(-50%, 0%)"

        cm2.style.bottom = "450px"
        cm2.style.right = "200px"

        st1.style.bottom = "820px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"

        lm1.style.bottom = "730px"
        lm1.style.left = "240px"

        rm1.style.bottom = "730px"
        rm1.style.right = "240px"

        break

    case "4-3-3 (5)":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "470px"
        cm1.style.left = "200px"

        cm2.style.bottom = "400px"
        cm2.style.marginLeft = "50%"
        cm2.style.marginRight = "50%"
        cm2.style.transform = "translate(-50%, 0%)"

        cm3.style.bottom = "470px"
        cm3.style.right = "200px"

        st1.style.bottom = "700px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"

        lm1.style.bottom = "777px"
        lm1.style.left = "210px"

        rm1.style.bottom = "777px"
        rm1.style.right = "210px"

        break

    case "4-4-1-1":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "432px"
        cm1.style.left = "320px"

        cm2.style.bottom = "432px"
        cm2.style.right = "320px"

        lm1.style.bottom = "545px"
        lm1.style.left = "124px"

        rm1.style.bottom = "545px"
        rm1.style.right = "124px"


        st1.style.bottom = "620px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"

        st2.style.bottom = "847px"
        st2.style.marginLeft = "50%"
        st2.style.marginRight = "50%"
        st2.style.transform = "translate(-50%, 0%)"
        break

    case "4-4-1-1 (2)":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"

        cm1.style.bottom = "432px"
        cm1.style.left = "320px"

        cm2.style.bottom = "432px"
        cm2.style.right = "320px"

        lm1.style.bottom = "545px"
        lm1.style.left = "124px"

        rm1.style.bottom = "545px"
        rm1.style.right = "124px"

        cam1.style.bottom = "620px"
        cam1.style.marginLeft = "50%"
        cam1.style.marginRight = "50%"
        cam1.style.transform = "translate(-50%, 0%)"

        st1.style.bottom = "847px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"
        break

    case "4-5-1": 
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"


        cm1.style.bottom = "390px"
        cm1.style.marginLeft = "50%"
        cm1.style.marginRight = "50%"
        cm1.style.transform = "translate(-50%, 0%)"

        lm1.style.bottom = "530px"
        lm1.style.left = "90px"

        rm1.style.bottom = "530px"
        rm1.style.right = "90px"

        cam1.style.bottom = "620px"
        cam1.style.left = "284px"

        cam2.style.bottom = "620px"
        cam2.style.right = "284px"

        st1.style.bottom = "810px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"
        break

    case "4-5-1 (2)":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        lb.style.left = "25px"
        lb.style.bottom = "275px"

        cb1.style.bottom = "205px"
        cb1.style.left = "280px"

        cb2.style.bottom = "205px"
        cb2.style.right = "280px"

        rb.style.right = "25px"
        rb.style.bottom = "275px"


        cm1.style.bottom = "470px"
        cm1.style.left = "270px"

        cm2.style.bottom = "450px"
        cm2.style.marginLeft = "50%"
        cm2.style.marginRight = "50%"
        cm2.style.transform = "translate(-50%, 0%)"

        cm3.style.bottom = "470px"
        cm3.style.right = "270px"

        lm1.style.bottom = "570px"
        lm1.style.left = "90px"

        rm1.style.bottom = "570px"
        rm1.style.right = "90px"

        st1.style.bottom = "810px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"
        break

    case "5-2-1-2":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        cb1.style.bottom = "200px"
        cb1.style.left = "220px"

        cb2.style.bottom = "200px"
        cb2.style.marginLeft = "50%"
        cb2.style.marginRight = "50%"
        cb2.style.transform = "translate(-50%, 0%)"

        cb3.style.bottom = "200px"
        cb3.style.right = "220px"

        lb.style.bottom = "313px"
        lb.style.left = "44px"

        rb.style.bottom = "313px"
        rb.style.right = "44px"

        cm1.style.bottom = "440px"
        cm1.style.left = "260px"

        cm2.style.bottom = "440px"
        cm2.style.right = "260px"

        cam1.style.bottom = "610px"
        cam1.style.marginLeft = "50%"
        cam1.style.marginRight = "50%"
        cam1.style.transform = "translate(-50%, 0%)"

        st1.style.bottom = "820px"
        st1.style.left = "300px"

        st2.style.bottom = "820px"
        st2.style.right = "300px"

        break

    case "5-2-2-1":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        cb1.style.bottom = "200px"
        cb1.style.left = "220px"

        cb2.style.bottom = "200px"
        cb2.style.marginLeft = "50%"
        cb2.style.marginRight = "50%"
        cb2.style.transform = "translate(-50%, 0%)"

        cb3.style.bottom = "200px"
        cb3.style.right = "220px"

        lb.style.bottom = "313px"
        lb.style.left = "44px"

        rb.style.bottom = "313px"
        rb.style.right = "44px"

        cm1.style.bottom = "480px"
        cm1.style.left = "260px"

        cm2.style.bottom = "480px"
        cm2.style.right = "260px"

        st1.style.bottom = "810px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"

        lm1.style.bottom = "730px"
        lm1.style.left = "210px"

        rm1.style.bottom = "730px"
        rm1.style.right = "210px"


        break

    case "5-3-2":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        cb1.style.bottom = "200px"
        cb1.style.left = "220px"

        cb2.style.bottom = "200px"
        cb2.style.marginLeft = "50%"
        cb2.style.marginRight = "50%"
        cb2.style.transform = "translate(-50%, 0%)"

        cb3.style.bottom = "200px"
        cb3.style.right = "220px"

        lb.style.bottom = "313px"
        lb.style.left = "44px"

        rb.style.bottom = "313px"
        rb.style.right = "44px"

        cm1.style.bottom = "520px"
        cm1.style.left = "200px"

        cm2.style.bottom = "520px"
        cm2.style.marginLeft = "50%"
        cm2.style.marginRight = "50%"
        cm2.style.transform = "translate(-50%, 0%)"

        cm3.style.bottom = "520px"
        cm3.style.right = "200px"

        st1.style.bottom = "800px"
        st1.style.left = "330px"

        st2.style.bottom = "800px"
        st2.style.right = "330px"




        break

    case "5-4-1":
        gk.style.bottom = "-40px"
        gk.style.marginLeft = "50%"
        gk.style.marginRight = "50%"
        gk.style.transform = "translate(-50%, 0%)"

        cb1.style.bottom = "200px"
        cb1.style.left = "220px"

        cb2.style.bottom = "200px"
        cb2.style.marginLeft = "50%"
        cb2.style.marginRight = "50%"
        cb2.style.transform = "translate(-50%, 0%)"

        cb3.style.bottom = "200px"
        cb3.style.right = "220px"

        lb.style.bottom = "313px"
        lb.style.left = "44px"

        rb.style.bottom = "313px"
        rb.style.right = "44px"

        cm1.style.bottom = "472px"
        cm1.style.left = "320px"

        cm2.style.bottom = "472px"
        cm2.style.right = "320px"

        lm1.style.bottom = "585px"
        lm1.style.left = "124px"

        rm1.style.bottom = "585px"
        rm1.style.right = "124px"

        st1.style.bottom = "810px"
        st1.style.marginLeft = "50%"
        st1.style.marginRight = "50%"
        st1.style.transform = "translate(-50%, 0%)"

        break

    }