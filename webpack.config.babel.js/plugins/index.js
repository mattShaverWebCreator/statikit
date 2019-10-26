import { resolve as resolvePath } from "path"

import CleanWebpackPlugin from "clean-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

import { pages, templateEngine } from "../config"

const clean = new CleanWebpackPlugin()

const templates = pages.map(page => {
    const template = resolvePath(
        __dirname,
        `../../src/pages/${page}/index.${templateEngine}`
    )

    return new HtmlWebpackPlugin({
        inject: true,
        chunks: [page],
        template,
        filename: `${page}.html`,
        templateParameters: {
            title: page
        }
    })
})

const extractCss = new MiniCssExtractPlugin({
    filename: "[name].[hash].css"
})

export default [clean, ...templates, extractCss]
