import express from 'express'
import { getPosts } from './src/firebase/firestore'

const app = express()
const PORT = 8000
app.get('/', async (req, res) => res.send( await getPosts().then(results => results)))
app.listen(PORT, () => {
    console.log(`⚡[server]: is running at https://localhost:${PORT}⚡`)
})