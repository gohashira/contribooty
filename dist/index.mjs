#! /usr/bin/env node
import { Command } from 'commander';
import w from 'fs-extra';
import { execSync } from 'child_process';
import g from 'chalk';

function n(){let c=process.cwd(),r="";for(let s=0;s<=5;s++){if(w.existsSync(".git")){r=process.cwd()+"/.git";break}process.chdir("..");}return process.chdir(c),r}function a(){if(!n())return;let r=new Map;new Set(execSync('git log --pretty=format:"%H"').toString().split(`
`)).forEach(o=>{let t=execSync(`git show ${o} --shortstat --pretty=format:"%an <%ae>"`).toString(),[e,d]=t.trim().split(`
 `),p=d.split(", ").slice(1).map(i=>parseInt(i.split(" ")[0])).reduce((i,y)=>i+y),h=r.get(e);h?r.set(e,h+p):r.set(e,p);});let m=0;Array.from(r).forEach(([o,t])=>m+=t);let u=Array.from(r).map(([o,t])=>{let e=parseFloat(Math.fround(t/m*100).toFixed(2));return [o,e]}).sort((o,t)=>t[1]-o[1]).map(([o,t])=>[o,`${t}%`]);console.log("Contribooters of this Repo:"),u.forEach(([o,t])=>{console.log(`    Author: ${g.magenta(o)} owns Code Equity: ${g.blueBright(t)}`);});}var l=new Command;l.command("checkmyrepo").action(a);l.parse();
