#! /usr/bin/env node
'use strict';

var commander = require('commander');
var i = require('fs-extra');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var i__default = /*#__PURE__*/_interopDefault(i);

function o(){let t=process.cwd();for(let c=0;c<=5;c++){if(i__default.default.existsSync(".git")){process.cwd()+"/.git";break}process.chdir("..");}process.chdir(t);}var e=new commander.Command;e.command("checkmyrepo").action(o);e.parse();
