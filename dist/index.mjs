#! /usr/bin/env node
import { Command } from 'commander';
import w from 'fs-extra';
import { execSync } from 'child_process';
import g from 'chalk';

function n(){let a=process.cwd(),o="";for(let s=0;s<=5;s++){if(w.existsSync(".git")){o=process.cwd()+"/.git";break}process.chdir("..");}return process.chdir(a),o}function c(){if(!n())return;let o=new Map;new Set(execSync('git log --pretty=format:"%H"').toString().split(`
`)).forEach(r=>{let t=execSync(`git show ${r} --shortstat --pretty=format:"%an <%ae>"`).toString(),[e,d]=t.trim().split(`
 `),p=d.split(", ").slice(1).map(i=>parseInt(i.split(" ")[0])).reduce((i,y)=>i+y),f=o.get(e);f?o.set(e,f+p):o.set(e,p);});let m=0;Array.from(o).forEach(([r,t])=>m+=t);let l=Array.from(o).map(([r,t])=>{let e=Math.fround(t/m*100);return [r,`${e}%`]}).sort((r,t)=>t[1]-r[1]);console.log("Contribooters of this Repo:"),l.forEach(([r,t])=>{console.log(`    Author: ${g.magenta(r)} owns Code Equity: ${g.blueBright(t)}`);});}var u=new Command;u.command("checkmyrepo").action(c);u.parse();
