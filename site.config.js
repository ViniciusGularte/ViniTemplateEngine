
module.exports = {
  site: {
    title: 'ViniTemplateEngine',
    description: 'Micro Static Site Generator in Node.js',
    basePath: process.env.NODE_ENV === 'production' ? '/' : '',
  },
  build: {
    outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
  }
};
