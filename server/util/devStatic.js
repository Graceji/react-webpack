const axios = require('axios');
const webpack = require('webpack');
const path = require('path');
const MemoryFs = require('memory-fs'); // 从内存中读写内容
const ReactDomServer = require('react-dom/server');
const serverConfig = require('../../build/webpack.config.server');

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/index.html')
      .then(res => {
        resolve(res.data);
      })
      .catch(reject);
  })
}

// string => module
// const Module = module.constructor;
// const m = new Module();

// const serverCompiler = webpack(serverConfig);
// const mfs = new MemoryFs();

// let serverBundle;

// serverCompiler.outputFileSystem = mfs;

// serverCompiler.watch({}, (err, stats) => {
//   if (err) throw err;
//   stats = stats.toJson();
//   stats.errors.forEach(err => console.error(err));
//   stats.warnings.forEach(warn => console.warn(warn));

//   const bundlePath = path.join(
//     serverConfig.output.path,
//     serverConfig.output.filename
//   );

//   const bundle = mfs.readFileSync(bundlePath, 'utf-8'); // string
//   // 使用这个方法的时候一定要指定模块的名字
//   m._compile(bundle, 'server-entry.js'); // 用module解析js string的内容， 生成一个新的模块
//   serverBundle = m.exports.default;
// });

module.exports = (app, router) => {
  router.get('*', async (ctx) => {
    ctx.body = await getTemplate()
      .then(template => {
        // const content = ReactDomServer.renderToString(serverBundle);
        // console.log(serverBundle);
        // console.log(content);
        // 不知道为什么这样也可以？？？？
        // const content = ReactDomServer.renderToString('');        
        return template.replace('<!-- app -->', 'content');
      });
  });
}
