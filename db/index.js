const mongoose = require('mongoose');
const url = "mongodb+srv://bhanu_admin:vHrnp1Rm8j0zG9Uq@cluster0.jdfcn.mongodb.net/?retryWrites=true&w=majority"

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('db is connected!')
    })
    .catch((ex) => {
        console.log('db connection failed: ', ex)
    })