import type { Config } from "@react-router/dev/config";

export default {
  basename: "/MorningBrew/",
  ssr: false,
  prerender: ["/"],
} satisfies Config;
