const router = require("express").Router();
const {Intro,About,Project,Contact,Activity} = require("../models/portfolioModel.js");

const User = require("../models/userModel");
router.get("/get-portfolio-data", async(req,res)=>{
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const activities = await Activity.find();
        const contacts = await Contact.find();

        res.status(200).send({
            intro : intros[0],
            about : abouts[0],
            projects : projects,
            contact : contacts[0],
            activities : activities,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/update-intro", async (req,res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new: true}
        );
        res.status(200).send({
            data : intro,
            success : true,
            message : "Intro updated succesfully"
        });
    } catch (error) {
        res.status(500).send(error);

    }
});

router.post("/update-about", async (req,res) => {
    try {
        const about = await About.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new: true}
        );
        res.status(200).send({
            data : about,
            success : true,
            message : "About updated succesfully"
        });
    } catch (error) {
        res.status(500).send(error);

    }
});

router.post("/add-activity", async (req,res) => {
    try {
        const activity = new Activity(req.body);
        await activity.save();
        res.status(200).send({
            data : activity,
            success : true,
            message : "Activity added succesfully"
        });
    } catch (error) {
        res.status(500).send(error);

    }
});

router.post("/update-activity", async (req,res) => {
    try {
        const activity = await Activity.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new: true}
        );
        res.status(200).send({
            data : activity,
            success : true,
            message : "Activity updated succesfully"
        });
    } catch (error) {
        res.status(500).send(error);

    }
});

router.post("/delete-activity", async (req,res) => {
    try {
        const activity = await Activity.findOneAndDelete({_id: req.body._id});
        res.status(200).send({
            data : activity,
            success : true,
            message : "Activity deleted succesfully"
        });
    } catch (error) {
        res.status(500).send(error);

    }
});

router.post("/add-project", async (req,res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data : project,
            success : true,
            message : "Project added succesfully"
        });
    } catch (error) {
        res.status(500).send(error);

    }
});

router.post("/update-project", async (req,res) => {
    try {
        const project = await Project.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new: true}
        );
        res.status(200).send({
            data : project,
            success : true,
            message : "Project updated succesfully"
        });
    } catch (error) {
        res.status(500).send(error);

    }
});

router.post("/delete-project", async (req,res) => {
    try {
        const project = await Project.findOneAndDelete({_id: req.body._id});
        res.status(200).send({
            data : project,
            success : true,
            message : "Project deleted succesfully"
        });
    } catch (error) {
        res.status(500).send(error);

    }
});

router.post("/update-contact", async (req,res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new: true}
        );
        res.status(200).send({
            data : contact,
            success : true,
            message : "Contact updated succesfully"
        });
    } catch (error) {
        res.status(500).send(error);

    }
});

router.post("/admin-login", async (req,res) => {
    try {
        const user = await User.findOne({
            username : req.body.username,
            password : req.body.password
        });
        user.password = "";
        if(user){
            res.status(200).send({
                data: user,
                success: true,
                message: "Login successfully",
            });
        }
        else{
            res.status(200).send({
                data: user,
                success: false,
                message: "Invalid username or password",
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = router;