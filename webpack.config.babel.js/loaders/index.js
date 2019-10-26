import {} from "../config"

import { pugLoader } from "./templates"
import { scssLoader } from "./styles"
import { scriptsLoader } from "./scripts"
import { imageLoaders, fontLoader, videoLoader } from "./assets"

export default [
    pugLoader,
    scssLoader,
    scriptsLoader,
    ...imageLoaders,
    fontLoader,
    videoLoader
]
