const express = require("express");
const server = express();
// const { connect } = require("./db");
const bodyParser = require("body-parser");

const startServer = async () => {
    await require("./db").connect();

    server.use(bodyParser.json());
    // creating an endpoint - an entrypoint to our server
    server.use("/api/v1/portfolios", require("./routes/portfolios"));
    // server.get("/api/v1/portfolios", (req, res) => {
    //     return res.json({ data: [1, 2, 3, 4] });
    // });

    const PORT = parseInt(process.env.PORT, 10) || 3001;
    server.listen(PORT, (e) => {
        if (e) console.error(e);
        console.log("server up on port" + PORT);
    });
};

startServer();
