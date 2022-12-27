
const express = require("express");
const app = express()

const nodemailer = require("nodemailer");

require("dotenv").config()

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json())

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/careers.html")
})

app.post("/", function(req, res){
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
     }
   })

   const mailOptions = {
     from: req.body.email,
     to: "dyanarahhal98@gmail.com",
     subject: "Message from: " + req.body.firstName + " " + req.body.lastName,
     text: "Email: " + req.body.email + "\nNumber: " + req.body.number + "\nLocation: " + req.body.loc + "\nPosition: "
            + req.body.position + "\nShift: " + req.body.shift + "\nExperience: " + req.body.experience
   }

   transporter.sendMail(mailOptions, function(error, info){
     if (error){
       console.log(error);
       res.send("error");
     } else{
       console.log("Email sent: " + info.response);
       res.send("success")
     }
   })

})


app.listen(PORT, function() {
  console.log("Server is running on port " + PORT)
})
