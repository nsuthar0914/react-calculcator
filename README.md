# react-calculcator
A calculator made using React + Redux + Material UI + ES6 syntax. 


# Usage and improvement
## Preparation
```bash
$ git clone https://github.com/nsuthar0914/react-calculcator.git
$ mv react-calculcator [YOUR_APPNAME]
$ cd [YOUR_APPNAME]
$ rm -rf .git
$ git init
$ git add -A
$ git commit -m "Initial commit with base calculator"
```

## Package installation
```bash
$ npm install
```

## Use development server
For development server, webpack-dev-server is reasonable. It monitors update files and rebuild them automatically. Since webpack cli command is registerd in `package.json` in this project, just type following command to run webpack-dev-server.

```bash
$ npm start
```

Becareful! the webpack-dev-server rebuild files in `src` automatically but the bundled files are just placed on its memory. Build manually by allowing next section(Build assets), if you want need the bundled files.


## Build assets
To put compiled files into `static` directory, type the following command.

```bash
$ npm run build
```


