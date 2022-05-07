INSERT INTO department (name)
VALUES
    ('Military'),
    ('Factory Unit'),
    ('Clean Crew'),
    ('Financial Staff');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Soldier', '45000', 1),
    ('Pipe Cleaner', '38000', 2),
    ('Janitor', '32000', 3),
    ('Account Management Executive', '147000', 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
    ('Bill', 'Noris', 1),
    ('Orlando', 'Felter', 2),
    ('Jean', '32000', 3),
    ('Account Management Executive', '147000', 4);


CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL
)