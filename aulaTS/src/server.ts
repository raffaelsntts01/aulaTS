// importando as bibliotecas express
import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json())

app.use(routes)

const PORT = 3001

app.listen(PORT, () => {

    console.log(`Iniciando projeto na porta ${PORT}`)
})
