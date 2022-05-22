var prettyjson = require('prettyjson');

var data = {
  username: 'vitorsantana',
  url: 'https://github.com/vitorhugosantana',
  linkedin_account: 'https://www.linkedin.com/in/vitor-santana-765913158/',
  stack: ['html', 'javascript', 'nodeJs']
};

var options = {
  noColor: false
};

console.log(prettyjson.render(data, options));