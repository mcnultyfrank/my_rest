const express = require('express')
const router = express.Router();
const Post = require('../models/Post');


router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (err) {
        res.json({message:err})
    }
});

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(404)
    })
})

//Get post by id 

router.get('/:postId', async (req, res) => {
    try {
        res.json(await Post.findById(req.params.postId))
    } catch (err) {
        res.json({ message: err })
        
    }
})


module.exports = router;