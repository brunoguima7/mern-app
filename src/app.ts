import express from "express"
import NoteModel from "./models/note"

const app = express()

app.get("/", async (req, res) => {
    try {
        //NoteModel veio como o export default do nosso model, junto a uma promisse e uma função específica do mongoose para encontrar os elementos no banco de dados
        const notes = await NoteModel.find().exec()

        //o mesmo que "res.(notes)", porém adicionando status de sucesso e transformando ele explicitamente em formato json
        res.status(200).json(notes)
    } catch (error) {
        //Á FAZER
    }
});

export default app