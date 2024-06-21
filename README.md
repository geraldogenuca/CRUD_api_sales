# CRUD_api_sales
Creating a simple movie sales API


1- Create repository on github and then open it in the IDE.

2- Start node project, (npm init).

3- Installing the first libs for project development.

These are the first
* npm i -s express sequelize dotenv cors mysql2
- (npm i -s) - command to install packages, the 'i' of install and the 's' and to save the lib or framework in the project.
- (express) - Express offers solutions for: Managing requests for different HTTP verbs on different URLs. 
            Integrate "view engines" to insert data into templates.
- (sequelize) - Sequelize is an ORM, that is, an object-relational mapper. This means it allows you 
              create models (class) in TypeScript or JavaScript that represent your database tables.
- (dotenv) - Dotenv allows you to load environment variables from a . env in the Node project. js, which is useful 
             to store sensitive data outside of the code, such as database connection strings, passwords, 
             tokens, etc. 
- (mysql2) - MySQL2 provides the execute helper method that will prepare and query SQL statements.
- (cors) - (Cross-Origin Resource Sharing) is a security mechanism in browsers that restricts requests 
           HTTP from one domain to another domain other than where the request originated.

Now installing libs and framework that we will only use in the development process.
*npm i -g nodemon -D
- (npm i -g... ...-D) - command to install packages, the 'i' of install and the 'g' and to save the lib or framework
                        global form, meaning that it is installed not only in the current project, "D" indicating that it is
                        a development-only dependency.
(nodemon) - Nodemon is a tool that allows you to automatically restart the Node server. js whenever changes 
            in the application files are detected.
*npm i -s sequelize-cli - morgan -D - command to install packages, the 'i' of install and the 's' and to save the lib or 
                         framework in the project, "D" indicating that it is a development-only dependency.
(sequelize-cli) - Sequelize CLI. Sequelize has a command-line utility called Sequelize CLI that helps 
                  in various activities linked to our application models, including features to help us 
                  with migrations.
(morgan) - Morgan is an HTTP Request Level Middleware. It's a great tool that records requests together 
           with some other information depending on your configuration and the preset used. It is very useful during 
           debugging and also if you want to create log files.