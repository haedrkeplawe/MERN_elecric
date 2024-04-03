require("dotenv").config()

const mongoose = require("mongoose")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const cors = require("cors")

app.use(express.json())
app.use(cors())


app.use('/user', require('./server/routes/admin'));
app.use('/exams', require('./server/routes/quest'));

mongoose
    .connect(
        process.env.MONGO_URI
    )
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });