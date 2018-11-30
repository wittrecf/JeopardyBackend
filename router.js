const express = require('express'),
search = require('./search');

module.exports = function(app) {  
    // respond with "hello world" when a GET request is made to the homepage
    app.get('/search', function (req, res) {
        search.getData(req, res)
    })
};