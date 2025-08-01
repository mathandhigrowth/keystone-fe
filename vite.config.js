import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";
import { config } from "dotenv";
import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

config();

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  console.log(`Current mode: ${mode}`);

  return {
    server: {
      port: Number(env.VITE_PORT),
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [react(), tailwindcss()],
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode),
    },
  };
});
