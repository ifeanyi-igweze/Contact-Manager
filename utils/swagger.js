import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Contact Manager API",
            version: "1.0.0",
            description: "A simple Express Contact Manager API"
        },
        servers: [
            {
                url: "http://localhost:4000"
            }
        ]
    },
    apis: ["./routes/*.js"]
};

const specs = swaggerJSDoc(options);

export function swaggerDocs(app, port) {
    app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(specs));
    app.get("docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(specs);
    });

    console.log(`Docs available ar http://localhost:${port}/api/docs`);
}
