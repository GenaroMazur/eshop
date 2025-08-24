import controllerBuilder from "../../../utils/controllerBuilder";
import { globalRegistry } from "../../metrics";

export const MetricsController = controllerBuilder((_, res) => {
    res.setHeader("Content-Type", globalRegistry.contentType);

    return globalRegistry.metrics();
});
