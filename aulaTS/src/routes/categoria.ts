import Router from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.json({ message: "Categoria" })
})

export default router