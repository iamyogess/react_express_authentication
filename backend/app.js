import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";

const app = express();
const PORT = 8080;
const salt = 10;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "auth",
});

// app.post("/register", (req, res) => {
//   const sqlQuery =
//     "INSERT INTO login (`username`,`email`,`password`) VALUES (?)";
//   const hashedPassword = bcrypt.hash(
//     req.body.password.toString(),
//     salt,
//     (err) => {
//       if (err) {
//         return res.status(500).json({ error: "Unable to hash password" });
//       } else {
//         const values = [req.body.username, req.body.email, hashedPassword];
//         db.query(sqlQuery, [values], (err, data) => {
//           if (err)
//             return res.status(200).json({ error: "Inserting data error" });
//           return res.status(200).json({ message: "Registered successfully!" });
//         });
//       }
//     }
//   );
// });

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password.toString(), salt);
    const sqlQuery = "INSERT INTO login (`username`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [req.body.username, req.body.email, hashedPassword];

    db.query(sqlQuery, [values], (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Inserting data error" });
      }
      return res.status(200).json({ message: "Registered successfully!" });
    });
  } catch (error) {
    return res.status(500).json({ error: "Unable to hash password" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello I am active!");
});

app.listen(PORT, () => {
  console.log("Server started at http://localhost:8080/");
});
