import express from 'express'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postsControllers'
import { getTodaysDate } from '../helper functions/date'
import { generateContentId } from '../helper functions/genContentID'

export const router = express.Router()

// get all posts
router.get("/", async function(req, res, next){
    res.send( await getPosts().then(results => results))
})

// get a single post
router.get("/post/:content_id", async function(req, res, next){ 
    res.send(await getPost(req.params.content_id).then((results) => results)
    )
})

// create a new post
router.post("/create", function(req, res, next){
    createPost(req.body["title"],req.body["author"],req.body["content"], getTodaysDate(), generateContentId())})

// edit a post
router.post("/edit/:content_id", async function(req, res, next){
    await updatePost(req.body["title"], req.body["author"], req.body["content"], req.body["publish_date"], req.params.content_id)
})

// delete a post
router.post("/delete/:content_id", async function(req, res, next){
    await deletePost(req.params.content_id)
})