import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  let n1 = Number(req.body.num1);
  let n2 = Number(req.body.num2);
  let result = n1 + n2;
  res.send("result : " + result);
});
app.post("/bmicalculator", (req, res) => {
  let n1 = parseFloat(req.body.height) / 100;
  let n2 = parseFloat(req.body.weight);
  let bmi = n2 / Math.pow(n1, 2);
  res.send("Body mass index : " + bmi);
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
