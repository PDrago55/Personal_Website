"use strict";
//note
const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(path.join(__dirname, 'drago/build')));
app.get("/ping", function (req, res) {
  return res.send("pong");
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/drago/build/index.html"));
});
app.listen(port);

//const express = require("express");

// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
// const PORT = 4000;
// const creds = require("./config");
// const path = require("path");
// const favicon = require("express-favicon");

// const transport = {
//   host: "smtp.gmail.com",
//   port: 587,
//   auth: {
//     user: creds.USER,
//     pass: creds.PASS,
//   },
// };

// const transporter = nodemailer.createTransport(transport);

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("server can take messages");
//   }
// });

// express()
//   .use(function (req, res, next) {
//     res.header(
//       //avoid cors problems... hopefully
//       "Access-Control-Allow-Methods",
//       "OPTIONS, HEAD, GET, PUT, POST, DELETE"
//     );
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
//   })
//   .use(bodyParser.json())

//   //setting up heroku//
//   .use(favicon(__dirname + "/public/initial.png"))
//   .use(express.static(__dirname))
//   .use(express.static(path.join(__dirname, "build")))
//   .get("/ping", function (req, res) {
//     return res.send("pong");
//   })
//   .get("/*", function (req, res) {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
//   })

//   ///endpoints
//   .post("/api/contact", async (req, res) => {
//     const fName = req.body.fName;
//     const lName = req.body.lName;
//     const email = req.body.email;
//     const subject = req.body.subject;
//     const mail = {
//       from: email,
//       to: creds.USER,
//       subject: fName,
//       text: `name: ${fName} ${lName} \n email: ${email} \n message: ${subject}`,
//     };
//     transporter.sendMail(mail, (err, data) => {
//       if (err) {
//         res.json({
//           status: "null",
//         });
//       } else {
//         res.json({
//           status: "success",
//         });
//       }
//     });
//     res.send(subject);
//     console.log("here");
//   })

//   .listen(PORT, () => {
//     console.log("listening on port 3000");
//   });
