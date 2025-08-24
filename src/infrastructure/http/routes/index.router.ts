import { Router } from "express";
import { MetricsController } from "../controllers/Metrics.controller";

const indexRouter = Router();

indexRouter.get("/metrics", MetricsController);

indexRouter.get("/", (_, res) => {
    res.status(200).json({
        status: true,
        message: "Hello world",
        body: null,
    });
});

export default indexRouter;
