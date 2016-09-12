'use strict';

var loaderUtils	= require("loader-utils");

module.exports = function (content) {
  //console.log('\n' + this.request);

  var query = loaderUtils.parseQuery(this.query);
  var fn = this.options[query.functionName];
  if (typeof fn === 'function'){
    content = fn.call(this, content);
  } else {
    console.error("query.functionName not found/defined in main exported config. query: " + this.query);
  }
  return content
}
