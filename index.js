const db = require("./db/connection");
let inquirer = require("inquirer");
let initialPrompt = require("./src/js/tracker-questions");
require("console.table");
const {viewAllDepartments, viewAllRoles, viewAllEmployees, addsDepartment, addsRole, updatesEmployeeRole} = require("./src/js/tracker-answers");


//thisFunc();
viewAllEmployees();


