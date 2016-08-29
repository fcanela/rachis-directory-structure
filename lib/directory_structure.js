'use strict';

module.exports = function DirectoryStructureConstructor() {
  function DirectoryStructure() {
  }

  const proto = DirectoryStructure.prototype;

  proto.resolve = function(api, resource, name) {
    let path;
    if (resource === null) {
      path = api.basePath;
    } else {
      path = resource.dirPath + '/' + name;
    }

    const that = require(path);
    that.dirPath = path;
    that.filePath = require.resolve(path);

    return that;
  };

  return DirectoryStructure;
};
