// Generated using webpack-cli https://github.com/webpack/webpack-cli

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");


const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction? MiniCssExtractPlugin.loader : "style-loader";

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
            filename: 'index.html',
        }),
	],
	module: {
		rules: [
			{	
				test: /\.(ts|tsx)$/i,
				loader: "ts-loader",
				exclude: ["/node_modules/"],
				
			},	
			{
				test: /\.css$/i,
				use: [stylesHandler, "css-loader", "postcss-loader"],
			},
			{
				test: /\.(png|jpg|svg|gif)$/i,
				generator: {
                    filename: 'Components/lib/images/[name][ext][query]'
                },
				type: "asset/resource",
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/i,
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
		config.plugins.push(new MiniCssExtractPlugin());
	} else {
		config.mode = "development";
	}
	return config;
};
