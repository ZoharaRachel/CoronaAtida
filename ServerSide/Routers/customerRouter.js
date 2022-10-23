const express = require("express");
const customerRouter = express.Router();
const { MySQLConnection, promiseQuery } = require("../sql");

customerRouter.get("/customers", async (req, res) => {
  const queryString = "SELECT * FROM customer";
  try {
    const result = await promiseQuery(queryString);
    console.log(result);
    res.send({ id: result.insertId });
  } catch (e) {
    res.status(500).send(e.sqlMessage);
  }
});

customerRouter.post("/addCustomer", async (req, res) => {
  const customer = req.body;
  const queryStirng = `INSERT INTO customer (id, FirstName, LastName, FullAddress,BirthDate, Phone, MobilePhone)
                          VALUES ('${id}', '${FirstName}','${LastName}','${FullAddress}','${BirthDate}','${Phone}','${MobilePhone}')`;
  try {
    const result = await promiseQuery(queryString);
    console.log(result);
    res.send({ id: result.insertId });
  } catch (e) {
    res.status(500).send(e.sqlMessage);
  }
});

customerRouter.put("/UpdateCustomer/:id",async (req, res) => {
  const id = req.params.Id;
  const fn = req.params.FirstName;
  const ln = req.params.LastName;
  const a = req.params.FullAddress;
  const bd = req.params.BirthDate;
  const p = req.params.Phone;
  const mp = req.params.MobilePhone;
  const queryStirng = `UPDATE customer 
                        SET id= ${id}, FirstName=${fn}, LastName=${ln}, FullAddress=${a},BirthDate=${bd}, Phone=${p}, MobilePhone=${mp}
                        WHERE id=${id}`;
    try {
    const result = await promiseQuery(queryString);
    console.log(result);
    res.send({ id: result.insertId });
  } catch (e) {
    res.status(500).send(e.sqlMessage);
  }                    
});

customerRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.Id;
  const queryStirng = `DELETE FROM customer WHERE id=${id}`;
  try {
    const result = await promiseQuery(queryString);
    console.log(result);
    res.send({ id: result.insertId });
  } catch (e) {
    res.status(500).send(e.sqlMessage);
  }          
});
module.exports = { customerRouter };