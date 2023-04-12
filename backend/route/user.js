const router = require("express").Router();

const posts = [
  {
    id: 1,
    title: "Post 1",
    description: "Description of post 1",
  },
  {
    id: 2,
    title: "Post 2",
    description: "Description of post 2",
  },
  {
    id: 3,
    title: "Post 3",
    description: "Description of post 3",
  },
  {
    id: 4,
    title: "Post 4",
    description: "Description of post 4",
  },
];

router.get("/", (req, res) => {
  res.send("User route is up and running");
});

router.get("/posts", (req, res) => {
  res.send(posts);
});

module.exports = router;
