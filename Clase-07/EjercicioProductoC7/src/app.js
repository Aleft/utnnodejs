const express = require("express");
const productosRouter = require("./routes/productos");

const errorHandler = require("./middlewares/errorHandler");

const { auth } = require("express-oauth2-jwt-bearer");

const oauthCheck = auth({
    audience: "http://localhost:3000/api/productos",
    issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
    tokenSigningAlg: "RS256",
    });

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API de productos");
});

app.use("/api/productos", oauthCheck, productosRouter); //Esto define la ruta de postman luego

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.use(errorHandler);
app.listen(PORT, () => {
console.log(`Servidor iniciado en el puerto ${PORT}`);
});