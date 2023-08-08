import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [sveltekit()],
    ssr: {
        noExternal: ["tsparticles", "tsparticles-slim", "tsparticles-engine", "svelte-particles"], // add all tsparticles libraries here, they're not made for SSR, they're client only
    },
};

export default config;
