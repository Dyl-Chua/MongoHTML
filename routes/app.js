router.get("/edit", (req,res) => {
    console.log(User.ordertaken)
    res.render("/",{
        ordertaken: User.ordertaken 
   
    })
})

router.post("/editconfirm", (req,res) => {
    console.log(User._id)
    User.findByIdAndUpdate({_id: User._id}, {
        name: req.body.name,
        icNumber: req.body.icNumber,
        dob: req.body.dob,
        kampong: req.body.address_1,
        jalan: req.body.address_2,
        simpang: req.body.address_3,
        house_Number: req.body.address_4,
        contact_1: req.body.contact_1,
        contact_2: req.body.contact_2,
        bruhims: req.body.bruhims,
        pay_MOH: req.body.radioMOH,
        jpmc: req.body.jpmc,
        pay_JPMC: req.body.radioJPMC,
        panaga: req.body.panaga,
        pay_PHC: req.body.radioPHC,
        ordertaken: req.body.ordertaken
    }, (err,users) => {
        if(err){
            console.log(err)
            res.render("error")
        } 
        else res.render("editconfirm")
    })
})
