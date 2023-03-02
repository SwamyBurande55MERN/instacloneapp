const express = require("express");
const Posts = require("./postModels");
const bodyParser = require("body-parser");
const cors = require("cors");                               // All imports needs to be done @top.
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const router = express.Router();                            // instead of app.methods() => router.methods()..


router.use(bodyParser.json());                              //returns middleware that only parses JSON
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cors("*"));                                      //Cross-Origin Resource Sharing
router.use(fileUpload({
    useTempFiles: true
}))

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});

router.post("/posts", async (req, res) => {                // asynchronous
    try {
        cloudinary.uploader.upload(req.files.image.tempFilePath, async (err, result) => {
            await Posts.create({                           // await
                author: req.body.author,
                location: req.body.location,
                description: req.body.description,
                image: result.url,
                date: req.body.date
            });
        })
    } catch (error) {                                      //try - catch
        console.log(error);
    }
})

router.get("/", async (req, res) => {
    try {
        let data = await Posts.find();
        data = data.reverse()
        res.json(data);
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;                                   //clear