// const db = require("./db");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
const port = 8080;
const mysql = require("mysql");
const util = require("util");

app.use(cors());
app.use(bodyparser.json());

const MySQLConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MySQLpassword1",
  database: "coronadb",
  multipleStatements: true,
});
const promiseQuery = (sql) => {
  return util.promisify(MySQLConnection.query).call(MySQLConnection, sql);
};

app.listen(port, () => {
  console.log(`ranning server in port ${port}`);
});

MySQLConnection.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!", err);
});

app.get("/customers", async (req, res) => {
  const queryString = `SELECT * FROM customer`;
  try {
    const result = await promiseQuery(queryString);
    //console.log(result);
    res.send(result);
  } catch (e) {
    res.status(500).send(e.sqlMessage);
  }
});

app.get("/getCustomerDetails/:id", async (req, res) => {
  const id = req.params.id;
  const queryString = `SELECT * FROM coronadetails WHERE customerId='${id}'`;
  try {
    const result = await promiseQuery(queryString);
    console.log(result);
    res.send(result);
  } catch (e) {
    res.status(500).send(e.sqlMessage);
  }
});

// app.get("/getCustomerCoronaDetails/:id", async (req, res) => {
//   const id = req.params.id;
//   const queryString = `SELECT * FROM coronadetails WHERE customerId='${id}'`;
//   try {
//     const result = await promiseQuery(queryString);
//     console.log(result);
//     res.send(result);
//   } catch (e) {
//     res.status(500).send(e.sqlMessage);
//   }
// });

app.post("/addCustomer", async (req, res) => {
  const customer = req.body;
  const queryString = `INSERT INTO customer (id, firstName, lastName, fullAddress,birthDate, phone, mobilePhone)
                      VALUES ('${customer.Id}','${customer.firstName}','${customer.lastName}','${customer.fullAddress}','${customer.birthDate}','${customer.phone}','${customer.mobilePhone}')`;
  try {
    const result = await promiseQuery(queryString);
    //console.log(result);
    res.send({ Id: result.insertId });
  } catch (e) {
    res.status(500).send(e.sqlMessage);
  }
});

app.put("/UpdateCustomer/:id", async (req, res) => {
  const param = req.params.id;
  console.log(req.body);
  const id = req.body.Id;
  const fn = req.body.firstName;
  const ln = req.body.lastName;
  const a = req.body.fullAddress;
  const bd = req.body.birthDate;
  const p = req.body.phone;
  const mp = req.body.mobilePhone;
  const queryString = `UPDATE customer 
                       SET Id='${id}', firstName='${fn}', lastName='${ln}', fullAddress='${a}',birthDate='${bd}', phone='${p}', mobilePhone='${mp}'
                       WHERE Id='${param}'`;
  try {
    const result = await promiseQuery(queryString);
    console.log(result);
    res.send({ id: result.insertId });
  } catch (e) {
    res.status(500).send(e.sqlMessage);
  }
});

app.delete("/deleteCustomer/:id", async (req, res) => {
  console.log("hi");
  const id = req.params.id;
  const queryString = `DELETE FROM customer WHERE Id='${id}'`;
  try {
    const result = await promiseQuery(queryString);
    //console.log(result);
    res.send("deleted");
  } catch (e) {
    res.status(500).send(e.sqlMessage);
    console.log(e.sqlMessage);
  }
});
