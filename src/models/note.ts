import { InferSchemaType, model, Schema } from "mongoose"

//criando schema (modelo de dado que será aceito pelo banco de dados)
const noteSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String },
}, { timestamps: true })

//criando o elemento com o modelo acima
type Note = InferSchemaType<typeof noteSchema>

//nota: Podemos relacionar o Schema a um Tipo do typescript, e depois a utilização do mesmo no elemento abaixo
const NoteModel = model<Note>("Note", noteSchema)

export default NoteModel