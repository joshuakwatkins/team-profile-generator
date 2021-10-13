const fs = require('fs');
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const buildPage = (array) => {
    let htmlStartContent = `
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>${array[0].getName()}'s Team</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
    </head>
    <body>
    <div class="container py-4">
        <div class="p-5 mb-4 bg-secondary text-white rounded-3">
            <h1 class="text-center">${array[0].getName()}'s Team</h1>
        </div>
            <div class="row d-flex justify-content-around">
        `;
    let htmlEndContent = `  
            </div>
    </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.min.js" integrity="sha384-PsUw7Xwds7x08Ew3exXhqzbhuEYmA2xnwc8BuD6SEr+UmEHlX8/MCltYEodzWA4u" crossorigin="anonymous"></script>
        </body>
    </html>
    `;
    
    const htmlLoop = (array) => {
        let employeeContent = ``;
        array.forEach(employee => {
            console.log(employee)
        if (employee.getRole() === "Manager") {
        employeeContent += `
        <div class="card col-3 p-2" style="min-width: 200px;">
            <div class="card-body p-2">
                <h5 class="card-title bg-danger text-white p-3">${employee.getName()} - ${employee.getRole()}</h5>
                <p class="card-text">ID: ${employee.getID()}</p>
                <p class="card-text">Office Number: ${employee.getOfficeNumber()}</p>
                <p class="card-text">Email:  <a href="mailto:${employee.getEmail()}">${employee.getID()}</a></p>
                <a href="mailto:${employee.getEmail()}" class="btn btn-danger">Email Me</a>
            </div>
        </div>
        `
        return employeeContent;
        }
        if (employee.getRole() === "Engineer") {
        employeeContent += `
        <div class="card col-3 p-2" style="min-width: 200px;">
            <div class="card-body p-2">
                <h5 class="card-title bg-primary text-white p-3">${employee.getName()} - ${employee.getRole()}</h5>
                <p class="card-text">ID: ${employee.getID()}</p>
                <p class="card-text">GitHub: <a href="https://www.github.com/${employee.getGithub()}"> ${employee.getGithub()}</a></p>
                <p class="card-text">Email:  <a href="mailto:${employee.getEmail()}">${employee.getID()}</a></p>
                <a href="mailto:${employee.getEmail()}" class="btn btn-primary">Email Me</a>
            </div>
        </div>
        `
        return employeeContent;
        }
        if (employee.getRole() === "Intern") {
        employeeContent += `
        <div class="card col-3 p-2" style="min-width: 200px;">
            <div class="card-body p-2">
                <h5 class="card-title bg-success text-white p-3">${employee.getName()} - ${employee.getRole()}</h5>
                <p class="card-text">ID: ${employee.getID()}</p>
                <p class="card-text">School: ${employee.getSchool()}</p>
                <p class="card-text">Email:  <a href="mailto:${employee.getEmail()}">${employee.getID()}</a></p>
                <a href="mailto:${employee.getEmail()}" class="btn btn-success">Email Me</a>
            </div>
        </div>
        `
        return employeeContent;
        }
        console.log(employeeContent)
        
    })
    return employeeContent;
    };
    let htmlFile = htmlStartContent + htmlLoop(array) + htmlEndContent;
    fs.writeFile("./dist/index.html", htmlFile, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Website created successfully!")
        }
    })

}

module.exports = buildPage;