# Ejs Plain Template

Are you tired of editing your landing page?
Did you lost in dozens lines of html/css code?
Meet basic EJS template.

Component based approach with EJS, SCSS.
And same html file as a result (even more than one html, if you'd like)

## Built With
* HMR
* Babel
* Sass
* Sass resources (variables and mixins auto included)
* Autoprefixer
* Cross env


## Setup

```
    $ git clone https://github.com/DrBoria/ejs-plain-template.git
    $ cd ./ejs-plain-template
    $ npm install 
    $ npm start
```

## Development

If you want to add new page write link on it inside webpack.config.js in customHtmlWebpackPlugin()

Example:
```
    customHtmlWebpackPlugin({
      filename: "page2.html",
      template: "./src/views/pages/page2.ejs",
    }),
```


## Build

```
  npm run build
```

Build in 'build' folder.
By default all is minified. Css and js separately.