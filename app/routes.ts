import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  ...prefix("morningbrew", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
  ]),
] as RouteConfig;
