const config = require("../config/dev");
const mongoose = require("mongoose");

const fakeDb = require("./FakeDb");

mongoose.connect(
    config.DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    async (e) => {
        if (e) {
            console.error(e);
        } else {
            console.log("Starting db population.");
            await fakeDb.populate();
            await mongoose.connection.close();
            console.log("db has been populated");
        }
    }
);
