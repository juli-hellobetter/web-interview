import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "3c98015b-73e5-4d5d-b7ce-37f835d97a85-00-236ddy811x66f.picard.replit.dev",
    ],
  },
});
