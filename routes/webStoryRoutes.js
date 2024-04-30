// routes/webStoryRoutes.js
const express = require('express');
const multer = require('multer');
const router = express.Router();
const WebStory = require('../models/WebStory');

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Create a new web story
router.post('/create-web-stories', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }]), (req, res) => {
    const { title, content, category } = req.body;
    const image = req.files['image'] ? req.files['image'][0].path : null;
    const video = req.files['video'] ? req.files['video'][0].path : null;

    const newWebStory = new WebStory({
        title,
        content,
        category,
        image,
        video,
    });

    newWebStory.save()
        .then(webStory => res.status(201).json(webStory))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Read all web stories
router.get('/get-all-web-stories', (req, res) => {
    WebStory.find()
        .then(webStories => res.status(200).json(webStories))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Read a single web story by ID
router.get('/get-web-story/:id', (req, res) => {
    WebStory.findById(req.params.id)
        .then(webStory => {
            if (!webStory) {
                return res.status(404).json({ message: 'Web story not found' });
            }
            res.status(200).json(webStory);
        })
        .catch(err => res.status(400).json({ error: err.message }));
});

// Update a web story by ID
router.put('/update-web-story/:id', (req, res) => {
    WebStory.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(webStory => {
            if (!webStory) {
                return res.status(404).json({ message: 'Web story not found' });
            }
            res.status(200).json(webStory);
        })
        .catch(err => res.status(400).json({ error: err.message }));
});

// Delete a web story by ID
router.delete('/delete-web-story/:id', (req, res) => {
    WebStory.findByIdAndDelete(req.params.id)
        .then(webStory => {
            if (!webStory) {
                return res.status(404).json({ message: 'Web story not found' });
            }
            res.status(200).json({ message: 'Web story deleted successfully' });
        })
        .catch(err => res.status(400).json({ error: err.message }));
});

module.exports = router;
