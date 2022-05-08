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
        console.log("Department succesfully added to the database!");
        return;
    }
    throw new Error("Something went wrong in addsDepartment function!");
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
        console.log("Role succesfully added to the database!");
        return;
    }
    throw new Error("Something went wrong in addsRole function!");
}

const addsEmployee = async () => {
    let employee = await prompt([
        {
            name: "firstName",
            message: "What is the employee's first name?"
        },
        {
            name: "lastName",
            message: "What is the employee's last name?"
        },
        {
            name: "role",
            message: "What is the role of the employee?"
        },
        {
            name: "manager",
            message: "What is the id of the employee's manager?"
        },
    ]);
    let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    let data = await db.query(sql, [employee.firstName, employee.lastName, employee.role, employee.manager]);
    if (data) {
        console.log("Employee succesfully added to the database!");
        return;
    }
    throw new Error("Something went wrong in the addsEmployee function!");
}

const updatesEmployeeRole = async () => {
    let data = await db.query("SELECT * from employee");
    data = data[0];
    let employees = await data.map(employee => {
        return`${employee.id} Name: ${employee.first_name} ${employee.last_name} Role: ${employee.role_id} Manager: ${employee.manager_id}`;
    })
    let {chosenEmployee} = await prompt([
        {
            type: "list",
            name: "chosenEmployee",
            message: "Which employee would you like to update to change their role?",
            choices: [...employees]
        }
    ])
    let employee = await data.filter(person => person.id === Number(chosenEmployee.split(" ")[0]));
    console.log(employee);
    process.exit();
}

updatesEmployeeRole();


//module.exports = {viewAllDepartments, viewAllRoles, viewAllEmployees, addsDepartment, addsRole};