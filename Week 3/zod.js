const express = require( "express");
const zod = require( "zod" )
const app = express();

const schema = zod. array(zod.number());
app.use(express.json());

app.post("/health-checkup", function(req,res) {
    //kidney =[1,2]
    constkidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    res.send({
        response
    })

});

app. listen (3000);