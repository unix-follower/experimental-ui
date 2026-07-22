import { defineConfig } from "vite"
import { globSync } from "glob"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const pages = Object.fromEntries(
  globSync(["**/index.html", "**/*page.html"], {
    cwd: __dirname,
    ignore: ["**/node_modules/**", "dist/**"],
  }).map((file) => [file.replace("/index.html", "") || "main", resolve(__dirname, file)]),
)
console.debug("HTML pages:", pages)

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "./dist",
    rollupOptions: { input: pages },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
})
