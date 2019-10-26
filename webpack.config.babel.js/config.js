import { join as joinPath, resolve as resolvePath } from "path"

import { getPages } from "./utils"

import userConfig from "../statikit.json"

const { PORT, NODE_ENV } = process.env

const port = PORT || 3000
const isProduction = NODE_ENV === "production"

const buildDirectory = resolvePath(__dirname, "../build")

const devServer = {
    contentBase: buildDirectory,
    compress: true,
    port: port,
    open: true
}

const devtool = isProduction ? false : "eval-source-map"

const pages = getPages()

const entry = (() => {
    const entries = {}

    pages.forEach(page => {
        entries[page] = resolvePath(__dirname, `../src/pages/${page}/index.js`)
    })

    return entries
})()

const templateEngine = userConfig["template-engine"]

export {
    port,
    NODE_ENV as environment,
    isProduction,
    buildDirectory,
    devServer,
    devtool,
    pages,
    entry,
    templateEngine
}
