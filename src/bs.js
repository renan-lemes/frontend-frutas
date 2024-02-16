const mongoose = require("mongoose")

require("dotenv").config()

async function main() {
    await mongoose.connect(
        `mongodb+srv://${process.env.USER}:${process.env.USER_SENHA}@cluster0.jqkcuok.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("Conectado com sucesso!")
}

main().catch((err => {
    console.log(err)
}))

module.exports = main;