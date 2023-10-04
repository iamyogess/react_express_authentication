import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"auth"
})

app.post("/register", (req, res) => {
  const sqlQuery =
    "INSERT INTO login (`username`,`email`,`password`) VALUES (?)";
  const values = [req.body.username, req.body.email, req.body.password];
});

app.get("/", (req, res) => {
  res.send("Hello I am active!");
});

app.listen(PORT, () => {
  console.log("Server started at http://localhost:8080/");
});
