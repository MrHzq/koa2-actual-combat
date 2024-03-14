const Koa = require("koa");
const ip = require("ip");
const { bodyParser } = require("@koa/bodyparser");

const app = new Koa();

// koaBodyParser: 将 string 类型的 body 参数转为 json 格式 - 中间件
app.use(bodyParser());

// 响应 - 中间件
app.use((ctx) => {
  console.log("[ ctx.request.body ] >", ctx.request.body);
  ctx.body = "Hello Koa";
});

app.listen(3000, () => {
  console.log(
    `server is running: http://${ip.address()}:3000 or http://localhost:3000`
  );
});
