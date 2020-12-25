const http = require('http');
const fs = require('fs');
const path = require('path');
const pug = require('pug');
const jwt = require('jsonwebtoken');

fs.readFile('./index.pug', function (error, content) {
  if (error) console.log(error)
  templatePug = content;
});

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
http.createServer(function (request, response) {
  var filePath = request.url;
  var extname = String(path.extname(filePath)).toLowerCase();

  var contentType = mimeTypes[extname] || 'application/octet-stream';
  if (filePath.split('.').length > 1) {
    if (filePath.indexOf('index.js') > -1 || filePath.indexOf('index.css') > -1) {
      filePath = './web/pages' + filePath;
      console.log(filePath)
      fs.readFile(filePath, function (error, content) {
        if (error) {
          if (error.code == 'ENOENT') {
            fs.readFile('./404.html', function (error, content) {
              response.writeHead(404, {
                'Content-Type': 'text/html'
              });
              response.end(content, 'utf-8');
            });
          } else {
            response.writeHead(500);
            response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
          }
        } else {
          response.writeHead(200, {
            'Content-Type': contentType
          });
          response.end(content, 'utf-8');
        }
      });
    } else {
      filePath = './web' + filePath;
      fs.readFile(filePath, function (error, content) {
        if (error) {
          if (error.code == 'ENOENT') {
            fs.readFile('./404.html', function (error, content) {
              response.writeHead(404, {
                'Content-Type': 'text/html'
              });
              response.end(content, 'utf-8');
            });
          } else {
            response.writeHead(500);
            response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
          }
        } else {
          response.writeHead(200, {
            'Content-Type': contentType
          });
          response.end(content, 'utf-8');
        }
      });
    }
  } else {
    console.log(filePath, request.url)
    if (request.url == '/login/') {
      fs.readFile('./web/login.html', function (error, loginContent) {
        if (error) {
          console.log(error)
          fs.readFile('./404.html', function (error, content) {
            response.writeHead(404, {
              'Content-Type': 'text/html'
            });
            response.end(content, 'utf-8');
          });
        } else {
          //console.log(loginContent.toString())
          response.writeHead(200, {
            'Content-Type': 'text/html'
          });
          response.end(loginContent);
        }
      });
    } else {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.end(pug.render(templatePug, {
        dir: path.join(filePath, 'index.js'),
        dircss: path.join(filePath, 'index.css')
      }));
    }
  }
}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');

var auth = function (req, res, callback) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      callback({
        result: false,
        message: 'Invalid ID'
      });
    } else {
      callback({
        result: true
      });
    }
  } catch {
    callback({
      result: false,
      message: 'Invalid Request'
    });
  }
};