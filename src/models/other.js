const mongoose = require("mongoose");

/**
 * 定义一个模式(相当于传统意义的表结构)
 * 每个模式映射mongoDB的一个集合，
 * 它定义（只是定义，不是实现）这个集合里面文档的结构，就是定义这个文档有什么字段，字段类型是什么，字段默认值是什么等。
 * 除了定义结构外，还定义文档的实例方法，静态模型方法，复合索引，中间件等
 * @type {mongoose}
 */
const OtherSchema = new mongoose.Schema(
  //数据为表头数据列
  {
    username: String,
    password: String,
  }
);

const collationName = "Other"; // 集合名，相当于表名，一定要大写
const Other = mongoose.model(collationName, OtherSchema); // 当没有该集合时，自动创建该集合

module.exports = { Other };
