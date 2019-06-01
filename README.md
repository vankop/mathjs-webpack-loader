# mathjs-webpack-loader

loader for mathjs parsed expression

## Installation

```
npm install --save-dev mathjs-webpack-loader && npm install --save mathjs
```

## Usage

**expressions.mathjs**

```
x^2 + x/4 + 3*y
x + y
```

**webpack.config.js**
```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.mathjs?$/,
				loader: 'mathjs-webpack-loader'
			}
		]
	}
};
```

**index.js**

```js
import expressions from 'expressions.mathjs';
import mathjs from 'mathjs';

const instance = mathjs.create();
const compiled = expressions(instance).map(exp => exp.compile());

console.log(compiled[0].eval({x: 4, y: 1})); // 20
console.log(compiled[1].eval({x: 1, y: 1})); // 2
```

If only one expression contains in `*.mathjs` file, then it will be return instead of array. Loader returns function which contains only one parameter - `mathjs` instance, see [configuration](https://mathjs.org/docs/core/configuration.html). 

#### Steps to run example

* fork or clone repository
* ```npm install```
* ```npm run build-example```
* View `example/bundle.js` or `example/index.html` in browser

	
