'use strict';

var loaderUtils	= require("loader-utils");

module.exports = function (content) {
  var query = loaderUtils.parseQuery(this.query);
  var cacheable = (typeof query.cacheable !== 'undefined') ? true : query.cacheable;

  if (cacheable ) {
    this.cacheable(true);
  }
  var fn = this.options[query.functionName];
  if (typeof fn === 'function'){
    content = fn.call(this, content);
  } else {
    console.error("query.functionName not found/defined in main exported config. query: " + this.query + " for resource: " + this.resource);
  }
  return content
}
