import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@assets": path.resolve(__dirname, "src", "assets"),
            "@components": path.resolve(__dirname, "src", "components"),
            "@composables": path.resolve(__dirname, "src", "composables"),
            "@layouts": path.resolve(__dirname, "src", "layouts"),
            "@router": path.resolve(__dirname, "src", "router"),
            "@scss": path.resolve(__dirname, "src", "scss"),
            "@store": path.resolve(__dirname, "src", "store"),
            "@views": path.resolve(__dirname, "src", "views"),
        },
    },
});
