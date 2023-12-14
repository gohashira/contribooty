#! /usr/bin/env node
import { Command } from 'commander';
import y from 'fs-extra';
import { execSync } from 'child_process';
import l from 'chalk';

function c(){let m=process.cwd(),r="";for(let a=0;a<=5;a++){if(y.existsSync(".git")){r=process.cwd()+"/.git";break}process.chdir("..");}return process.chdir(m),r}function i(){if(!c())return;let r=new Map;new Set(execSync('git log --pretty=format:"%H"').toString().split(`
`)).forEach(o=>{let t=execSync(`git show ${o} --shortstat --pretty=format:"%an <%ae>"`).toString(),[e,s]=t.trim().split(`
 `),n=s.split(", ").slice(1).map(d=>parseInt(d.split(" ")[0]))[0],f=r.get(e);f?r.set(e,f+n):r.set(e,n);});let p=0;Array.from(r).forEach(([o,t])=>p+=t);let h=Array.from(r).map(([o,t])=>{let e=parseFloat(Math.fround(t/p*100).toFixed(2));return [o,e]}).sort((o,t)=>t[1]-o[1]).map(([o,t])=>[o,`${t}%`]);console.log("Contribooters of this Repo:"),h.forEach(([o,t],e)=>{let s=Math.round(e/h.length*255),n=255-s;console.log(`    Author: ${l.magenta(o)} owns Code Equity: ${l.rgb(s,n,0)(t)}`);});}var u=new Command;u.command("checkmyrepo").action(i);u.parse();
