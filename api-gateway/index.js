const express = require("express");
const axios = require("axios");
const _ = require("lodash");

axios.defaults.baseURL = "http://localhost:9000";

const app = express();

app.get("/api/:keyword", async (req, res) => {
  const titleMatch = await axios.get(
    `/trips?title_like=${encodeURIComponent(req.params.keyword)}`
  );

  const descMatch = await axios.get(
    `/trips?description_like=${encodeURIComponent(req.params.keyword)}`
  );

  const tagsMatch = await axios.get(
    `/trips?tags_like=${encodeURIComponent(req.params.keyword)}`
  );

  const unique = _.uniqBy(
    [...titleMatch.data, ...descMatch.data, ...tagsMatch.data],
    "eid"
  );

  res.send(unique);
});

app.listen(5000, () => console.log("server is running on PORT 5000"));
