var path = require("path");

module.exports = {
    entry: {
        demo1: "./demo1/entry.js"
    },
    output: {
        path: path.join(__dirname, "../docs/demos"),
        filename: "[name].entry.js"
    },
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "app")
        }
    },
    module: {
        loaders: [{
            test: /\.json/,
            loader: "json-loader"
        }, {
            loader: "vue-loader",
            test: /\.vue$/
        }, {
            loader: "babel-loader",
            test: /\.js$/,
            include: [
                path.resolve(__dirname)
            ],
            query: {
                presets: [
                    "es2015"
                ]
            }
        }]
    }
}