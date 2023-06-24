import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.sendFile("<h1>Hello</h1>");
})
app.listen(5000, () => {
    console.log("server is running on port 5000");
})