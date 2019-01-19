const path = require("path")

module.exports = {
    entry: './srs/tsx/main.jsx',
    output: {
        path: path.resolve(__dirname, 'build', 'js'),
        filename: 'main-build.js'
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