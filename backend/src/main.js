const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
const res = require("express/lib/response");
app.use(cors());

const { AddMessage, GetMessages } = require("./user");

app.get("/path", async (req, res) => {
  const list = await GetMessages();
  res.json(list);
});

app.post("/path1", async (req, res) => {
  const msg = req.body;
  await AddMessage(msg);
  res.json({ message: "Message successfully Added" });
});

app.listen(2000, () => {
  console.log("Server Started");
});
