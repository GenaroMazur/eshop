import { Options } from "swagger-jsdoc";

const swaggerOptions: Options = {
    definition: {
        openapi: "3.0.0", // Especifica la versión del estándar OpenAPI
        info: {
            title: "Mi API REST",
            version: "1.0.0",
            description:
                "Documentación de la API generada automáticamente con Swagger",
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",
                description: "Servidor local",
            },
            // Podés agregar más servidores (desarrollo, producción, etc.)
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [{ bearerAuth: [] }], // Para que Swagger sepa que necesita auth
    },
    apis: ["./src/infrastructure/http/routes/**/*.ts"], // Rutas con comentarios @openapi
};

export default swaggerOptions;
