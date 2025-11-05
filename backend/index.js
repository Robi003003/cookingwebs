const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// Lidhja me databazën
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "cpuser",
  password: "sekret123",
  database: "cooking_passion"
});

// API për të ruajtur kontaktin
app.post("/api/kontakt", (req, res) => {
  console.log(req.body);
  const { emri, email, telefoni, mesazhi } = req.body;
  db.query(
    "INSERT INTO kontaktet (emri, email, telefoni, mesazhi) VALUES (?, ?, ?, ?)",
    [emri, email, telefoni, mesazhi],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Gabim gjatë ruajtjes!" });
      }
      res.json({ message: "Mesazhi u ruajt me sukses!" });
    }
  );
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend OK" });
});

app.get("/", (req, res) => {
  res.send("Backend Express po punon!");
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Serveri po dëgjon në portën 5000");
});