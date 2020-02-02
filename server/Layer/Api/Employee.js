const empRouter = require("express").Router();
const db = require("../../Resource/Lib/Database/dbconnection.js");
empRouter.post("/addemployee", (req, res) => {
  console.log(req.body);
  let post = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    work_profile: req.body.work_profile,
    employee_id: "EINBAN201912",
    emp_key: 9879870980
  };
  let sql = "INSERT INTO emp_rewrite_t_employee SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post one added");
  });
});
db.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});

module.exports = empRouter;
