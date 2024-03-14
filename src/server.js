import Koa from "koa";

const app = new Koa();

// 响应
app.use((ctx) => {
  ctx.body = "Hello Koa";
});

app.listen(3000, () => {
  console.log("server is running at port http://localhost:3000");
});
