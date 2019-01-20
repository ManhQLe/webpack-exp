const path = require("path")

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        main: './src/tsx/main.jsx',
        sub: './src/tsx/sub.jsx',
        nav: './src/tsx/nav.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'build', 'js'),
        filename: '[name].js'
    },
   
    externals:[
        {
            "react":"React",
            "react-dom":"ReactDOM",
            "office-ui-fabric-react/lib":"Fabric"
        }
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    }
}