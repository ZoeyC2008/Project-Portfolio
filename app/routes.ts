import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("routes/manufacturing.tsx"),

    //route("manufacturing", "routes/manufacturing.tsx"),
    route("manufacturing/cad", "routes/mfg/cad.tsx"),
    route("manufacturing/cnc", "routes/mfg/cnc.tsx"),
    route("manufacturing/pen", "routes/mfg/pen.tsx"),
    route("manufacturing/softJaws", "routes/mfg/softJaws.tsx"),
    route("manufacturing/vice", "routes/mfg/vice.tsx"),



    route("eng/doorway", "routes/eng/doorway.tsx"),
    route("eng/tales", "routes/eng/talesFromAMercurialStudio.tsx"),


] satisfies RouteConfig;