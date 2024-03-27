import express from 'express'

const app = express()
app.use(express.json())

interface Lembrete {
    id: string;
    texto: string
}
const lembretes: Record <string, Lembrete> = {}
let id = '1'

app.get('/lembretes', (req, res) => {
    res.json(lembretes)
})

app.post('/lembretes', (req, res) => {
    const { texto } = req.body
    const lembrete = { id, texto }
    lembretes[id] = lembrete
    id = (+id + 1).toString()
    res.json(lembrete)
})

const port = 4000
app.listen(port, () => console.log(`Lembretes. Porta ${port}.`))