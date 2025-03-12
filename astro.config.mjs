// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  site: "https://sn8z.github.io",
  base: "/morningbrew",
  outDir: "./docs",
});
