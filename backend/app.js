const app = require("express")();
const user = require("./route/user");
const port = 9000;

app.use("/user", user);

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.listen(port, () => {
  console.log("Example app listening on port 3000!");
});
