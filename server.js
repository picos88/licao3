import express from "express";
import { router } from "./routes/index"
 
import swaggerUI from "swagger-ui-express";

import swaggerDocs from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.get("/terms,", (request, response) =>{
  return response.json({
    message:" Termos de Serviço",
  });
});

app.use("/v1", router);
app.listen(3000, () => console.log("Server is port 3000"))
