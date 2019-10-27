const pugLoader = {
    test: /\.pug$/,
    loader: "pug-loader"
}

const handlebarsLoader = {
    test: /\.hbs$/,
    loader: "handlebars-loader"
}

export default [pugLoader, handlebarsLoader]
