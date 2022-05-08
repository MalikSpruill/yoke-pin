let {prompt} = require("inquirer");
const db = require("../../db/connection");

const viewAllDepartments = async () => {
    let data = await db.query("SELECT * FROM department")
    let departments = data[0];
    console.table(departments);
}

const viewAllRoles = async () => {
    let data = await db.query("SELECT title, salary, department.name FROM role LEFT JOIN department ON role.department_id = department.id")
    let roles = data[0];
    console.table(roles);
    process.exit();
}

const viewAllEmployees = async () => {
    let data = await db.query("SELECT first_name, last_name, role.title AS role, role.salary, department.name AS department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id")
    let employees = data[0];
    console.table(employees);
}

const addsDepartment = async () => {
    let {addDepartment} = await prompt([
        {
            name: "addDepartment",
            message: "What is the name of the department?"
        }
    ]);
    let sql = `INSERT INTO department (name) VALUES (?)`;
    let data = await db.query(sql, [addDepartment]);
    if (data) {
        console.log("Department succesfully added!");
        return;
    }
    throw new Error("Something went wrong in department function");
}

const addsRole = async () => {
    let role = await prompt([
        {
            name: "addRole",
            message: "What is the name of the role?"
        },
        {
            name: "salary",
            message: "What is the salary of the position?"
        },
        {
            name: "department",
            message: "What is the department the role belongs to?"
        },
    ]);
    let sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
    let data = await db.query(sql, [role.addRole, role.salary, role.department]);
    if (data) {
        console.log("Role succesfully added!");
        return;
    }
    throw new Error("Something went wrong in department function");
}

//addsRole();
viewAllRoles()

//module.exports = {viewAllDepartments, viewAllRoles, viewAllEmployees, addsDepartment, addsRole};