// Generated using webpack-cli https://github.com/webpack/webpack-cli

const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");


const isProduction = process.env.NODE_ENV == "production";

const config = {
	target: ["web", "es5"],
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		open: true,
		static: "./dist",
		host: "localhost",
	},
	plugins: [
		new HtmlWebPackPlugin({
            template: 'src/index.html',
            filename: './index.html',
        }),
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				use:[
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"],
						}
					},
					{
						loader: "ts-loader",
						options: {
							configFile:path.resolve(__dirname, "tsconfig.json")
						}
					}
				],
				
			},	
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader', 
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = "production";
	} else {
		config.mode = "development";
	}
	return config;
};
