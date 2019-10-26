import { isProduction } from "../config"

export const imageLoaders = [
    {
        test: /\.(jpe?g|png|gif)$/,
        loader: "url-loader",
        options: {
            limit: 5 * 1024,
            outputPath: "assets/images"
        }
    },
    {
        test: /\.svg$/,
        loader: "svg-url-loader",
        options: {
            limit: 5 * 1024,
            noquotes: true,
            outputPath: "assets/images"
        }
    },
    {
        test: /\.(jpg|png|gif|svg)$/,
        loader: "image-webpack-loader",
        enforce: "pre",
        options: {
            disable: isProduction
        }
    }
]

export const fontLoader = {
    test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
        {
            loader: "file-loader",
            options: {
                name: "[name].[hash].[ext]",
                outputPath: "assets/fonts/"
            }
        }
    ]
}

export const videoLoader = {
    test: /\.(webm|mp4)$/,
    use: [
        {
            loader: "file-loader",
            options: {
                name: "[name].[hash].[ext]",
                outputPath: "assets/video/"
            }
        }
    ]
}
