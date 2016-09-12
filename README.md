# Introduction
A webpack loader that allow you define a function direct in the webpack project config. This loader facilitates developing/sketching new loaders before packaging in a separate npm module. It is an alternative to customize [webpack resolve configuration](http://webpack.github.io/docs/configuration.html#resolve-modulesdirectories).

# Example 1
Print content the resource name followed by the content on node console. 
your *webpack.js*
``` javascript
...
module.exports = {
  console: true,
  printContent: function(content) {
    console.log(" resource: " + this.resource);
    console.log(content);
    return content;
  },

 ...
  module: {
    preLoaders: [ // or you can use in loaders section
      {
        loader: 'inline-function',
        query: {"functionName": "printContent"}
      }
    ]
  }

  ...
}
```

# Example 2 
Transform the content based your need.
your *webpack.js*
``` javascript
...
module.exports = {
  console: true,
  transformContent: function(content) {
    // change content here
    return content;
  },

 ...
  module: {
    preLoaders: [ // or you can use in loaders section
      {
        loader: 'inline-function',
        query: {"functionName": "transformContent"}
      }
    ]
  }
  ...
}
```
