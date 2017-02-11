module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/main.jsx',
      Nav: 'app/components/nav.jsx',
      Search: 'app/components/search.jsx',
      TodoList: 'app/components/todo-list.jsx',
      TodoActive: 'app/components/todo-active.jsx',
      TodoAdd: 'app/components/todo-add.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015']
        },
        test: /\.jsx?$/ ,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
