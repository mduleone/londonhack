"use strict";

var express = require("express");

var app = express();

var port = 2000;

// Not using Cors
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// Using Cors
// app.use(cors());

console.log("haha");

app.get("/", function (req, res) {

    console.log("hahaha");
    
    var options = {
      root: __dirname,
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };

    var fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        }
        else {
          console.log('Sent:', fileName);
        }
    });
});

app.get("/:fileName", function (req, res) {
    var options = {
      root: __dirname,
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };

    var fileName = req.params.fileName;
    res.sendFile(fileName, options, function (err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        }
        else {
          console.log('Sent:', fileName);
        }
    });
});

app.get("/:path/:fileName", function (req, res) {
    
    var options = {
      root: __dirname,
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };

    var path = req.params.path;
    var fileName = req.params.fileName;
    res.sendFile('./' + path + '/' + fileName, options, function (err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        }
        else {
          console.log('Sent:', fileName);
        }
    });
});

app.get("/:path1/:path2/:fileName", function (req, res) {
    
    var options = {
      root: __dirname,
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };

    var path1 = req.params.path1;
    var path2 = req.params.path2;
    var fileName = req.params.fileName;
    res.sendFile('./' + path1 + '/' + path2 + '/' + fileName, options, function (err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        }
        else {
          console.log('Sent:', fileName);
        }
    });
});

app.get("/:path1/:path2/:path3/:fileName", function (req, res) {
    
    var options = {
      root: __dirname,
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };

    var path1 = req.params.path1;
    var path2 = req.params.path2;
    var path3 = req.params.path3;
    var fileName = req.params.fileName;
    res.sendFile('./' + path1 + '/' + path2 + '/' + path3 + '/' + fileName, options, function (err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        }
        else {
          console.log('Sent:', fileName);
        }
    });
});

app.get("/:path1/:path2/:path3/:path4/:fileName", function (req, res) {
    
    var options = {
      root: __dirname,
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };

    var path1 = req.params.path1;
    var path2 = req.params.path2;
    var path3 = req.params.path3;
    var path4 = req.params.path4;
    var fileName = req.params.fileName;
    res.sendFile('./' + path1 + '/' + path2 + '/' + path3 + '/'  + path4 + '/' + fileName, options, function (err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        }
        else {
          console.log('Sent:', fileName);
        }
    });
});

app.get("/:path1/:path2/:path3/:path4/:path5/:fileName", function (req, res) {
    
    var options = {
      root: __dirname,
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };

    var path1 = req.params.path1;
    var path2 = req.params.path2;
    var path3 = req.params.path3;
    var path4 = req.params.path4;
    var path5 = req.params.path5;
    var fileName = req.params.fileName;
    res.sendFile('./' + path1 + '/' + path2 + '/' + path3 + '/'  + path4 + '/'  + path5 + '/' + fileName, options, function (err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        }
        else {
          console.log('Sent:', fileName);
        }
    });
});

app.listen(port);