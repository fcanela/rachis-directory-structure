const DirectoryStructure = require('../lib').DirectoryStructure;
const expect = require('chai').expect;

describe('DirectoryStructure', () => {
  const ds = new DirectoryStructure();

  const api = {
    basePath: __dirname + '/example'
  };

  it('should resolve a root resource', () => {
    const resData = ds.resolve(api, null, null);

    const result = require('./example');

    result.dirPath = __dirname + '/example';
    result.filePath = __dirname + '/example/index.js';

    expect(resData.dirPath).to.equal(result.dirPath);
    expect(resData.filePath).to.equal(result.filePath);
  });

  it('should resolve a normal resource', () => {
    const parent = {
      dirPath: __dirname + '/example/',
      filePath: __dirname + '/example/index.js'
    };

    const resData = ds.resolve(api, parent, 'bears');

    const result = require('./example/bears');
    result.dirPath = __dirname + '/example/bears';
    result.filePath = __dirname + '/example/bears/index.js';

    expect(resData.dirPath).to.equal(result.dirPath);
    expect(resData.filePath).to.equal(result.filePath);
  });


  it('should resolve a root method', () => {
    const resource = {
      dirPath: __dirname + '/example/',
      filePath: __dirname + '/example/index.js'
    };

    const methodData = ds.resolve(api, resource, 'get');

    const result = require('./example/get');
    result.dirPath = __dirname + '/example/get';
    result.filePath = __dirname + '/example/get/index.js';

    expect(methodData.dirPath).to.equal(result.dirPath);
    expect(methodData.filePath).to.equal(result.filePath);
  });

  it('should resolve a normal method', () => {
    const resource = {
      dirPath: __dirname + '/example/bears',
      filePath: __dirname + '/example/bears/index.js'
    };

    const methodData = ds.resolve(api, resource, 'get');

    const result = require('./example/get');
    result.dirPath = __dirname + '/example/bears/get';
    result.filePath = __dirname + '/example/bears/get/index.js';

    expect(methodData.dirPath).to.equal(result.dirPath);
    expect(methodData.filePath).to.equal(result.filePath);
  });
});
