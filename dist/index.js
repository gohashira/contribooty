#! /usr/bin/env node
'use strict';

var commander = require('commander');
var n = require('fs-extra');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var n__default = /*#__PURE__*/_interopDefault(n);

function r(){let o=process.cwd(),e="";for(let i=0;i<=5;i++){if(n__default.default.existsSync(".git")){e=process.cwd()+"/.git";break}process.chdir("..");}return process.chdir(o),e}function t(){r();}var c=new commander.Command;c.command("checkmyrepo").action(t);c.parse();
