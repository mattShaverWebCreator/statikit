import { join as joinPath } from "path"
import fs from "fs"
import { promisify } from "util"

const readdir = promisify(fs.readdir)

export const getPages = () => {
    const pagesDirectory = joinPath(__dirname, "../../src/pages")
    const pages = fs.readdirSync(pagesDirectory, "utf8")
    // const pages = await readdir(pagesDirectory, "utf8")
    return pages
}
