import autoprefixer from "autoprefixer"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

import { isProduction } from "../config.js"

export const scssLoader = {
    test: /\.scss$/,
    use: [
        isProduction ? MiniCssExtractPlugin.loader : "style-loader",
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                ident: "postcss",
                plugins: [autoprefixer({})]
            }
        },
        {
            loader: "sass-loader",
            options: {}
        }
    ]
}
