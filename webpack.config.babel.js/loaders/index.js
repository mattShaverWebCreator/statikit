import {} from "../config"

import templateLoaders from "./templates"
import { scssLoader } from "./styles"
import { scriptsLoader } from "./scripts"
import { imageLoaders, fontLoader, videoLoader } from "./assets"

export default [
    ...templateLoaders,
    scssLoader,
    scriptsLoader,
    ...imageLoaders,
    fontLoader,
    videoLoader
]
