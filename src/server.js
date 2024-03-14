const Koa = require("koa");
const ip = require("ip");
const { bodyParser } = require("@koa/bodyparser");
const Router = require("@koa/router");

const MongooseConnect = require("./db"); // ++++++
MongooseConnect(); // ++++++

const { Other } = require("./models/other"); // ++++++

const app = new Koa();

const router = new Router({ prefix: "/api" });

// koaBodyParser: 将 string 类型的 body 参数转为 json 格式 - 中间件
app.use(bodyParser());

router.get("/", (ctx) => {
  ctx.body = "helloworld";
});

// ++++++
router.post("/other/create", async (ctx) => {
  const { username, password } = ctx.request.body;
  const res = await Other.create({ username, password });
  ctx.body = {
    status: 200,
    msg: "success",
    data: res,
  };
});

// ++++++
router.get("/other/list", async (ctx) => {
  const res = await Other.findOne();
  ctx.body = {
    status: 200,
    msg: "success",
    data: res || ["default"],
  };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log(
    `server is running: http://${ip.address()}:3000 or http://localhost:3000`
  );
});
