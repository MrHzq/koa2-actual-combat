// 1. 引入 mongodb 驱动包
const mongoose = require("mongoose");

const MongooseConnect = () => {
  // MongoDB 服务器的连接地址，其中可包含用户名、密码、域名、端口、数据库名等信息
  const DB_URL = "mongodb://127.0.0.1:27017/my-test";

  // 2. 建立连接
  mongoose.connect(DB_URL);

  /**
   * 连接成功 connected 数据库连接成功
   */
  mongoose.connection.on("connected", function () {
    console.log("Mongoose connection open to " + DB_URL);
  });

  /**
   * 连接异常 error 数据库连接错误
   */
  mongoose.connection.on("error", function (err) {
    console.log("Mongoose connection error: " + err);
  });
  /**
   * 连接断开 disconnected 连接异常断开
   */
  mongoose.connection.on("disconnected", function () {
    console.log("Mongoose connection disconnected");
  });
};

module.exports = MongooseConnect;
