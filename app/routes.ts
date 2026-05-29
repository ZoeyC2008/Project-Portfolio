import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    route("manufacturing", "routes/manufacturing.tsx"),
    route("eng/doorway", "routes/eng/doorway.tsx"),

] satisfies RouteConfig;