const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
    welcomeText : {
        type: String,
        required: true
    },
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    caption : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
});

const aboutSchema = new mongoose.Schema({
    description1 : {
        type: String,
        required : true,
    },
    description2 : {
        type: String,
        required : true,
    },
    lottieURL : {
        type: String,
        required : true,
    },
    skills : {
        type: Array,
        required : true,
    }
});

const activitySchema = new mongoose.Schema({
    title : {
        type: String,
        required : true,
    },
    year : {
        type: String,
        required : true,
    },
    place : {
        type: String,
        required : true,
    },
    description : {
        type: String,
        required : true,
    },
});

const projectsSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true,
    },
    link : {
        type: String,
        required : true,
    },
    description : {
        type: String,
        required : true,
    },
    technologies : {
        type: Array,
        required : true,
    }
});

const contactSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
    },
    age : {
        type: String,
        required : true,
    },
    gender : {
        type: String,
        required : true,
    },
    email : {
        type: String,
        required : true,
    },
    mobile : {
        type: String,
        required : true,
    },
    address : {
        type: String,
        required : true,
    }
});

module.exports = {
    Intro : mongoose.model("intros",introSchema),
    About : mongoose.model("abouts",aboutSchema),
    Activity : mongoose.model("activities",activitySchema),
    Project : mongoose.model("projects",projectsSchema),
    Contact : mongoose.model("contacts",contactSchema),
}