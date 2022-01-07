"use strict";
exports.__esModule = true;
var express = require("express");
var StartUp = /** @class */ (function () {
    //digita ctor e enter
    function StartUp() {
        this.app = express();
        this.routes();
    }
    //criando rotas
    StartUp.prototype.routes = function () {
        this.app.route('/').get(function (req, res) {
            res.send({ versao: '0.0.1' });
        });
    };
    return StartUp;
}());
exports["default"] = new StartUp();
