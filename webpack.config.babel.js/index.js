import { resolve as resolvePath } from "path"
import {
    environment,
    buildDirectory,
    devServer,
    devtool,
    entry
} from "./config"
import rules from "./loaders"
import plugins from "./plugins"

export default {
    mode: environment,
    entry,
    output: {
        filename: "[name].[hash].js",
        path: buildDirectory
    },
    devtool,
    devServer,
    module: { rules },
    plugins
}
