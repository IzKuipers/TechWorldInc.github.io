var w=Object.defineProperty;var T=(n,e,t)=>e in n?w(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var u=(n,e,t)=>(T(n,typeof e!="symbol"?e+"":e,t),t);const I=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};I();class x{constructor(){u(this,"dispOut",document.body);u(this,"iId","");u(this,"cmd","");u(this,"val","");u(this,"path","/");u(this,"promptVarName","PS");u(this,"CurrentTheme","");u(this,"vendor","TechWorldInc");u(this,"pName","NetCMD");u(this,"pVer","2.0");u(this,"defaultTheme","default");u(this,"prompt",`[${this.path}]
$`);u(this,"hist",[]);u(this,"kLog",[]);u(this,"argv",[]);u(this,"kStartTime",0);u(this,"kHalt",!1)}}const r=new x,L={execute:()=>{var n,e;if(r.argv.length>0){const o=r.argv.join(" ").toLowerCase();h.has(o)?(a.output(""),a.outputColor("[Usage]: ","var(--blue)",!1),a.output(`${(n=h.get(o))==null?void 0:n.usage}`),a.outputColor(`
[Description]: ${(e=h.get(o))==null?void 0:e.description}`,"var(--blue)")):a.error(`Cannot find command "${o}"`)}else{const t=h.entries();for(const o of t)a.outputColor(`[${o[0].toUpperCase().padEnd(10," ")}]${o[1].description}`,"var(--blue)")}},description:"Display a list of built-in commands",usage:"HELP [command]"},k={execute:()=>{r.dispOut.innerText=""},description:"Clear the screen",usage:"CLEAR"},N={execute:()=>{a.output(`${r.pName} version ${r.pVer}. Created by ${r.vendor}`)},description:"Display the version information",usage:"VER"},R={execute:()=>{const n=r.val.match(/"(.*?)"/);if(n&&n.length>1){const e=n[1];a.output(e)}else a.error("Unable to echo: syntax invalid!")},description:"Echo back the given text",usage:'ECHO "<string>"'};class O{replaceVariables(e){var s,i;let t="";const o=e.split(" ");for(let l=0;l<o.length;l++)if(o[l].startsWith("$")){const c=o[l].replace("$","");if(console.log(c,(s=d.get(c))==null?void 0:s.value),d.has(c)){const m=(i=d.get(c))==null?void 0:i.value;o[l]=m!=null?m:o[l]}}return t=o.join(" "),t}}const D=new O,_=new Map([[r.promptVarName,{value:r.prompt,readonly:!1}],["VER",{value:r.pVer,readonly:!0}],["AUTHOR",{value:r.vendor,readonly:!0}],["PRODUCTNAME",{value:r.pName,readonly:!0}],["THEME",{value:r.CurrentTheme||r.defaultTheme,readonly:!0}]]),d=_,A={execute:()=>{var n,e;if(r.argv.length>1){const t=r.argv[0],o=(n=r.val.match(/"(.*?)"/))==null?void 0:n[1];if(d.has(t)&&((e=d.get(t))==null?void 0:e.readonly)&&o)a.error("",!1),a.output(`Cannot set readonly variable "${t}".`);else{const s={value:o||"",readonly:!1};d.set(t,s),a.outputColor(`Variable [${t}] set to [${o}].`,"var(--blue)")}}else a.error('missing arguments: type "HELP SET" for usage')},description:"Set a variable to a given string",usage:'SET <name> "<value>"'},H={execute:()=>{p.panic()},description:"Cause a kernel panic",usage:"PANIC"},P={execute:()=>{a.error("not implemented")},description:"Display the contents of the current directory",usage:"DIR <path>"};class U{async getUserRepos(e){return await fetch(`https://api.github.com/users/${e}/repos`).then(o=>o.json()).then(o=>o).catch(()=>({}))}async getOrgRepos(e){return await fetch(`https://api.github.com/orgs/${e}/repos`).then(o=>o.json()).then(o=>o).catch(()=>({}))}async getRepoDetails(e){return await fetch(`https://api.github.com/repos/${e}`).then(o=>o.json()).then(o=>o).catch(()=>({}))}async getCommits(e){return await fetch(`https://api.github.com/repos/${e}/commits`).then(o=>o.json()).then(o=>o).catch(()=>({}))}}const g=new U;class V{getTime(e=new Date){p.log("Started Utilities.getTime");const t=e;return{h:t.getHours().toString().padStart(2,"0"),m:t.getMinutes().toString().padStart(2,"0"),s:t.getSeconds().toString().padStart(2,"0"),ms:t.getMilliseconds().toString().padStart(3,"0")}}replaceAllCharsInStr(e,t,o){p.log("Started Utilities.replaceAllCharsInStr");let s="";for(let i=0;i<e.length;i++)e.charAt(i)===t?s+=o:s+=e.charAt(i);return s}createSeparatorFor(e){let t="";for(let o=0;o<e.length;o++)t+="-";return t}removeCharsFromString(e="",t=[]){const o=e.split("");for(let s=0;s<o.length;s++)t.includes(o[s])&&(o[s]="");return o.join("")}unescapeSlashes(e){let t=e.replace(/(^|[^\\])(\\\\)*\\$/,"$&\\");t=t.replace(/(^|[^\\])((\\\\)*")/g,"$1\\$2");try{t=JSON.parse(`"${t}"`)}catch{return e}return t}}const $=new V,M={execute:async()=>{var n;if(r.argv.length){const e=r.argv[0].toLowerCase();C.has(e)?await((n=C.get(e))==null?void 0:n()):a.error(`"${e}" is not a valid sub-command!`)}else a.error('No sub-command specified! Type "HELP GH" for help')},description:"View information about GitHub repositories",usage:"GH <userrepo|orgrepo|repo|commits> <user/repo|user|org>"},C=new Map([["userrepo",async()=>{const n=r.argv[1],e=await g.getUserRepos(n);for(let t=0;t<e.length;t++)a.output(`${e[t].name.padEnd(35," ")}: `,!1),e[t].description?a.output(e[t].description):a.outputColor("[Description Not Found]","var(--gray)")}],["orgrepo",async()=>{const n=r.argv[1],e=await g.getOrgRepos(n);for(let t=0;t<e.length;t++)a.output(`${e[t].name.padEnd(35," ")}: `,!1),e[t].description?a.output(e[t].description):a.outputColor("[Description Not Found]","var(--gray)")}],["repo",async()=>{const n=r.argv[1],e=await g.getRepoDetails(n);!e.message&&!e.documentation_url?(a.output(`Owner           : ${e.owner.login}`),a.output(`Full Name       : ${e.full_name}`),a.output(`Description     : ${e.description||"Description Not Found"}
`),a.output(`URL             : ${e.html_url}`),a.output(`Git URL         : ${e.html_url}.git
`),a.output(`Last Updated    : ${e.updated_at}`)):a.error("failed to fetch repository information: repository not found")}],["commits",async()=>{const n=r.argv[1],e=await g.getCommits(n);if(!e.message&&!e.documentation_url){a.output("");for(let t=0;t<e.length;t++){const o=`Commit ${e[t].sha}`;a.output(`${o}
${$.createSeparatorFor(o)}
Message:
${e[t].commit.message}
Date: ${e[t].commit.author.date}
Created By: ${e[t].commit.author.name} (${e[t].commit.author.email})
`)}}else a.error("failed to fetch commits: repository not found")}]]),F={execute:()=>{if(!r.hist.length){a.output("The history list is empty!");return}const n=r.hist.length.toString().length+1;for(let e=0;e<r.hist.length;e++)a.outputColor(`[${e.toString().padStart(n,"0")}]: ${r.hist[e]}`,"var(--yellow)")},description:"Display the history list",usage:"HIST"},j={execute:async()=>{const n=r.val.match(/"(.*?)"/);let e="";const t=parseInt(r.argv[0]);if(n&&n.length>1&&!!t){e=n[1],a.output(`Repeating "${e}" ${t} times...
`);for(let o=0;o<t;o++)await a.evaluateCommand(e,!0)}else a.error("Unable to repeat: syntax invalid!")},description:"Repeat the specified command a specified amount of times",usage:'REPEAT <amount> "<command>"'},G={execute:()=>{var e,t;let n=d.keys();for(let o of n)a.outputColor(`${((e=d.get(o))==null?void 0:e.readonly)?"@ ":"  "}[${o.padEnd(25," ")}]`,"var(--blue)",!1),a.output(`: ${(t=d.get(o))==null?void 0:t.value.replace(/\n/g,"\\n")}`)},description:"Display a list of all environment variables",usage:"ENV"},W="modulepreload",b={},B="/",v=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${B}${o}`,o in b)return;b[o]=!0;const s=o.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":W,s||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),s)return new Promise((c,m)=>{l.addEventListener("load",c),l.addEventListener("error",m)})})).then(()=>e())},f=new Map([[r.defaultTheme,{path:async()=>v(()=>Promise.resolve({}),["assets/default.7a4b6fbb.css"]),name:r.defaultTheme,author:r.vendor}],["gruvbox",{path:async()=>v(()=>Promise.resolve({}),["assets/gruvbox.d87545ca.css"]),name:"Gruvbox Dark",author:"github/morhertz"}],["nord",{path:async()=>v(()=>Promise.resolve({}),["assets/nord.151c7648.css"]),name:"Nord",author:"Arctic Ice Studio"}]]);class K{async applyTheme(e){var t;return f.has(e)?(r.CurrentTheme=e,await((t=f.get(e))==null?void 0:t.path()),localStorage.setItem("theme",r.CurrentTheme),d.set("THEME",{value:e,readonly:!0}),this.loadStoredTheme(),!0):!1}async loadStoredTheme(){const e=localStorage.getItem("theme");await this.applyTheme(e||r.defaultTheme)}}const S=new K,q={execute:async()=>{var e,t;const n=r.argv[0];if(await S.applyTheme(n)){a.outputColor(`Applied theme [${(e=f.get(n))==null?void 0:e.name}] by [${(t=f.get(n))==null?void 0:t.author}]`,"var(--blue)");return}a.error(`Theme "${n}" not found`)},description:"Applies the specified theme",usage:"THEME <name>"},h=new Map([["help",L],["clear",k],["ver",N],["echo",R],["set",A],["panic",H],["dir",P],["gh",M],["hist",F],["repeat",j],["env",G],["theme",q]]),Y={execute:()=>{p.log("Start Core Function 'default'"),a.error("",!1),a.output(`${r.cmd}: command not found`)}},z={execute:()=>{p.log("Start Core Function 'intro'"),a.outputColor(`[\u2588] Welcome to [${r.pName}]!`,"var(--purple)"),a.outputColor("[\u2588]","var(--blue)"),a.outputColor(`[\u2588] You are currently running build [${r.pVer}].`,"var(--aqua)"),a.outputColor("[\u2588]","var(--green)"),a.outputColor(`[\u2588] Current theme is [${localStorage.getItem("theme")||r.defaultTheme}].`,"var(--yellow)"),a.outputColor("[\u2588]","var(--orange)"),a.outputColor("[\u2588] You can type [help] for a list of commands.","var(--red)")}},E=new Map([["default",Y],["intro",z]]);class J{output(e,t=!0){const o=D.replaceVariables(e),s=document.createElement("span");s.innerText=`${o}${t?`
`:""}`,r.dispOut.append(s)}error(e,t=!0){this.outputColor(`[Error]: ${e}`,"var(--red)",t)}prompt(){var e;if(!r.kHalt){p.log("Started userInterface.prompt");const t=this.getPrompt();r.iId&&(p.log(`Unfocused input ${r.iId}`),(e=document.getElementById(r.iId))==null||e.setAttribute("disabled","true")),p.log("Started userInterface.prompt"),this.outputColor(`
${t}`,"var(--gray)",!1);const o=document.createElement("input");o.className="input",o.id=`#${Math.floor(Math.random()*999999999)}`,o.style.width=`calc(100% - ${t.length}em)`,o.spellcheck=!1,r.iId=o.id,r.dispOut.append(o),this.output("")}}async evaluateCommand(e,t){var c,m,y;p.log("Started userInterface.evaluateCommand");const o=document.getElementById(r.iId);let s,i,l;if(e?(l=e,s=e.split(" "),i=s[0].toLowerCase()):(l=o.value,r.val=o==null?void 0:o.value,s=o==null?void 0:o.value.split(" "),i=s[0].toLowerCase()),r.cmd=i,h.has(i)){r.argv=s.slice(1),r.hist.push(l),console.log(r.hist),p.log(`Executing command "${i}" (${(c=h.get(i))==null?void 0:c.description})`);try{await((m=h.get(i))==null?void 0:m.execute())}catch{p.panic()}}else p.log(`Execution of command "${i}" failed: no such definition`),i&&((y=E.get("default"))==null||y.execute());t||this.prompt()}inputFocusLoop(){const e=setInterval(()=>{const t=document.getElementById(r.iId);t&&t.focus(),r.kHalt&&clearInterval(e)},50)}getPrompt(){var o,s;let e="";const t=(((o=d.get(r.promptVarName))==null?void 0:o.value)||r.prompt).split(" ");for(let i=0;i<t.length;i++){if(t[i].startsWith("$")){const l=t[i].replace("$","");if(d.has(l)){const c=(s=d.get(l))==null?void 0:s.value;t[i]=c!=null?c:t[i]}}e+=`${t[i]} `}return e.trimEnd(),e}outputColor(e,t="var(--red)",o=!0,s=""){const i=e.split(/(\[[^\]]*\])/);for(let l=0;l<i.length;l++){const c=document.createElement("span"),m=i[l].startsWith("[")&&i[l].endsWith("]");c.style.color=m?t:s,c.innerText=$.removeCharsFromString(i[l],["[","]"]),r.dispOut.append(c)}this.output("",o)}}const a=new J;class Q{register(){p.log("Started Keyboard.register"),document.addEventListener("keydown",e=>{this.processEvent(e)})}processEvent(e){switch(e.key.toLowerCase()){case"enter":a.evaluateCommand();break;case"arrowup":console.log("arrowup");break;case"arrowdown":console.log("arrowdown");break}}}const X=new Q;class Z{init(e){var t;e&&(this.setIntervals(),r.kStartTime=new Date().getTime(),a.inputFocusLoop(),X.register(),S.loadStoredTheme(),this.log(`Setting environment.displayOutput to ${e}...`),r.dispOut=e,this.log("Started commands.intro"),(t=E.get("intro"))==null||t.execute(),this.log("Starting prompt loop..."),a.prompt())}setIntervals(){setInterval(()=>{var e;r.kHalt&&((e=document.getElementById(r.iId))==null||e.setAttribute("disabled","true")),window.onerror=console.error=()=>{this.panic()},document.addEventListener("error",()=>{this.panic()})},50)}panic(){r.kHalt=!0,this.log("SYSTEM PANIC! ABORTING ALL PROCESSES..."),r.dispOut.innerText="",a.output(`! KERNEL PANIC !

Kernel Log:`);for(let e=0;e<r.kLog.length;e++)r.dispOut.innerText+=r.kLog[e];a.output(`
System halted. Press Ctrl+R to restart.`)}log(e=""){const t=new Date().getTime()-r.kStartTime;r.kLog.push(`[${t}] ${e}
`)}}const p=new Z;try{p.init(document.body)}catch(n){throw p.panic(),console.log(typeof n),n}
