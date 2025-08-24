import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "./swagger.config";

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default {
    serve: swaggerUI.serve,
    setup: swaggerUI.setup(swaggerSpec),
};
