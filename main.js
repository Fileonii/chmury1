"use strict";

const express = require("express");

const port = 3000;
const student = "Filip Jaslikowski";

var formatter = new Intl.DateTimeFormat("pl-PL", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const data = new Date();

const app = express();

app.get("/", (req, res) => {
  const ip = req.socket.localAddress;
  res.send({
    ip: ip,
    client: req.headers.host,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    currentTime: data.toLocaleTimeString(),
  });
});

app.listen(port, () => {
  console.log(
    `
    PORT:${port}
    STUDENT:${student} 
    DATA:${formatter.format(data)} 
    GODZINA:${data.toLocaleTimeString()}`
  );
});
