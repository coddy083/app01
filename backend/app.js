const app = require("express")();
const cors = require("cors");
const user = require("./route/user");
const port = 9000;

app.use(
  cors({
    origins: ["http://localhost:3000", "http://49.247.47.141:4000"],
  })
);

app.use("/user", user);

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
