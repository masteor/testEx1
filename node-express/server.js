// Create express app
const express = require("express");
// const bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
const MoexAPI = require("moex-api");
const moexApi = new MoexAPI();

let lastDollar = 0

moexApi.securityMarketData("USD000UTSTOM").then((security) => {
    lastDollar = security.node.last
    console.log(lastDollar); // e.g. 64.04

    // console.log(security);
});



/*var whitelist = ['http://localhost:8081']

var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}*/

// Server port
var HTTP_PORT = 8000

// Start server

app.use(cors())
// app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(express.json());


app.post("/", (req, res) => {
    console.log("/");
});

// Root endpoint
app.post("/api/receive", (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')
    console.log("/api/receive");
    console.log(req.body);
    /**
     * @type {[]}
     */
    const data = req.body.data
    data.forEach(v => {
        v.val += lastDollar
    })

    console.log(data)

    res.send(JSON.stringify(data));
});

/*app.use(function(req, res){
    res.status(404);
});*/

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});