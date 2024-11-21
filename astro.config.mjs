// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    integrations: [mdx(), compress({
        Path: ["./dist"],
    })],
    devToolbar: {
        enabled: false,
    }
});
