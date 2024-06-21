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

Agora instalando libs e framework que so iremos usar no processo de desenvolvimento.
*npm i -g nodemon -D
- (npm i -g... ...-D) - comando para instalar pacotes, o 'i' de install e o 'g' e para salvar a lib ou framework de
                        forma global, quer dizer que ele fica instalado não so no projeto atual, "D" indicando que é
                        uma depedencia somente para desenvolvimento.
-(nodemon) - O Nodemon é uma ferramenta que permite reiniciar automaticamente o servidor Node. js sempre que alterações 
            nos arquivos da aplicação são detectadas.
*npm i -s sequelize-cli - morgan -D - comando para instalar pacotes, o 'i' de install e o 's' e para salvar a lib ou 
                         framework no projeto, "D" indicando que é uma depedencia somente para desenvolvimento.
-(sequelize-cli) - Sequelize CLI. O Sequelize possui um utilitário de linha de comando chamado Sequelize CLI que auxilia 
                  em diversas atividades ligadas aos models da nossa aplicação, incluindo funcionalidades para nos ajudar 
                  com migrations.
-(morgan) - Morgan é um Middleware de nível de solicitação HTTP. É uma ótima ferramenta que registra as requests junto 
           com algumas outras informações dependendo de sua configuração e da predefinição usada. É muito útil durante 
           a depuração e também se você deseja criar arquivos de log.