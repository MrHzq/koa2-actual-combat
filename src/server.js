const Koa = require("koa");
const ip = require("ip");
const { bodyParser } = require("@koa/bodyparser");
const Router = require("@koa/router");

const app = new Koa();

const router = new Router();

// koaBodyParser: 将 string 类型的 body 参数转为 json 格式 - 中间件
app.use(bodyParser());

router.get("/", (ctx) => {
  ctx.body = "helloworld";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log(
    `server is running: http://${ip.address()}:3000 or http://localhost:3000`
  );
});
