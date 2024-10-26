import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv } from "vite";
import { jsEntries } from "./vite/js-entries";
import { htmlEntries } from "./vite/html-entries";

export default () => {
  process.env = { ...process.env, ...loadEnv("production", process.cwd()) };
  return defineConfig({
    base: "./",
    root: "./src",
    publicDir: "../public",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src/assets/js", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: [
            fileURLToPath(new URL("./src/assets/css", import.meta.url)),
          ],
          // additionalData: `@use 'global' as *;`
        },
      },
    },
    server: {
      port: 2023,
      open: process.env.VITE_START_PATH || "/",
      host: true,
    },
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      modulePreload: {
        polyfill: false,
      },
      rollupOptions: {
        input: {
          ...jsEntries,
          ...htmlEntries,
        },
        output: {
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: (assetInfo) => {
            if (/\.( gif|jpg|png|svg|mp4|ico|jpeg )$/.test(assetInfo.name)) {
              return "assets/img/[name].[ext]";
            }
            if (/\.css$/.test(assetInfo.name)) {
              return "assets/css/[name].[ext]";
            }
            return "assets/[name].[ext]";
          },
        },
      },
    },
  });
};
