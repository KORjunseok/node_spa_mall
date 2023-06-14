const express = require('express');
const app = express();
const port = 3000;

const goodsRouter = require('./routes/goods.js');
const connect = require("./schemas");
connect();

app.use(express.json());
app.use("/api", [goodsRouter]);

app.get("/", (req,res) => {
  console.log(req.query);

  const obj = {
    "KeyKey" : "value 입니다.",
    "이름입니다." : "이름일까요?",
  }
  res.json('')
})

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.use("/api", goodsRouter)

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});