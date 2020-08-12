const config = require("../config/dev");
const mongoose = require("mongoose");

require("./models/portfolio");

exports.connect = () => {
    return mongoose.connect(
        config.DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        },
        (e) => {
            if (e) {
                console.error(e);
            } else {
                console.log("connected to mongo db");
            }
        }
    );
};
