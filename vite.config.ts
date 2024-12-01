import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_RAWG_IO_API": JSON.stringify(
        env.REACT_APP_RAWG_IO_API
      ),
    },
    plugins: [react(), tsconfigPaths()],
  };
});
