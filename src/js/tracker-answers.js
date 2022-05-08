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
}

const viewAllEmployees = async () => {
    let data = await db.query("SELECT first_name, last_name, role.title AS role, role.salary, department.name AS department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id")
    let employees = data[0];
    console.table(employees);
}

const addDepartment = async () => {
    let data = await db.query("SELECT * FROM department")
    let departments = data[0];
    console.table(departments);
}

module.exports = {viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment};