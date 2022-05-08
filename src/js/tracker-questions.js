let {prompt} = require("inquirer");


let trackerQuestions = (param1, param2) => {
    let initialPrompt = [
        {
            type: "list",
            name: "trackerOptions",
            message: "What would you like to do",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"]
        },
        // {
        //     type: "input",
        //     name: "addDepartment",
        //     message: "What is the name of the department",
        //     when: ({trackerOptions}) => {
        //         if (trackerOptions === "Add a department") {
        //             return true;
        //         }
        //         return false;
        //     },
        //     validate: input => {
        //         if (input) return true;
        //         return false;
        //     }
        // },
        // {
        //     type: "input",
        //     name: "addRole",
        //     message: "What is the name of the role",
        //     when: ({trackerOptions}) => {
        //         if (trackerOptions === "Add a role") {
        //             return true;
        //         }
        //         return false;
        //     },
        //     validate: input => {
        //         if (input) return true;
        //         return false;
        //     }
        // },
        // {
        //     type: "input",
        //     name: "addEmployee",
        //     message: "What is the name of the employee",
        //     when: ({trackerOptions}) => {
        //         if (trackerOptions === "Add an employee") {
        //             return true;
        //         }
        //         return false;
        //     },
        //     validate: input => {
        //         if (input) return true;
        //         return false;
        //     }
        // },
        // {
        //     type: "list",
        //     name: "updateEmployee",
        //     message: "Which employee's role do you want to update?",
        //     when: ({trackerOptions}) => {
        //         if (trackerOptions === "Update an employee role") {
        //             return true;
        //         }
        //         return false;
        //     },
        //     choices: [param1, param2]
        // },
    ]
    return initialPrompt;
}


//prompt(trackerQuestions(1, 2)); //test

module.exports = trackerQuestions;
