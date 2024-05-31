const express = require("express");
// const cors = require("cors");
const app = require("./Exercise6/app");
const app2 = express();
const myAppRouter = require("./Exercise1/myServersRoute");
const calculatorRouter = require("./Exercise2/myCalculator");
const friendRoutes = require("./Exercise4/m5lab4_expresapp/routes/friendRoutes");
const finalModuleRoute = require("./Exercise8/Final Module Project/finalModuleRoute");

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./Exercise8/Final Module Project/swagger.json");

const port = 3000;
const port1 = 3001;
app.use(express.json());
// app.use(cors());
app.use("/myServers", myAppRouter);
app.use("/Calculator", calculatorRouter);
app.use("/friends", friendRoutes);
app.use("/finalModule", finalModuleRoute);
app2.use("/myServers", myAppRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(
    `Server has started and is listening for incoming requests on port ${port}`
  );
});

app2.listen(port1, () => {
  console.log(
    `Server has started and is listening for incoming requests on port ${port1}`
  );
});
