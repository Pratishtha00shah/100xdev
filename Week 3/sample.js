const app = express();

function userMiddleware(req,res,next) {
    if (username != "pratishtha" && password != "pass") {
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else {
        next();
    }
};

function KidneyMiddleware(req,res,next) {
    if (kidneyId != 1 && kidneyId  != 2) {
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else {
        next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req,res) {
    //do somethiing with the kidney here

    res.send("Your heart is healthy");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, function(req,res) {
    //do something withethe kidney here

    res.send("Your heart is healthy");
});

app.get("/heart-check", userMiddleware, kidneyMiddleware, function(req,res) {
    //do something withethe kidney here

    res.send("Your heart is healthy");
});

