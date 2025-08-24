import { NextFunction, Request, Response } from "express";
import {
    HttpRequestCounter,
    HttpRequestDurationMicroseconds,
} from "../../metrics/Http.metrics";

export const MetricsMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const end = HttpRequestDurationMicroseconds.startTimer();

    res.on("finish", () => {
        HttpRequestCounter.inc({
            method: req.method,
            route: req.route?.path || req.originalUrl,
            statusCode: res.statusCode,
        });
        end({
            method: req.method,
            route: req.route?.path || req.originalUrl,
            statusCode: res.statusCode,
        });
    });

    next();
};
