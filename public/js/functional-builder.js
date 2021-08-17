console.log("Functional builder yüklendi.")


continue_button.addEventListener("click", () => {
 
    generate_squads()
    
})


const set_and_add = (player, mode) => {

    let pos = player.position
    let league = player.league.trim()

    if(league === "Icons" && isIconMode === false) return false


    if(pos === "GK") {
        player.gk_value = set_value(player, gk_parameters)
        
        GK_.push(player)
    }

    else if(pos === "CB") {
        player.cb1_value = set_value(player, cb1_parameters)
        player.cb2_value = set_value(player, cb2_parameters)
        player.cb3_value = set_value(player, cb3_parameters)
    
        CB1_.push(player)
        CB2_.push(player)
        CB3_.push(player)
    }

    else if(pos === "LB" || pos == "LWB"){
        player.lb_value = set_value(player, lb_parameters)
        
        LB_.push(player)
    }

    else if(pos === "RB" || pos === "RWB"){
        player.rb_value = set_value(player, rb_parameters)
        
        RB_.push(player)
    }

    else if(pos === "LM" || pos === "LW" || pos === "LF"){
        player.lm1_value = set_value(player, lm1_parameters)
        player.lm2_value = set_value(player, lm2_parameters)

        LM1_.push(player)
        LM2_.push(player)
    }

    else if(pos === "RM" || pos === "RW" || pos === "RF"){
        player.rm1_value = set_value(player, rm1_parameters)
        player.rm2_value = set_value(player, rm2_parameters)

        RM1_.push(player)
        RM2_.push(player)
    }


    else {

        if(mode === "not-free"){

            if(pos === "CM" || pos === "CDM"){
                player.cm1_value = set_value(player, cm1_parameters)
                player.cm2_value = set_value(player, cm2_parameters)
                player.cm3_value = set_value(player, cm3_parameters)
                player.cm4_value = set_value(player, cm4_parameters)
                player.cm5_value = set_value(player, cm5_parameters)
                player.cm6_value = set_value(player, cm6_parameters)
                
                CM1_.push(player)
                CM2_.push(player)
                CM3_.push(player)
                CM4_.push(player)
                CM5_.push(player)
                CM6_.push(player)
            }

            else if(pos === "CAM"){
                player.cam1_value = set_value(player, cam1_parameters)
                player.cam2_value = set_value(player, cam2_parameters)
                player.cam3_value = set_value(player, cam3_parameters)
                
                CAM1_.push(player)
                CAM2_.push(player)
                CAM3_.push(player)
            }

            else if(pos === "CF" || pos === "ST"){
                player.st1_value = set_value(player, st1_parameters)
                player.st2_value = set_value(player, st2_parameters)

                ST1_.push(player)
                ST2_.push(player)

            }
            
        }    
                

        else if(mode === "FREE"){

            if(pos === "CM" || pos === "CDM" || pos === "CAM" || pos === "CF" || pos === "ST"){
                player.cm1_value = set_value(player, cm1_parameters)
                player.cm2_value = set_value(player, cm2_parameters)
                player.cm3_value = set_value(player, cm3_parameters)
                player.cm4_value = set_value(player, cm4_parameters)
                player.cm5_value = set_value(player, cm5_parameters)
                player.cm6_value = set_value(player, cm6_parameters)
                player.cam1_value = set_value(player, cam1_parameters)
                player.cam2_value = set_value(player, cam2_parameters)
                player.cam3_value = set_value(player, cam3_parameters)
                player.st1_value = set_value(player, st1_parameters)
                player.st2_value = set_value(player, st2_parameters)


                CM1_.push(player)
                CM2_.push(player)
                CM3_.push(player)
                CM4_.push(player)
                CM5_.push(player)
                CM6_.push(player)
                CAM1_.push(player)
                CAM2_.push(player)
                CAM3_.push(player)
                ST1_.push(player)
                ST2_.push(player)

            }
            
        }
}
}
 

const sort_all_lists = () => {

    GK_.sort(function(a, b) {
        return b.gk_value - a.gk_value});
    
    LB_.sort(function(a, b) {
        return b.lb_value - a.lb_value});
    
    CB1_.sort(function(a, b) {
        return b.cb1_value - a.cb1_value});

    CB2_.sort(function(a, b) {
        return b.cb2_value - a.cb2_value});

    CB3_.sort(function(a, b) {
        return b.cb3_value - a.cb3_value});
    
    RB_.sort(function(a, b) {
        return b.rb_value - a.rb_value});
    
    LM1_.sort(function(a, b) {
        return b.lm1_value - a.lm1_value});

    LM2_.sort(function(a, b) {
        return b.lm2_value - a.lm2_value});

    RM1_.sort(function(a, b) {
        return b.rm1_value - a.rm1_value});

    RM2_.sort(function(a, b) {
        return b.rm2_value - a.rm2_value});

    CM1_.sort(function(a, b) {
        return b.cm1_value - a.cm1_value});

    CM2_.sort(function(a, b) {
        return b.cm2_value - a.cm2_value});

    CM3_.sort(function(a, b) {
        return b.cm3_value - a.cm3_value});

    CM4_.sort(function(a, b) {
        return b.cm4_value - a.cm4_value});

    CM5_.sort(function(a, b) {
        return b.cm5_value - a.cm5_value});

    CM6_.sort(function(a, b) {
        return b.cm6_value - a.cm6_value});
    
    CAM1_.sort(function(a, b) {
        return b.cam1_value - a.cam1_value});

    CAM2_.sort(function(a, b) {
        return b.cam2_value - a.cam2_value});

    CAM3_.sort(function(a, b) {
        return b.cam3_value - a.cam3_value});
    
    ST1_.sort(function(a, b) {
        return b.st1_value - a.st1_value});

    ST2_.sort(function(a, b) {
        return b.st2_value - a.st2_value});
}





const generate_squads = () => {

    document.querySelector(".some-form-stuff").style.display = "none"
    continue_button.style.display = "none"

    document.querySelector(".loading-area").style.display = "inline-block";
    
    if (mode === undefined) mode = "not-free"
    if (isIconMode === undefined) isIconMode = false
    if (only_nlw === undefined) only_nlw = false
    if (seven_chem_ok === undefined) seven_chem_ok = false

    GK_ = []
    LB_ = []
    CB1_ = []
    CB2_ = []
    CB3_ = []
    RB_ = []
    LM1_ = []
    LM2_ = []
    RM1_ = []
    RM2_ = []
    CM1_ = []
    CM2_ = []
    CM3_ = []
    CM4_ = []
    CM5_ = []
    CM6_ = []
    CAM1_ = []
    CAM2_ = []
    CAM3_ = []
    ST1_ = []
    ST2_ = []

    get_complete_players().then((complete_players) => {
        for (player of complete_players) {
            player.base_card_id = parseInt(player.base_card_id)
            set_and_add(player, mode)
        }

        

        sort_all_lists()

        GK_ = GK_.filter((player) => {
            return get_price([player]) < gk_max_budget
        })

        LB_ = LB_.filter((player) => {
            return get_price([player]) < lb_max_budget
        })

        CB1_ = CB1_.filter((player) => {
            return get_price([player]) < cb1_max_budget
        })

        CB2_ = CB2_.filter((player) => {
            return get_price([player]) < cb2_max_budget
        })

        CB3_ = CB3_.filter((player) => {
            return get_price([player]) < cb3_max_budget
        })

        RB_ = RB_.filter((player) => {
            return get_price([player]) < rb_max_budget
        })

        LM1_ = LM1_.filter((player) => {
            return get_price([player]) < lm1_max_budget
        })

        LM2_ = LM2_.filter((player) => {
            return get_price([player]) < lm2_max_budget
        })

        RM1_ = RM1_.filter((player) => {
            return get_price([player]) < rm1_max_budget
        })

        RM2_ = RM2_.filter((player) => {
            return get_price([player]) < rm2_max_budget
        })

        CM1_ = CM1_.filter((player) => {
            return get_price([player]) < cm1_max_budget
        })

        CM2_ = CM2_.filter((player) => {
            return get_price([player]) < cm2_max_budget
        })

        CM3_ = CM3_.filter((player) => {
            return get_price([player]) < cm3_max_budget
        })
        
        CM4_ = CM4_.filter((player) => {
            return get_price([player]) < cm4_max_budget
        })

        CM5_ = CM5_.filter((player) => {
            return get_price([player]) < cm5_max_budget
        })

        CM6_ = CM6_.filter((player) => {
            return get_price([player]) < cm6_max_budget
        })

        CAM1_ = CAM1_.filter((player) => {
            return get_price([player]) < cam1_max_budget
        })

        CAM2_ = CAM2_.filter((player) => {
            return get_price([player]) < cam2_max_budget
        })

        CAM3_ = CAM3_.filter((player) => {
            return get_price([player]) < cam3_max_budget
        })

        ST1_ = ST1_.filter((player) => {
            return get_price([player]) < st1_max_budget
        })

        ST2_ = ST2_.filter((player) => {
            return get_price([player]) < st2_max_budget
        })
    
        //filterlama daha genisletilcek ilerde modernlesebilir de

        current_GK_ = []
        current_LB_ = []
        current_CB1_ = []
        current_CB2_ = []
        current_CB3_ = []
        current_RB_ = []
        current_LM1_ = []
        current_LM2_ = []
        current_CM1_ = []
        current_CM2_ = []
        current_CM3_ = []
        current_CM4_ = []
        current_CM5_ = []
        current_CM6_ = []
        current_RM1_ = []
        current_RM2_ = []
        current_CAM1_ = []
        current_CAM2_ = []
        current_CAM3_ = []
        current_ST1_ = []
        current_ST2_ = []
    

        /// as bilgilerin tablodan bilgiler gelmesi şart 
    
        switch(chosen_formation) {

            case "3-1-4-2":
                var order = ["gk", "cb1", "cb2", "cb3", "cm2", "lm1", "rm1", "cm1", "cm3", "st1", "st2"]
                var infoList = get_infoList(order)

                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 4:
                            checks = [[p1, [p2, p3, p4]]]
                            break
                        
                        case 5:
                            checks = [[p3, [p1, p2, p4, p5]]]
                            break
                
                        case 6:
                            checks = [[p2, [p1, p3, p5, p6]]]
                            break
            
                        case 7:
                            checks = [[p4, [p1, p3, p5, p7]]]
                            break
            
                        case 9:
                            checks = [[p5, [p2, p3, p4, p8, p9]]]
                            break
            
                        case 10:
                            checks = [[p6, [p10, p8, p2]], [p8, [p5, p6, p10]]]
                            break
            
                        case 11:
                            checks = [
                                        [p10, [p6, p8, p11]], 
                                        [p11, [p10, p9, p7]], 
                                        [p9, [p5, p7, p11]],
                                        [p7, [p4, p9, p11]]
                                    ]      
                            
                            break
            
                        default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break

            case "3-4-1-2":
                order = ["gk", "cb1", "cb2", "cb3", "lm1", "rm1", "cm1", "cm2", "cam1", "st1", "st2"] 
                var infoList = get_infoList(order)

                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
                        case 4:
                            checks = [[p1, [p2, p3, p4]]]
                            break
                         
                        case 5:
                            checks = [[p2, [p5, p1, p3]]]
                            break
                         
                        case 6:
                            checks = [[p4, [p6, p3, p1]]]
                            break
                         
                        case 8:
                            checks = [[p3, [p7, p8, p2, p4, p1]]]
                            break
                         
                        case 9:
                            checks = [[p7, [p3, p5, p9, p8]], [p8, [p9, p7, p3, p6]]]
                            break
                         
                        case 10:
                            checks = [[p5, [p2, p7, p10]]]
                            break
                         
                        case 11:
                            checks = [[p10, [p5, p9, p11]], [p11, [p10, p9, p6]], [p9, [p7, p8, p10, p11]], [p6, [p8, p4, p11]]]
                            break
                    
                        default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true     
                }

                break



            case "3-4-2-1":
                var order = ['gk', 'cb1', 'cb2', 'cb3', 'lm1', 'rm1', "cm1", "cm2", "lm2", "rm2", "st1"]
                var infoList = get_infoList(order)

                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 4:
                            checks = [[p1, [p2, p3, p4]]]
                            break

                        case 5:
                            checks = [[p2, [p5, p1, p3]]]
                            break

                        case 6:
                            checks = [[p4, [p6, p3, p1]]]
                            break

                        case 8:
                            checks = [[p3, [p7, p8, p2, p4, p1]]]
                            break

                        case 9:
                            checks = [[p5, [p2, p7, p9]], [p7, [p3, p5, p9, p8]]]
                            break

                        case 10:
                            checks = [[p6, [p8, p4, p10]], [p8, [p10, p7, p3, p6]]]
                            break

                        case 11:
                            checks = [[p9, [p5, p7, p11]], [p10, [p11, p8, p6]], [p11, [p9, p10]]]
                            break

                        default: 
                            return true
                }
    
                for (check of checks) {
                    if (get_player_status(check[0], check[1]) === "bad-chem") return false
                }
                
                return true        
                    
            }

            break


            case "3-4-3":
                var order = ['lm1', 'lm2', 'st1', 'rm2', 'rm1', 'cm1', "cm2", "cb2", "cb1", "cb3", "gk"]
                var infoList = get_infoList(order)

                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {

                        case 3:
                            checks = [[p2, [p1, p3]]]
                            break
                         
                         case 5:
                            checks = [[p4, [p3, p5]]]
                            break
                         
                         case 7:
                            checks = [[p3, [p2, p4, p6, p7]]]
                            break
                         
                         case 8:
                            checks = [[p6, [p8, p1, p3, p7]], [p7, [p3, p6, p8, p5]]]
                            break
                         
                         case 9:
                            checks = [[p1, [p9, p6, p2]]]
                            break
                         
                         case 10:
                            checks = [[p5, [p7, p10, p4]]]
                            break
                         
                         case 11:
                            checks = [[p8, [p6, p7, p9, p10, p11]], [p9, [p1, p11, p8]], [p10, [p5, p8, p11]], [p11, [p9, p8, p10]]]
                            break

                         default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break

            case "4-1-2-1-2":
                var order = ['gk', 'cb1', 'cb2', 'lb', 'lm1', 'cm1', "rb", "rm1", "cam1", "st1", "st2"]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {

                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break

                        case 5:
                            checks = [[p4, [p5, p2]]]
                            break

                        case 6:
                            checks = [[p2, [p6, p4, p3, p1]]]
                            break

                        case 7:
                            checks = [[p3, [p6, p7, p2, p1]]]
                            break

                        case 8:
                            checks = [[p7, [p3, p8]]]
                            break

                        case 9:
                            checks = [[p6, [p2, p3, p5, p8, p9]]]
                            break

                        case 10:
                            checks = [[p5, [p4, p6, p9, p10]]]
                            break

                        case 11:
                            checks = [[p10, [p5, p9, p11]], [p11, [p10, p8, p9]], [p9, [p5, p6, p8, p10, p11]], [p8, [p6, p7, p9, p11]]]
                            break
          
                        default: 
                            return true
                }
    
                for (check of checks) {
                    if (get_player_status(check[0], check[1]) === "bad-chem") return false
                }
                
                return true        
                    
                }

                break

            case "4-1-2-1-2 (2)":
                var order = ['gk', 'cb1', 'cb2', 'lb', 'cm1', 'cm2', "rb", "cm3", "cam1", "st1", "st2"]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {

                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break

                        case 5:
                            checks = [[p4, [p5, p2]]]
                            break

                        case 6:
                            checks = [[p2, [p6, p4, p3, p1]]]
                            break

                        case 7:
                            checks = [[p3, [p6, p7, p2, p1]]]
                            break

                        case 8:
                            checks = [[p7, [p3, p8]]]
                            break

                        case 9:
                            checks = [[p6, [p2, p3, p5, p8, p9]]]
                            break

                        case 10:
                            checks = [[p5, [p4, p6, p9, p10]]]
                            break

                        case 11:
                            checks = [[p10, [p5, p9, p11]], [p11, [p10, p8, p9]], [p9, [p5, p6, p8, p10, p11]], [p8, [p6, p7, p9, p11]]]
                            break
            
                        default: 
                            return true
                }
    
                for (check of checks) {
                    if (get_player_status(check[0], check[1]) === "bad-chem") return false
                }
                
                return true        
                    
                }

                break

            case "4-1-3-2":
                var order = ['gk', 'cb1', 'cb2', 'lb', 'lm1', 'cm1', "rb", "rm1", "cm2", "st1", "st2"]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {

                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break

                        case 5:
                            checks = [[p4, [p5, p2]]]
                            break

                        case 6:
                            checks = [[p2, [p6, p4, p3, p1]]]
                            break

                        case 7:
                            checks = [[p3, [p6, p7, p2, p1]]]
                            break

                        case 8:
                            checks = [[p7, [p3, p8]]]
                            break

                        case 9:
                            checks = [[p6, [p2, p3, p5, p8, p9]]]
                            break

                        case 10:
                            checks = [[p5, [p4, p6, p9, p10]]]
                            break

                        case 11:
                            checks = [[p10, [p5, p9, p11]], [p11, [p10, p8, p9]], [p9, [p5, p6, p8, p10, p11]], [p8, [p6, p7, p9, p11]]]
                            break
            
                        default: 
                            return true
                    }
    
                for (check of checks) {
                    if (get_player_status(check[0], check[1]) === "bad-chem") return false
                }
                
                return true        
                    
                }

                break

            case "4-1-4-1":
                var order = ['gk', 'cb1', 'cb2', 'lb', 'lm1', 'cm1', 'st1', 'cm2', 'cm3', 'rm1', 'rb']
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {

                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break

                        case 5:
                            checks = [[p4, [p5, p2]]]
                            break

                        case 7:
                            checks = [[p5, [p4, p6, p7]]]
                            break

                        case 8:
                            checks = [[p2, [p8, p6, p4, p3, p1]]]
                            break

                        case 9:
                            checks = [[p6, [p2, p8, p9, p5, p7]], [p8, [p2, p3, p6, p9]]]
                            break

                        case 10:
                            checks = [[p9, [p3, p6, p8, p7, p10]], [p7, [p5, p6, p9, p10]]]
                            break

                        case 11:
                            checks = [[p3, [p9, p8, p11, p2, p1]], [p10, [p11, p9, p7]], [p11, [p3, p10]]]
                            break

                        default: 
                            return true
                        
                    }
    
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                
                    return true        
                        
                    }

                break

            case "4-2-3-1":
                var order = ["st1", "cam1", "cam2", "cam3", "cm1", "cm2", "lb", "cb1", "rb", "cb2", "gk"]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {

                        case 4:
                            checks = [[p1, [p2, p3, p4]]]
                            break

                        case 5:
                            checks = [[p2, [p5, p1, p3]]]
                            break

                        case 6:
                            checks = [[p3, [p5, p6, p2, p4, p1]], [p4, [p6, p3, p1]]]
                            break

                        case 8:
                            checks = [[p5, [p7, p8, p3, p2]], [p7, [p5, p8]]]
                            break

                        case 10:
                            checks = [[p6, [p10, p9, p3, p4]], [p9, [p10, p6]]]
                            break

                        case 11:
                            checks = [[p8, [p5, p7, p10, p11]], [p10, [p6, p9, p8, p11]], [p11, [p8, p10]]]
                            break

                            default: 
                            return true
                        
                    }
    
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                
                    return true        
                        
                    }

                break

            case "4-2-3-1 (2)":
                var order = ["gk", "cb1", "cb2", "cm1", "lb", "lm1", "cam1", "st1", "rm1", "cm2", "rb"]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {

                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break

                        case 5:
                            checks = [[p2, [p4, p5, p3, p1]]]
                            break

                        case 6:
                            checks = [[p5, [p6, p2, p4]]]
                            break

                        case 7:
                            checks = [[p4, [p5, p2, p6, p7]]]
                            break

                        case 8:
                            checks = [[p6, [p5, p4, p7, p8]]]
                            break

                        case 9:
                            checks = [[p8, [p6, p7, p9]]]
                            break

                        case 10:
                            checks = [[p7, [p6, p4, p10, p9, p8]]]
                            break

                        case 11:
                            checks = [[p10, [p3, p11, p9, p7]], [p3, [p1, p2, p11, p10]], [p9, [p11, p10, p7, p8]], [p11, [p3, p10, p9]]]
                            break

                        default: 
                            return true
                    }
    
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                
                    return true        
                        
                    }

                break

            case "4-2-2-2":
                var order = ['gk', 'cb1', 'cb2', 'lb', 'cam1', 'cm1', "st1", "cm2", "st2", "cam2", "rb"]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {

                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break
                         
                         case 5:
                            checks = [[p4, [p2, p5]]]
                            break
                         
                         case 6:
                            checks = [[p2, [p6, p4, p3, p1]]]
                            break
                         
                         case 7:
                            checks = [[p5, [p4, p6, p7]]]
                            break
                         
                         case 8:
                            checks = [[p6, [p2, p5, p8, p7]]]
                            break
                         
                         case 9:
                            checks = [[p7, [p6, p5, p9]]]
                            break
                         
                         case 10:
                            checks = [[p8, [p6, p3, p10, p9]], [p9, [p8, p7, p10]]]
                            break
                         
                         case 11:
                            checks = [[p3, [p1, p2, p11, p8]], [p10, [p11, p8, p9]], [p11, [p3, p10]]]
                            break
                        
                        default: 
                            return true
                    }
    
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                
                    return true        
                        
                    }

                break

            case "4-4-2":
                var order = ['gk', 'cb1', 'cb2', 'lb', 'lm1', 'cm1', "st1", "cm2", "st2", "rm1", "rb"]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {

                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break
                            
                            case 5:
                            checks = [[p4, [p2, p5]]]
                            break
                            
                            case 6:
                            checks = [[p2, [p6, p4, p3, p1]]]
                            break
                            
                            case 7:
                            checks = [[p5, [p4, p6, p7]]]
                            break
                            
                            case 8:
                            checks = [[p6, [p2, p5, p8, p7]]]
                            break
                            
                            case 9:
                            checks = [[p7, [p6, p5, p9]]]
                            break
                            
                            case 10:
                            checks = [[p8, [p6, p3, p10, p9]], [p9, [p8, p7, p10]]]
                            break
                            
                            case 11:
                            checks = [[p3, [p1, p2, p11, p8]], [p10, [p11, p8, p9]], [p11, [p3, p10]]]
                            break
                        
                        default: 
                            return true
                    }
    
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                
                    return true        
                        
                    }

                break

            case "4-4-2 (2)":
                var order = ['gk', 'cb1', 'cb2', 'lb', 'lm1', 'cm1', "st1", "cm2", "st2", "rm1", "rb"]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {

                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break
                            
                            case 5:
                            checks = [[p4, [p2, p5]]]
                            break
                            
                            case 6:
                            checks = [[p2, [p6, p4, p3, p1]]]
                            break
                            
                            case 7:
                            checks = [[p5, [p4, p6, p7]]]
                            break
                            
                            case 8:
                            checks = [[p6, [p2, p5, p8, p7]]]
                            break
                            
                            case 9:
                            checks = [[p7, [p6, p5, p9]]]
                            break
                            
                            case 10:
                            checks = [[p8, [p6, p3, p10, p9]], [p9, [p8, p7, p10]]]
                            break
                            
                            case 11:
                            checks = [[p3, [p1, p2, p11, p8]], [p10, [p11, p8, p9]], [p11, [p3, p10]]]
                            break
                        
                        default: 
                            return true
                    }
    
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                
                    return true        
                        
                    }

                break

            case "4-2-4":
                var order = [ 'gk', 'cb1', 'cb2', 'cm1', 'lb', 'lm1', "st1", "cm2", "st2", "rm1", "rb"]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {       
                        
                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break

                        case 5:
                            checks = [[p2, [p4, p5, p3, p1]]]
                            break

                        case 6:
                            checks = [[p5, [p2, p6, p4]]]
                            break

                        case 7:
                            checks = [[p6, [p5, p4, p7]]]
                            break

                        case 8:
                            checks = [[p4, [p5, p2, p8, p6, p7]]]
                            break

                        case 9:
                            checks = [[p7, [p6, p4, p9]]]
                            break

                        case 10:
                            checks = [[p9, [p7, p8, p10]]]
                            break

                        case 11:
                            checks = [[p3, [p1, p2, p11, p8]], [p8, [p3, p11, p4, p9, p10]], [p10, [p8, p9, p11]], [p11, [p3, p8, p10]]]
                            break

                              
                        default: 
                            return true
                    }
    
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                
                    return true        
                        
                    }

                break


            case "4-3-1-2":
                var order = ["gk", "cb1", "cb2", "lb", "cm1", "cm2", "st1", "cam1", "st2", "cm3", "rb"]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break
                        
                        case 5:
                            checks = [[p4, [p2, p5]]]
                            break
                
                        case 6:
                            checks = [[p2, [p1, p3, p4, p5, p6]]]
                            break
            
                        case 7:
                            checks = [[p5, [p2, p4, p6, p7]]]
                            break
            
                        case 9:
                            checks = [[p7, [p5, p8, p9]], [p8, [p7, p9, p6]]]
                            break
            
                        case 10:
                            checks = [[p6, [p5, p8, p10, p2, p3]], [p9, [p7, p8, p10]]]
                            break
            
                        case 11:
                            checks = [[p3,[p1, p2, p6, p10, p11]], [p10, [p9, p6, p3, p11]], [p11, [p3, p10]]]      
                            break
            
                        default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break

            
            case "4-3-2-1":
                var order = [ "lm1", "st1", "rm1", "cm1", "cm2", "cm3", "lb", "cb1", "cb2", "rb", "gk" ]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 3:
                            checks = [[p2, [p1, p3]]]
                            break
                         
                         case 5:
                            checks = [[p1, [p4, p5, p2]]]
                            break
                         
                         case 6:
                            checks = [[p5, [p4, p6, p1, p3]], [p3, [p5, p2, p6]]]
                            break
                         
                         case 8:
                            checks = [[p4, [p7, p8, p5, p1]], [p7, [p8, p4]]]
                            break
                         
                         case 10:
                            checks = [[p6, [p9, p10, p5, p3]], [p10, [p9, p6]]]
                            break
                         
                         case 11:
                            checks = [[p8, [p4, p7, p9, p11]], [p9, [p11, p8, p10, p6]], [p11, [p8, p9]]]
                            break

                            default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break

            case "4-3-3":
                var order =  [ "gk", "cb1", "cb2", "cm2", "lb", "rb", "cm1", "cm3", "st1", "lm1", "rm1" ]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break
                         
                         case 5:
                            checks = [[p2, [p4, p5, p3, p1]]]
                            break
                         
                         case 6:
                            checks = [[p3, [p1, p2, p6, p4]]]
                            break
                         
                         case 7:
                            checks = [[p5, [p2, p7]]]
                            break
                         
                         case 8:
                            checks = [[p6, [p3, p8]]]
                            break
                         
                         case 9:
                            checks = [[p4, [p2, p3, p7, p8, p9]]]
                            break
                         
                         case 10:
                            checks = [[p7, [p5, p4, p10]], [p10, [p7, p9]]]
                            break
                         
                         case 11:
                            checks = [[p8, [p6, p4, p11]], [p9, [p10, p11, p4]], [p11, [p9, p8]]]
                            break

                            default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break

            case "4-3-3 (2)":
                var order =   [ "gk", "cb1", "cb2", "cm2", "lb", "rb", "cm1", "cm3", "lm1", "st1", "rm1" ]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break
                         
                         case 5:
                            checks = [[p2, [p4, p5, p3, p1]]]
                            break
                         
                         case 6:
                            checks = [[p3, [p1, p2, p6, p4]]]
                            break
                         
                         case 7:
                            checks = [[p5, [p2, p7]]]
                            break
                         
                         case 8:
                            checks = [[p4, [p2, p3, p7, p8]], [p6, [p3, p8]]]
                            break
                         
                         case 10:
                            checks = [[p7, [p5, p4, p9, p8, p10]], [p9, [p7, p10]]]
                            break
                         
                         case 11:
                            checks = [[p8, [p7, p4, p6, p10, p11]], [p10, [p9, p11, p7, p8]], [p11, [p10, p8]]]
                            break

                            default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break

            case "4-3-3 (3)":
                var order =   [ "cm1", "lm1", "st1", "cm2", "rm1", "cm3", "lb", "cb1", "cb2", "rb", "gk"]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 3:
                            checks = [[p2, [p1, p3]]]
                            break
                         
                         case 5:
                            checks = [[p3, [p2, p5, p4]]]
                            break
                         
                         case 6:
                            checks = [[p4, [p3, p1, p6]], [p5, [p3, p6]]]
                            break
                         
                         case 8:
                            checks = [[p1, [p7, p8, p4, p2]], [p7, [p8, p1]]]
                            break
                         
                         case 10:
                            checks = [[p6, [p9, p10, p4, p5]], [p10, [p9, p6]]]
                            break
                         
                         case 11:
                            checks = [[p8, [p1, p7, p9, p11]], [p9, [p11, p8, p10, p6]], [p11, [p8, p9]]]
                            break

                            default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break

            case "4-3-3 (4)":
                var order =   [ "gk", "cb1", "cb2", "lb", "cm1", "lm1", "cam1", "st1", "cm2", "rb", "rm1" ]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break
                         
                         case 5:
                            checks = [[p2, [p5, p4, p3, p1]]]
                            break
                         
                         case 6:
                            checks = [[p4, [p2, p5, p6]]]
                            break
                         
                         case 7:
                            checks = [[p5, [p4, p2, p7, p6]]]
                            break
                         
                         case 8:
                            checks = [[p6, [p5, p8, p4]]]
                            break
                         
                         case 9:
                            checks = [[p7, [p8, p5, p9]]]
                            break
                         
                         case 10:
                            checks = [[p3, [p1, p2, p10, p9]]]
                            break
                         
                         case 11:
                            checks = [[p9, [p3, p10, p7, p11]], [p8, [p6, p11, p7]], [p10, [p3, p9, p11]], [p11, [p8, p9, p10]]]
                            break

                            default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break

            case "4-3-3 (5)":
                var order =  ["gk", "cb1", "cb2", "cm2", "lb", "rb", "cm1", "lm1", "st1", "cm3", "rm1"]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break
                         
                         case 5:
                            checks = [[p2, [p4, p5, p3, p1]]]
                            break
                         
                         case 6:
                            checks = [[p3, [p1, p2, p6, p4]]]
                            break
                         
                         case 8:
                            checks = [[p5, [p2, p7, p8]]]
                            break
                         
                         case 9:
                            checks = [[p7, [p5, p9, p4, p8]], [p8, [p7, p9, p5]]]
                            break
                         
                         case 10:
                            checks = [[p4, [p7, p10, p2, p3]]]
                            break
                         
                         case 11:
                            checks = [[p10, [p6, p9, p4, p11]], [p9, [p8, p7, p10, p11]], [p11, [p9, p10, p6]], [p6, [p3, p10, p11]]]
                            break

                            default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break

            case "4-4-1-1":
                var order =  ["gk", "cb1", "cb2", "lb", "cm1", "lm1", "st2", "st1", "cm2", "rb", "rm1"]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break
                         
                         case 5:
                            checks = [[p2, [p5, p4, p3, p1]]]
                            break
                         
                         case 6:
                            checks = [[p4, [p2, p6]]]
                            break
                         
                         case 7:
                            checks = [[p6, [p4, p7, p5]]]
                            break
                         
                         case 9:
                            checks = [[p5, [p2, p6, p8, p9]], [p8, [p5, p9, p7]]]
                            break
                         
                         case 10:
                            checks = [[p3, [p1, p2, p10, p9]]]
                            break
                         
                         case 11:
                            checks = [[p9, [p3, p8, p5, p11]], [p7, [p6, p8, p11]], [p11, [p10, p9, p7]], [p10, [p3, p11]]]
                            break

                            default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break
     
            case "4-4-1-1 (2)":
                var order =  ["gk", "cb1", "cb2", "lb", "cm1", "lm1", "st1", "cam1", "cm2", "rb", "rm1"]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break
                            
                            case 5:
                            checks = [[p2, [p5, p4, p3, p1]]]
                            break
                            
                            case 6:
                            checks = [[p4, [p2, p6]]]
                            break
                            
                            case 7:
                            checks = [[p6, [p4, p7, p5]]]
                            break
                            
                            case 9:
                            checks = [[p5, [p2, p6, p8, p9]], [p8, [p5, p9, p7]]]
                            break
                            
                            case 10:
                            checks = [[p3, [p1, p2, p10, p9]]]
                            break
                            
                            case 11:
                            checks = [[p9, [p3, p8, p5, p11]], [p7, [p6, p8, p11]], [p11, [p10, p9, p7]], [p10, [p3, p11]]]
                            break

                            default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break
    
            case "4-5-1":
                var order =  ["gk", "cb1", "cb2", "cm1", "lb", "rb", "lm1", "rm1", "cam1", "cam2", "st1" ]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 3:
                            checks = [[p1, [p2, p3]]]
                            break
                         
                         case 5:
                            checks = [[p2, [p4, p5, p3, p1]]]
                            break
                         
                         case 6:
                            checks = [[p3, [p1, p2, p6, p4]]]
                            break
                         
                         case 7:
                            checks = [[p5, [p2, p7]]]
                            break
                         
                         case 8:
                            checks = [[p6, [p3, p8]]]
                            break
                         
                         case 9:
                            checks = [[p7, [p5, p9]]]
                            break
                         
                         case 10:
                            checks = [[p4, [p2, p3, p9, p10]], [p8, [p6, p10]]]
                            break
                         
                         case 11:
                            checks = [[p9, [p7, p4, p10, p11]], [p10, [p11, p9, p4, p8]], [p11, [p10, p9]]]
                            break

                            default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break
    
            case "4-5-1 (2)":
                var order =  ["lb", "lm1", "cb1", "cm1", "st1", "cm2", "cb2", "gk", "cm3", "rb", "rm1" ]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 4:
                            checks = [[p1, [p3, p2, p4]]]
                            break
                         
                         case 5:
                            checks = [[p2, [p1, p4, p5]]]
                            break
                         
                         case 6:
                            checks = [[p4, [p2, p1, p3, p6]]]
                            break
                         
                         case 8:
                            checks = [[p3, [p6, p4, p1, p7, p8]], [p8, [p3, p7]]]
                            break
                         
                         case 9:
                            checks = [[p6, [p5, p4, p9, p3, p7]]]
                            break
                         
                         case 10:
                            checks = [[p7, [p8, p3, p10, p6, p9]]]
                            break
                         
                         case 11:
                            checks = [[p9, [p6, p7, p10, p11]], [p5, [p2, p6, p11]], [p11, [p5, p9, p10]], [p10, [p7, p9, p11]]]
                            break

                            default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break
    
            case "5-2-1-2":
                var order = ["gk", "cb1", "cb2", "cb3", "lb", "rb", "cm1", "cm2", "cam1", "st1", "st2" ]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 4:
                            checks = [[p1, [p2, p3, p4]]]
                            break
                         
                         case 5:
                            checks = [[p2, [p5, p3, p1]]]
                            break
                         
                         case 6:
                            checks = [[p4, [p6, p3, p1]]]
                            break
                         
                         case 7:
                            checks = [[p5, [p2, p7]]]
                            break
                         
                         case 8:
                            checks = [[p3, [p7, p8, p2, p4, p1]], [p6, [p4, p8]]]
                            break
                         
                         case 10:
                            checks = [[p7, [p5, p9, p8, p3, p10]]]
                            break
                         
                         case 11:
                            checks = [[p8, [p11, p9, p7, p3, p6]], [p9, [p10, p11, p7, p8]], [p10, [p11, p9, p7]], [p11, [p9, p8, p10]]]
                         
                            break

                            default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break
    
            case "5-2-2-1":
                var order = ["gk", "cb1", "cb2", "cb3", "lb", "rb", "cm1", "cm2", "lm1", "st1", "rm1" ]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 4:
                            checks = [[p1, [p2, p3, p4]]]
                            break
                         
                         case 5:
                            checks = [[p2, [p5, p3, p1]]]
                            break
                         
                         case 6:
                            checks = [[p4, [p6, p3, p1]]]
                            break
                         
                         case 8:
                            checks = [[p3, [p7, p8, p2, p4, p1]]]
                            break
                         
                         case 9:
                            checks = [[p5, [p2, p7, p9]]]
                            break
                         
                         case 10:
                            checks = [[p9, [p10, p7, p5]], [p7, [p9, p10, p8, p5, p3]]]
                            break
                         
                         case 11:
                            checks = [[p8, [p10, p11, p7, p3, p6]], [p10, [p9, p7, p8, p11]], [p11, [p6, p8, p10]], [p6, [p4, p8, p11]]]
                         
                            break

                            default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break
    
            case "5-3-2":
                var order = ["cm1", "lb", "cb1", "cb2", "gk", "cb3", "cm2", "st1", "st2", "cm3", "rb" ]
                var infoList = get_infoList(order)

        
                var checks
                var check_req_status = (putted_id) => {
            
                    switch(putted_id) {
            
                        case 3:
                            checks = [[p2, [p3, p1]]]
                            break
                         
                         case 5:
                            checks = [[p3, [p2, p4, p5, p1]]]
                            break
                         
                         case 6:
                            checks = [[p5, [p3, p4, p6]]]
                            break
                         
                         case 7:
                            checks = [[p4, [p7, p3, p6, p5]]]
                            break
                         
                         case 8:
                            checks = [[p1, [p2, p3, p7, p8]]]
                            break
                         
                         case 9:
                            checks = [[p8, [p1, p7, p9]]]
                            break
                         
                         case 10:
                            checks = [[p7, [p8, p9, p1, p10, p4]], [p9, [p10, p7, p8]]]
                            break
                         
                         case 11:
                            checks = [[p6, [p11, p4, p5, p10]], [p10, [p9, p7, p6, p11]], [p11, [p6, p10]]]
                            break

                            default: 
                            return true
                    }
        
                    for (check of checks) {
                        if (get_player_status(check[0], check[1]) === "bad-chem") return false
                    }
                    
                    return true        
                        
                }

                break
    
            case "5-4-1":
            var order = ["gk", "cb1", "cb2", "cb3", "lb", "rb", "cm1", "cm2", "lm1", "st1", "rm1" ]
            var infoList = get_infoList(order)

    
            var checks
            var check_req_status = (putted_id) => {
        
                switch(putted_id) {
        
                    case 4:
                        checks = [[p1, [p2, p3, p4]]]
                        break
                        
                        case 5:
                        checks = [[p2, [p5, p3, p1]]]
                        break
                        
                        case 6:
                        checks = [[p4, [p6, p3, p1]]]
                        break
                        
                        case 8:
                        checks = [[p3, [p7, p8, p2, p4, p1]]]
                        break
                        
                        case 9:
                        checks = [[p5, [p2, p7, p9]]]
                        break
                        
                        case 10:
                        checks = [[p9, [p10, p7, p5]], [p7, [p9, p10, p8, p5, p3]]]
                        break
                        
                        case 11:
                        checks = [[p8, [p10, p11, p7, p3, p6]], [p10, [p9, p7, p8, p11]], [p11, [p6, p8, p10]], [p6, [p4, p8, p11]]]
                        
                        break

                        default: 
                        return true
                }
    
                for (check of checks) {
                    if (get_player_status(check[0], check[1]) === "bad-chem") return false
                }
                
                return true        
                    
            }

            break


            case "3-5-2":
                var order = ["st1", "st2", "cam1", "lm1", "rm1", "cm1", "cm2", "cb1", "cb2", "cb3", "gk"]
                var infoList = get_infoList(order)

                var checks
                var check_req_status = (putted_id) => {
            
                switch(putted_id) {
        
                    case 4:
                        checks = [[p1, [p2, p3, p4]]]
                        break
                    
                    case 5:
                        checks = [[p2, [p1, p3, p5]]]
                        break
            
                    case 7:
                        checks = [[p3, [p1, p2, p6, p7]]]
                        break
        
                    case 8:
                        checks = [[p4, [p8, p6, p1]]]
                        break
        
                    case 9:
                        checks = [[p6, [p3, p4, p7, p8, p9]]]
                        break
        
                    case 10:
                        checks = [[p5, [p10, p7, p2]], [p7, [p9, p6, p10, p3, p5]]]
                        break
        
                    case 11:
                        checks = [[p8,[p4, p6, p9, p11]], [p9, [p6, p7, p8, p10, p11]], [p10, [p5, p7, p9, p11]], [p11, [p8, p9, p10]] ]      
                        break
        
                    default: 
                        return true
                }
    
                for (check of checks) {
                    if (get_player_status(check[0], check[1]) === "bad-chem") return false
                }
                


                return true        
                    
            }

            break
        

        }


        


        var first_spot = infoList.find((e) => {
            return e.pos === order[0]
        })

        var second_spot = infoList.find((e) => {
            return e.pos === order[1]
        })

        var third_spot = infoList.find((e) => {
            return e.pos === order[2]
        })

        var fourth_spot = infoList.find((e) => {
            return e.pos === order[3]
        })

        var fifth_spot = infoList.find((e) => {
            return e.pos === order[4]
        })

        var sixth_spot = infoList.find((e) => {
            return e.pos === order[5]
        })

        var seventh_spot = infoList.find((e) => {
            return e.pos === order[6]
        })

        var eighty_spot = infoList.find((e) => {
            return e.pos === order[7]
        })

        var nineth_spot = infoList.find((e) => {
            return e.pos === order[8]
        })

        var tenth_spot = infoList.find((e) => {
            return e.pos === order[9]
        })

        var eleventh_spot = infoList.find((e) => {
            return e.pos === order[10]
        })


        // yukarısı daha basitleştirilebilir.



        var final = []

        var epoch = 1

        var startDate = new Date();
        var max_wait_time = 30023423423


        
    
        
        

        while (true) {

            appendAccording(current_GK_, GK_)
            appendAccording(current_LB_, LB_)
            appendAccording(current_CB1_, CB1_)
            appendAccording(current_CB2_, CB2_)
            appendAccording(current_CB3_, CB3_)
            appendAccording(current_RB_, RB_)
            appendAccording(current_LM1_, LM1_)
            appendAccording(current_LM2_, LM2_)
            appendAccording(current_CM1_, CM1_)
            appendAccording(current_CM2_, CM2_)
            appendAccording(current_CM3_, CM3_)
            appendAccording(current_CM4_, CM4_)
            appendAccording(current_CM5_, CM5_)
            appendAccording(current_CM6_, CM6_)
            appendAccording(current_RM1_, RM1_)
            appendAccording(current_RM2_, RM2_)
            appendAccording(current_CAM1_, CAM1_)
            appendAccording(current_CAM2_, CAM2_)
            appendAccording(current_CAM3_, CAM3_)
            appendAccording(current_ST1_, ST1_)
            appendAccording(current_ST2_, ST2_)
           
            //yukarısı daha iyileştirilebilir.


            var current_full_squad = []


            // dinamik stuff time

            for (var p1 of first_spot.current_all_players){
           
                for (var p2 of second_spot.current_all_players){
                    current_full_squad = [p1]

                    if(canAddThis(current_full_squad, p2) === false) continue
 

                    for (var p3 of third_spot.current_all_players){
                        current_full_squad = [p1, p2]

                        if(get_current_duration(startDate) > max_wait_time) break
                        if(canAddThis(current_full_squad, p3) === false) continue
                        
                        if (check_req_status(3) === false) continue
                        


                        for (var p4 of fourth_spot.current_all_players) {
                            current_full_squad = [p1, p2, p3]

                            if(canAddThis(current_full_squad, p4) === false) continue

                            if (check_req_status(4) === false) continue



                            for (var p5 of fifth_spot.current_all_players) {
                                current_full_squad = [p1, p2, p3, p4]

                                if(canAddThis(current_full_squad, p5) === false) continue

                                if (check_req_status(5) === false) continue

                                
                                
                                for (var p6 of sixth_spot.current_all_players) {
                                    current_full_squad = [p1, p2, p3, p4, p5]

                                    if(get_current_duration(startDate) > max_wait_time) break
                                    if(canAddThis(current_full_squad, p6) === false) continue

                                    if (check_req_status(6) === false) continue
                                    

                                    for (var p7 of seventh_spot.current_all_players) {
                                        current_full_squad = [p1, p2, p3, p4, p5, p6]

                                        if(canAddThis(current_full_squad, p7) === false) continue

                                        if (check_req_status(7) === false) continue


                                        
                                        for (var p8 of eighty_spot.current_all_players) {
                                            current_full_squad = [p1, p2, p3, p4, p5, p6, p7]

                                            if(canAddThis(current_full_squad, p8) === false) continue

                                            if (check_req_status(8) === false) continue


                                            for (var p9 of nineth_spot.current_all_players) {
                                                current_full_squad = [p1, p2, p3, p4, p5, p6, p7, p8]

                                                if(get_current_duration(startDate) > max_wait_time) break
                                                if(canAddThis(current_full_squad, p9) === false) continue

                                                if (check_req_status(9) === false) continue

    

                                                for (var p10 of tenth_spot.current_all_players) {
                                                    current_full_squad = [p1, p2, p3, p4, p5, p6, p7, p8, p9]

                                                    if(canAddThis(current_full_squad, p10) === false) continue

                                                    if (check_req_status(10) === false) continue

                                                    

                                                    for (var p11 of eleventh_spot.current_all_players) {
                                                        current_full_squad = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]

                                                        if(canAddThis(current_full_squad, p11) === false) continue

                                                        if (check_req_status(11) === false) continue
                                                        
                                                        
                                                        current_full_squad = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11]
                                                        

                                                        let squat_rating = get_squad_value(current_full_squad, order)

                                                        let my_squad_object = {squad:current_full_squad, squad_rating:squat_rating }

                                                        if (canEnterTop100(my_squad_object, final)) {
                                                            var skip=0
                                                            for (sq of final) {
                                                                if(is_very_different_sq(sq.squad, my_squad_object.squad) == false){
                                                                    skip=1
                                                                    break
                                                                }
                                                             
                                                            }

                                                            if (skip===0) {
                                                                
                                                                //var fixed_squad = fix_this_squad(current_full_squad)

                                                                final.push(my_squad_object)
                                                                final = sortByKey(final, "squad_rating").reverse().slice(0,100)
                                                            }
                                                        
                                                        }

                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }


            if(get_current_duration(startDate) > max_wait_time) {
                console.log("Your time counter has ended.")
                break

            }

            else {
                console.log("Epoch done: " + epoch.toString() + " | Duration: " + get_current_duration(startDate).toString() + " | Found: " + final.length.toString())
            
                epoch++
                
                if (final.length > 0 && max_wait_time > 600) {
                    //let answer = confirm(final.length.toString() + " squad found. Click \"OK\" if you want to stop searching further.")
                    let answer = true
                    if (answer === true) {
                        break
                    }
                }
                
            }
        

        }

        console.log(final.length.toString() + " best sorted squad found.")

        document.querySelector(".loading-area").style.display = "none";
        document.querySelector(".some-form-stuff").style.display = "block"
        continue_button.style.display = "block"

        // sergieleme time ??

        continue_button.style.display = "none"
        found_squads_title.style.display = "block"




        i=0

        while(i<final.length){

            let current_squad = final[i] //includes squad: and squad_rating      

            let my_ids = []

            for (player of current_squad.squad) {
                my_ids.push(player.player_ID)
            }

            let players_url_string = my_ids.join("-")

            let one_squad_area = document.createElement("a")

            one_squad_area.className = "one-squad-line"
            one_squad_area.target = "_blank"
    

            one_squad_area.href = "/show-squad?formation=" + chosen_formation + "&players=" + players_url_string

            document.querySelector(".all-single-squads").appendChild(one_squad_area)

            let squad_rating_box = document.createElement("div")
            squad_rating_box.className = "squad-rating-area"
            squad_rating_box.innerHTML = "+" + parseInt(final[i].squad_rating).toString()
            one_squad_area.appendChild(squad_rating_box)

            let full_kadro_box = document.createElement("div")
            full_kadro_box.className = "kadro"

            let isimler_string = ""

            for (pl_obj of final[i].squad){
                isimler_string+=pl_obj.card_name + ", "
            }

            full_kadro_box.innerHTML = isimler_string.slice(0, -1); 

            one_squad_area.appendChild(full_kadro_box)


            let formation_box = document.createElement("div")
            formation_box.className = "inline-boi"
            formation_box.id = "formation-display"
            formation_box.innerHTML = chosen_formation
            one_squad_area.appendChild(formation_box)


            let nation_league_box = document.createElement("div")
            nation_league_box.className = "inline-boi"
            nation_league_box.id = "nation-league"
            nation_league_box.innerHTML = get_nation_league_count(current_squad.squad)
            one_squad_area.appendChild(nation_league_box)


            let icon_box = document.createElement("div")
            icon_box.className = "inline-boi"
            icon_box.id = "icon-count"
            icon_box.innerHTML = get_icon_count(current_squad.squad).toString() + " Icons"
            one_squad_area.appendChild(icon_box)


            let avg_box = document.createElement("div")
            avg_box.className = "inline-boi"
            avg_box.id = "avg-rating"
            avg_box.innerHTML = get_avg_rating(current_squad.squad)
            one_squad_area.appendChild(avg_box)


            let price_box = document.createElement("div")
            price_box.className = "price"
            
            let coins_img = document.createElement("img")
            //coins_img.src = "https://s3.eu-central-1.amazonaws.com/images.gamesatis.com/user_infos/avatars/000/259/027/original/ersno.png"
            coins_img.src = "https://www.digiseller.ru/preview/152200/p1_2519953_ef4d4dbd.png"
            price_box.appendChild(coins_img)

            let ex_div = document.createElement("div")
            ex_div.innerHTML = numberWithCommas(get_price(current_squad.squad))
            price_box.appendChild(ex_div)

            one_squad_area.appendChild(price_box)

            i++


        }
        
        
          
            

    })
        
}


generate_squads()




const get_infoList = (order) => {
    var infoList = []

    for (position of order) {
        infoList.push({
            pos:position,
            all_players:window[position.toUpperCase() + "_"],
            current_all_players:window["current_" + position.toUpperCase() + "_"]
            
        })

    }

    return infoList
}

    



















