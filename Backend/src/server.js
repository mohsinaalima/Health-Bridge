//server
import express from "express";
import connectDB from "./config/db";
const app = express();
const PORT = 3000;

app.use(express.json()); //parse JSON bodies
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`Server is running`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
