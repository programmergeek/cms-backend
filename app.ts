import express from 'express'
import { getPosts } from './src/firebase/firestore'
import { router } from './src/routes'

const app = express()
const PORT = 8000
app.use('/', router)
app.listen(PORT, () => {
    console.log(`⚡[server]: is running at https://localhost:${PORT}⚡`)
})