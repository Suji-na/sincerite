module.exports = {
    mode: "production",
    entry: {
        app: "./js/app.js"
    },
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: "babel-loader"
        }]
    }
};
