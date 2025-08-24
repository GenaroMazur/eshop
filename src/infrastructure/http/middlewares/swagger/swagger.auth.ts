import basicAuth from "basic-auth";
import { Request, Response, NextFunction } from "express";

export const swaggerAuth =
    (USER: string, PASS: string) =>
    (req: Request, res: Response, next: NextFunction) => {
        const user = basicAuth(req);

        const username = USER;
        const password = PASS;

        if (!user || user.name !== username || user.pass !== password) {
            res.set("WWW-Authenticate", 'Basic realm="Swagger UI"');
            return res.status(401).send("Authentication required.");
        }

        next();
    };
