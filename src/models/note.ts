import { InferSchemaType, model, Schema } from "mongoose"

//criando schema (modelo de dado que será aceito pelo banco de dados)
const noteSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String },
}, { timestamps: true })

//criando o elemento com o modelo acima
type Note = InferSchemaType<typeof noteSchema>

//nota: Podemos relacionar o Schema a um Tipo do typescript, e depois a utilização do mesmo no elemento abaixo
export default model<Note>("Note", noteSchema)