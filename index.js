const db = require("./db/connection");
let initialPrompt = require("./src/js/tracker-questions");
let {prompt} = require("inquirer");
const {viewAllDepartments, viewAllRoles, viewAllEmployees, addsDepartment, addsRole, updatesEmployeeRole, exit} = require("./src/js/tracker-answers");

const init = async () => {
    let answerChoice = prompt(initialPrompt);
    switch (answerChoice) {
        case "View all departments": return viewAllDepartments();
        case "View all roles" : return viewAllRoles();
        case "View all employees" : return viewAllEmployees();
        case "Add a department" : return addsDepartment();
        case "Add a role" : return addsRole();
        case "Update an employee role" : updatesEmployeeRole();
        default: exit()
    }
};

init();
