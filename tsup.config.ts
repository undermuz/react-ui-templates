import { defineConfig } from "tsup"
import { esbuildPluginFilePathExtensions } from "esbuild-plugin-file-path-extensions"

const env = process.env.NODE_ENV

export default defineConfig({
    entry: [
        "./src",
        "!./src/stories/**/*",
        "!src/**/*.spec.*",
        "!src/tests/**/*",
    ],
    sourcemap: false,
    clean: true,
    target: "es2020",
    // dts: true,
    experimentalDts: true,
    skipNodeModulesBundle: true,
    format: ["cjs", "esm"],
    minify: env === "production",
    bundle: true,
    external: [
        "rsuite",
        "grommet",
        "chakra-ui",
        "stories",
        "react",
        "react-dom",
        "node_modules",
    ],
    esbuildPlugins: [
        esbuildPluginFilePathExtensions({
            esmExtension: "mjs",
            cjsExtension: "js",
        }),
    ],
})
