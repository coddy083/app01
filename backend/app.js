const app = require("express")();
const cors = require("cors");
const user = require("./route/user");
const port = 9000;

const allowedOrigins = ["http://localhost:3000", "http://49.247.47.141:4000"];

app.use(
  cors({
    origin: (origin, callback) => {
      // 모든 요청을 허용하려면 아래와 같이 설정합니다.
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use("/user", user);

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
