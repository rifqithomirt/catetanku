const http = require('http');
const fs = require('fs');
const path = require('path');
const pug = require('pug');
fs.readFile('./index.pug', function(error, content) {
  templatePug = content;
});
http.createServer(function(request, response) {
  //console.log('request ', request.url);
  var filePath = request.url;
  //console.log(filePath)

  var extname = String(path.extname(filePath)).toLowerCase();
  var mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
  };

  var contentType = mimeTypes[extname] || 'application/octet-stream';
  if (filePath.split('.').length > 1) {
    if (filePath.indexOf('index.js') > -1 || filePath.indexOf('index.css') > -1) {
      filePath = './web/pages' + filePath;
      console.log(filePath)
      fs.readFile(filePath, function(error, content) {
        if (error) {
          if (error.code == 'ENOENT') {
            fs.readFile('./404.html', function(error, content) {
              response.writeHead(404, { 'Content-Type': 'text/html' });
              response.end(content, 'utf-8');
            });
          } else {
            response.writeHead(500);
            response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
          }
        } else {
          response.writeHead(200, { 'Content-Type': contentType });
          response.end(content, 'utf-8');
        }
      });
    } else {
      filePath = './web' + filePath;
      fs.readFile(filePath, function(error, content) {
        if (error) {
          if (error.code == 'ENOENT') {
            fs.readFile('./404.html', function(error, content) {
              response.writeHead(404, { 'Content-Type': 'text/html' });
              response.end(content, 'utf-8');
            });
          } else {
            response.writeHead(500);
            response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
          }
        } else {
          response.writeHead(200, { 'Content-Type': contentType });
          response.end(content, 'utf-8');
        }
      });
    }

  } else {
    console.log(filePath, request.url)
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(pug.render(templatePug, {
      dir: path.join(filePath, 'index.js'),
      dircss: path.join(filePath, 'index.css')
    }));
  }


}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');