const { CheckerPlugin } = require('awesome-typescript-loader')
const path = require('path');

function DtsBundlePlugin(){}
DtsBundlePlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', function(){
    var dts = require('dts-bundle');

    dts.bundle({
      name: 'react-serviceflow-diagram',
      main: './dist/index.d.ts',
      out: 'index.d.ts',
      removeSource: false,
      outputAsModuleFolder: true // to use npm in-package typings
    });
  });
};

module.exports = {
  entry: {
    'react-serviceflow-diagram': './src/index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "index.js",
    library: 'react-serviceflow-diagram',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: [
    'react',
    'react-dom',
    'raphael',
  ],
  plugins: [
    new CheckerPlugin(),
    new DtsBundlePlugin()
  ]
};
