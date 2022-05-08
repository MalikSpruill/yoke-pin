const db = require("./db/connection");
let inquirer = require("inquirer");
require("console.table");
const {viewAllDepartments, viewAllRoles, viewAllEmployees, addsDepartment, addsRole} = require("./src/js/tracker-answers");

const thisFunc = async () => {
    let params = ["Steve", "Myers", 2, 1]
    //let change =  await db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, params);
    let test =  await db.query("SELECT first_name, last_name, role_id, manager_id FROM employee");
    let test2 = test[0];
    console.log(test)
    console.table(test2);
}

//thisFunc();
viewAllEmployees();

//db.connect(err => err ? console.log(err) : console.log("Database connected!"));

