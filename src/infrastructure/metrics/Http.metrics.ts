import { Counter, Histogram } from "prom-client";
import { globalRegistry } from "./index";

const HttpRequestCounter = new Counter({
    name: "http_request_total",
    help: "Total number of HTTP requests",
    labelNames: ["method", "statusCode", "route"],
    registers: [globalRegistry],
});

const HttpRequestDurationMicroseconds = new Histogram({
    name: "http_request_duration_microseconds",
    help: "Duration of HTTP requests in microseconds",
    labelNames: ["method", "statusCode", "route"],
    registers: [globalRegistry],
});

export { HttpRequestCounter, HttpRequestDurationMicroseconds };
