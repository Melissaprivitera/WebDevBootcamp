//modulo SQL
const mysql = require("mysql");

//Conectamos con la base de datos
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

//Método que conecta a la base de datos
connection.connect((error)=>{
    if(error){
        console.log("Connection error with code " + error);
        return;
    }
    console.log("conexión a la base de datos exitosa");
});

//exportamos el módulo de conexión
module.exports = connection;

