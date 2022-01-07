const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: 1000,
  user: "root",
  password: "cdac",
  database: "wptexam",
};

const AddMessage = async (msg) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `insert into messages(Message) values ("?")`;
  await connection.queryAsync(sql, [msg.Message]);
  console.log("Message Added");
  await connection.endAsync();
};

const GetMessages = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `select * from messages`;
  const list = await connection.queryAsync(sql);
  await connection.endAsync();
  return list;
};

module.exports = { AddMessage, GetMessages };
