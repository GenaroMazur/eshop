import { Registry, collectDefaultMetrics } from "prom-client";

const globalRegistry = new Registry();

collectDefaultMetrics({
    register: globalRegistry,
});

export { globalRegistry };
