import express from "express";
import productsRouter from "./routes/products.routes.js";

const app = express();

app.use(express.json());
app.use("/api/products", productsRouter);

app.listen(8080, () => {
  console.log("Servidor escuchando en puerto 8080");
});
