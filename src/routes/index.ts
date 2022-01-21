import express from 'express'
import { getPosts } from '../firebase/firestore'

export const router = express.Router()

// get all posts
router.get("/", async function(req, res, next){
    res.send( await getPosts().then(results => results))
})

// get a single post
router.get("/post/:content_id", function(req, res, next){ res.send("Sparta")})

// create a new post
router.post("/create")

// edit a post
router.post("/edit/:content_id")

// delete a post
router.post("/delete/:content_id")