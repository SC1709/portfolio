const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const dbConfig = require("./config/dbConfig");

const portfolioRoute = require("./routes/portfolioRoute");
const cors = require('cors');
app.use(cors({
  origin: 'https://sachin-choudhary.onrender.com'
}));
app.use(express.json());
app.use("/api/portfolio",portfolioRoute);

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})

