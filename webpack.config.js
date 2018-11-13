const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //This is a plugin to extract all css files

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    console.log('env', env);
    return {
        entry : './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules:[{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                // use: [
                //     'style-loader',
                //     'css-loader',
                //     'sass-loader'
                // ]
                use : CSSExtract.extract({
                    use: [
                        {
                            loader : 'css-loader',
                            options:{
                                sourceMap:true
                            }
                        }
                        ,
                        {
                            loader: 'sass-loader',
                            options:{
                                sourceMap:true
                            }
                        }
                    ]
                })
            }]
        },
        plugins:[
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', //it is for development and debuging the code
        devServer:{
            contentBase : path.join(__dirname, 'public'),
            historyApiFallback : true,
            publicPath : '/dist/'
        }
    };
}

// module.exports = {
//     //entry : './src/playground/hoc.js',
//     entry : './src/app.js',
//     output: {
//         path: path.join(__dirname, 'public'),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules:[{
//             loader: 'babel-loader',
//             test: /\.js$/,
//             exclude: /node_modules/
//         }, {
//             test: /\.s?css$/,
//             use: [
//                 'style-loader',
//                 'css-loader',
//                 'sass-loader'
//             ]
//         }]
//     },
//     devtool: 'cheap-module-eval-source-map', //it is for development and debuging the code
//     devServer:{
//         contentBase : path.join(__dirname, 'public'),
//         historyApiFallback : true
//     }
// };