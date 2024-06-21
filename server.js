// Loading environment variables.
require("dotenv").config()

// Creating Project Server.
const http = require("http")
, app = require("./src/app")
, port = process.env.SERVER_PORT || 4001
, server = http.createServer(app);


// Server Response.
server.listen(
    port, 
    console.log(`Server is running in port: ${port}!!!`)
)
