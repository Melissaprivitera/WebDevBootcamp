//1. se carga express
const express = require("express");
const app = express();

//2. Se capturan los datos del formulario utilizando formato json.
app.use(express.urlencoded({extended:false}));
app.use(express.json);

//3. Se carga el entorno dotenv y le asignamos el archivo de las variables de entorno.
const dotenv = require("dotenv");
dotenv.config({path: "./env/.env"});

//4. Se carga el directorio public, cada vez que llamamos a resources estaremos cargando el dir public.
//al utilizar __dirname podemos mover el proyecto de carpeta sin tener que actualizar la ruta.
app.use("/resources", express.static("public"));
app.use("/resources", express.static(__dirname+"public"));

//5. Establecemos el motor de plantillas
app.set("view engine", "ejs");

//6. Cargamos bcriptjs manejo de algoritmo hash para no tener que calcularlo nosotros.
const bcriptjs = require("bcryptjs");

//7. Variables de sesion, cargamos la sesión y establecemos la clave
const session = require("express-session");
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
}));
//finalmente creamos el servidor
app.listen (3000, (req, res) =>{
    console.log("conexión establecida con el servidor http://localhost:3000/");
});

//8. cargamos módulo de conexión a base de datos
const connection = require("./database/db");

//9. Establecer las rutas 
app.get("/", (req, res)=>{
    //res.send("hola mundo");
    res.render("index");
})


