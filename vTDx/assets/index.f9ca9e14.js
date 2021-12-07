var S=Object.defineProperty;var T=(a,e,t)=>e in a?S(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var v=(a,e,t)=>(T(a,typeof e!="symbol"?e+"":e,t),t);const x=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};x();class w{constructor(){v(this,"toastTimeout",0)}newError(e){const t=e.id,o=e.message;let n=document.getElementById(t);n||(n=document.getElementById("page-allnotes")||document.createElement("div")),n.innerHTML="";const s=document.createElement("div"),l=document.createElement("span"),d=document.createElement("h3"),i=document.createTextNode(o),c=document.createElement("button");c.innerText=e.buttonCaption,c.addEventListener("click",e.buttonAction),l.className="material-icons big-x2",l.innerText=e.materialIcon,s.className="centered-absolute",d.append(i),s.append(l,d,c),n.append(s)}toast(e){clearTimeout(this.toastTimeout),this.hideToast(),setTimeout(()=>{const t=e.title,o=e.text,n=e.delay||0,s=document.getElementById("toast-div")||document.createElement("div"),l=document.getElementById("toast-title")||document.createElement("div"),d=document.getElementById("toast-content")||document.createElement("div");s.classList.remove("hidden"),l.innerText=t,d.innerText=o,n&&(this.toastTimeout=setTimeout(this.hideToast,n))},250)}init(){const e=document.createElement("div"),t=document.createElement("h3"),o=document.createElement("p");e.className="toast hidden",e.id="toast-div",t.innerText="{{title}}",t.className="nomargin",t.id="toast-title",o.innerText="{{content}}",o.className="nomargin",o.id="toast-content",e.append(t,o),document.body.append(e)}hideToast(){(document.getElementById("toast-div")||document.createElement("div")).classList.add("hidden")}}const m=new w;class B{addColorClasses(){for(let e in r){const t=r[e],o=`.${t} { color: var(--${t}); }`;try{document.styleSheets[0].insertRule(o,0)}catch{}}}}var r;(function(a){a[a.red=0]="red",a[a.green=1]="green",a[a.yellow=2]="yellow",a[a.blue=3]="blue",a[a.purple=4]="purple",a[a.aqua=5]="aqua",a[a.gray=6]="gray",a[a.orange=7]="orange"})(r||(r={}));const C=new B,f=new Map([["home",{dispName:"Home",materialIcon:"home",onSidebar:!0,color:r.blue,default:!0,addBreak:!0}],["allnotes",{dispName:"All Notes",materialIcon:"apps",onSidebar:!0,color:r.purple,hasCountableContent:!0}],["pinned",{dispName:"Pinned Notes",materialIcon:"bookmark",onSidebar:!0,color:r.green,addBreak:!0,hasCountableContent:!0}],["task",{dispName:"All Tasks",materialIcon:"insert_drive_file",onSidebar:!0,color:r.yellow,hasCountableContent:!0}],["unftasks",{dispName:"Unfinished Tasks",materialIcon:"file_open",onSidebar:!0,color:r.orange,hasCountableContent:!0}],["fintasks",{dispName:"Finished Tasks",materialIcon:"task",onSidebar:!0,color:r.green,hasCountableContent:!0}],["settings",{dispName:"Settings",materialIcon:"settings",onSidebar:!1,color:r.gray}],["error",{dispName:"Error",materialIcon:"error",onSidebar:!1,color:r.red}]]);class A{switch(e,t){var d;const o=document.getElementById(`page-${e}`),n=document.querySelectorAll("div.sidebar>#pages>button");for(let i=0;i<n.length;i++)if(n[i].className="option page",n[i].classList.add(n[i]==t?"selected":"unselected"),n[i]==t)n[i].children[0].classList.add(r[f.get(e).color]);else for(const c in r)n[i].children[0].classList.remove(r[c]);let s=`Page Not Found: ${f.get(e).dispName||"Unknown Page"}`,l="var(--red)";if(o&&f.has(e)){const i=document.querySelectorAll("div.page");for(let c=0;c<i.length;c++){if(i[c]!=o){i[c].classList.add("hidden");continue}i[c].classList.remove("hidden")}l=`var(--${r[(d=f.get(e))==null?void 0:d.color]})`,s=f.get(e).dispName,document.title=`vTDx - ${f.get(e).dispName}`}else{this.switch("error");const i={message:"Sorry, that page doesn't seem to exist.",materialIcon:"web_asset_off",buttonCaption:"Go Home",buttonAction:()=>{this.switch("home",document.getElementById("button-page-home"))},id:"page-error"};m.newError(i),document.getElementById("page-dot").style.color=l,document.getElementById("page-disp").innerText=s,document.title="vTDx - Page Not Found"}document.getElementById("page-dot").style.color=l,document.getElementById("page-disp").innerText=s}}const N=new A;class L{countPinned(){let e=0;const t=this.getNotes();for(let o=0;o<t.length;o++)t[o].pinned&&e++;return e}countUnpinned(){const e=this.countPinned();return this.getNotes().length-e}countNotes(){return this.getNotes().length}populateAllNotes(e,t){t||(t=document.getElementById("page-allnotes")||document.createElement("div")),e&&(t.innerHTML="");const o=this.getNotes();for(let n=0;n<o.length;n++)this.displayNote(n,t);if(!o.length){const n={materialIcon:"description",message:"You have no notes.",id:"page-allnotes",buttonCaption:"Create a note",buttonAction:()=>{k.show(h.note,!0)}};m.newError(n)}}populatePinnedNotes(e,t){t||(t=document.getElementById("page-pinned")||document.createElement("div")),e&&(t.innerHTML="");const o=this.getNotes();let n=0;for(let s=0;s<o.length;s++)console.log(o[s].pinned),o[s].pinned&&(this.displayNote(s,t),n++);if(!n){const s={materialIcon:"bookmark",message:"You have no pinned notes.",id:"page-pinned",buttonCaption:"Goto your notes",buttonAction:()=>{N.switch("allnotes",document.getElementById("button-page-allnotes")||document.createElement("div"))}};m.newError(s)}}refreshAll(){this.populateAllNotes(!0),this.populatePinnedNotes(!0),console.log(`Pinned: ${this.countPinned()} | Unpinned: ${this.countUnpinned()} | Notes: ${this.countNotes()}`);const e=document.querySelector("button#button-page-allnotes span.counter")||document.createElement("div"),t=document.querySelector("button#button-page-pinned span.counter")||document.createElement("div");e.innerText=`${this.countNotes()}`,t.innerText=`${this.countPinned()}`}createNote(e,t){const o=this.getNotes(),n={title:e,content:t,pinned:!1};o.push(n),localStorage.setItem("notestore",JSON.stringify(o))}deleteNote(e){const t=this.getNotes();e<=t.length&&t.splice(e,1),localStorage.setItem("notestore",JSON.stringify(t))}pinNote(e){const t=this.getNotes();e<=t.length&&(t[e].pinned=!0),localStorage.setItem("notestore",JSON.stringify(t))}unPinNote(e){const t=this.getNotes();e<=t.length&&(t[e].pinned=!1),localStorage.setItem("notestore",JSON.stringify(t))}togglePinnedNote(e){const t=this.getNotes();e<=t.length&&(t[e].pinned?this.unPinNote(e):this.pinNote(e),this.refreshAll())}getNotes(){return JSON.parse(localStorage.getItem("notestore"))||[]}displayNote(e,t){t||(t=document.getElementById("page-allnotes")||document.createElement("div"));const o=this.getNotes(),n=document.createElement("div"),s=document.createElement("h3"),l=document.createTextNode(o[e].title),d=document.createElement("p"),i=document.createTextNode(o[e].content),c=document.createElement("button"),u=document.createElement("span"),p=document.createElement("button"),b=document.createElement("span");s.className="header",d.className="content",c.className="delete",c.title="Delete Note",c.addEventListener("click",()=>{this.deleteNote(e),this.refreshAll()}),p.className=`pin${o[e].pinned?" unpin":""}`,p.title=`${o[e].pinned?"Unpin":"Pin"} this Note`,p.addEventListener("click",()=>{this.togglePinnedNote(e),this.refreshAll()}),u.className="material-icons",u.innerText="delete",b.className="material-icons",b.innerText=`bookmark${o[e].pinned?"_remove":"_add"}`,s.append(l),d.append(i),c.append(u),p.append(b),n.className="note",n.append(s,d,c,p),t.append(n)}}const E=new L;class ${countFinished(){var o;let e=0;const t=this.gettasks();for(let n=0;n<t.length;n++)((o=t[n])==null?void 0:o.finished)&&e++;return e}countUnfinished(){const e=this.countFinished();return this.gettasks().length-e}countTasks(){return this.gettasks().length}populatetaskPage(e,t){if(t||(t=document.getElementById("page-task")||document.createElement("div")),t){e&&(t.innerHTML="");const o=this.gettasks();for(let n=0;n<o.length;n++)this.displaytask(n,t);if(!o.length){const n={materialIcon:"task",message:"You have no tasks.",id:"page-task",buttonCaption:"Create a task",buttonAction:()=>{k.show(h.task,!0)}};m.newError(n)}}}populateUnFinishedTasksPage(e,t){if(t||(t=document.getElementById("page-unftasks")||document.createElement("div")),t){e&&(t.innerHTML="");const o=this.gettasks();let n=0;for(let s=0;s<o.length;s++)o[s].finished||(this.displaytask(s,t),n++);if(!n){const s={materialIcon:"task",message:"All your tasks are finished!",id:"page-unftasks",buttonCaption:"Goto your tasks",buttonAction:()=>{N.switch("task",document.getElementById("button-page-task")||document.createElement("div"))}};m.newError(s)}}}populateFinishedTasksPage(e,t){if(t||(t=document.getElementById("page-fintasks")||document.createElement("div")),t){e&&(t.innerHTML="");const o=this.gettasks();let n=0;for(let s=0;s<o.length;s++)o[s].finished&&(this.displaytask(s,t),n++);if(!n){const s={materialIcon:"warning",message:"You haven't completed any of your tasks!",id:"page-fintasks",buttonCaption:"Goto your tasks",buttonAction:()=>{N.switch("task",document.getElementById("button-page-task")||document.createElement("div"))}};m.newError(s)}}}createtask(e){const t=this.gettasks(),o={text:e,finished:!1};t.push(o),localStorage.setItem("taskstore",JSON.stringify(t))}displaytask(e,t){var n;const o=this.gettasks();if(e<=o.length){t||(t=document.getElementById("page-task")||document.createElement("div"));const s=document.createElement("div"),l=document.createElement("p"),d=document.createTextNode((n=o[e])==null?void 0:n.text),i=document.createElement("button"),c=document.createElement("span"),u=document.createElement("button"),p=document.createElement("span");l.className="header",i.className="delete",i.title="Delete task",i.addEventListener("click",()=>{this.deletetask(e),this.refreshAll()}),u.className="finish",u.title=`${o[e].finished?"Mark not done":"Mark done"}`,u.addEventListener("click",()=>{this.toggletaskFinished(e),this.refreshAll()}),p.className="material-icons",p.innerText=`${o[e].finished?"check_box":"check_box_outline_blank"}`,c.className="material-icons",c.innerText="delete",l.append(d),i.append(c),u.append(p),s.className="task",s.append(l,u,i),t.append(s)}}gettasks(){return JSON.parse(localStorage.getItem("taskstore"))||[]}deletetask(e){const t=this.gettasks();e<=t.length&&(t.splice(e,1),m.toast({text:`Task #${e+1} deleted.`,title:"",delay:3e3})),localStorage.setItem("taskstore",JSON.stringify(t))}refreshAll(){this.populatetaskPage(!0),this.populateUnFinishedTasksPage(!0),this.populateFinishedTasksPage(!0),console.log(`Finished: ${this.countFinished()} | Unfinished: ${this.countUnfinished()} | Tasks: ${this.countTasks()}`);const e=document.querySelector("button#button-page-task span.counter")||document.createElement("div"),t=document.querySelector("button#button-page-fintasks span.counter")||document.createElement("div"),o=document.querySelector("button#button-page-unftasks span.counter")||document.createElement("div");e.innerText=`${this.countTasks()}`,t.innerText=`${this.countFinished()}`,o.innerText=`${this.countUnfinished()}`}toggletaskFinished(e){var o;const t=this.gettasks();e<=t.length&&(((o=t[e])==null?void 0:o.finished)?this.markUnfinished(e):this.markFinished(e))}markUnfinished(e){const t=this.gettasks();e<=t.length&&(t[e].finished=!1,m.toast({text:`Marked task #${e+1} as unfinished.`,title:"",delay:3e3})),localStorage.setItem("taskstore",JSON.stringify(t))}markFinished(e){const t=this.gettasks();e<=t.length&&(t[e].finished=!0,m.toast({text:`Marked task #${e+1} as finished.`,title:"",delay:3e3})),localStorage.setItem("taskstore",JSON.stringify(t))}completeAll(){const e=this.gettasks();for(let t=0;t<e.length;t++)e[t].finished=!0;m.toast({text:"Marked all tasks as finished.",title:"",delay:3e3}),localStorage.setItem("taskstore",JSON.stringify(e)),this.refreshAll()}}const y=new $;class P{constructor(){v(this,"initDone",!1)}init(){var p;const e=document.createElement("div"),t=document.createElement("div"),o=document.createElement("h3"),n=document.createElement("p"),s=document.createElement("p"),l=document.createElement("input"),d=document.createElement("textarea"),i=document.createElement("span"),c=document.createElement("button"),u=document.createElement("button");e.id="create-note-dialog",e.className="hidden",t.id="create-note-dialog-shade",t.className="hidden",o.innerText="Create new {{type}}",n.className="nomargin",n.innerText="Title",s.className="nomargin",s.innerText="Content",l.className="fullwidth",d.className="fullwidth",i.className="bottomright",u.id="cancel-button",c.id="create-button",u.innerText="Cancel",c.innerText="Create {{type}}",u.addEventListener("click",this.hide),i.append(u,c),e.append(o,n,l,s,d,i),(p=document.querySelector("div.content"))==null||p.append(t,e),this.initDone=!0}show(e,t){if(this.initDone){const o=document.querySelector("div#create-note-dialog input"),n=document.querySelector("div#create-note-dialog textarea"),s=document.getElementById("create-note-dialog-shade"),l=document.getElementById("create-note-dialog"),d=document.querySelector("div#create-note-dialog h3"),i=document.querySelector("div#create-note-dialog button#create-button"),c=document.querySelectorAll("div#create-note-dialog p.nomargin"),u=M.get(h[e]);t&&(o.value="",n.value=""),d.innerText=`Create New ${u}`,i.innerText=`Create ${u}`,s.classList.remove("hidden"),l.classList.remove("hidden"),console.log(h[e]),h[e]=="task"?(n.style.display="none",c[1].style.display="none",o.style.marginBottom="50px",i.addEventListener("click",this.processtask),c[0].innerText="Content"):(n.style.display="",c[1].style.display="",o.style.marginBottom="",i.addEventListener("click",this.processNote),c[0].innerText="Title")}}hide(){const e=document.getElementById("create-note-dialog-shade"),t=document.getElementById("create-note-dialog");e==null||e.classList.add("hidden"),t==null||t.classList.add("hidden")}processNote(){const e=document.querySelector("div#create-note-dialog input"),t=document.querySelector("div#create-note-dialog textarea");e.value&&t.value?(E.createNote(e.value,t.value),k.hide(),m.toast({text:"Note created!",title:"",delay:3e3})):m.toast({text:"title or content fields are not filled out.",title:"Unable to create note",delay:3e3}),E.refreshAll()}processtask(){const e=document.querySelector("div#create-note-dialog input");e.value?(y.createtask(e.value),k.hide()):m.toast({text:"Content field is not filled out.",title:"Unable to create task",delay:3e3}),y.refreshAll()}}const M=new Map([["note","Note"],["task","Task"]]);var h;(function(a){a[a.task=0]="task",a[a.note=1]="note"})(h||(h={}));const k=new P;class U{populateHomeButtons(){const e=document.querySelectorAll("#page-home>div.centered-absolute");for(const t of f)if(t[1].onSidebar&&!t[1].default){const o=document.createElement("button"),n=document.createElement("span"),s=document.createElement("span"),l=document.createTextNode(t[1].dispName);n.className="material-icons",n.innerText=t[1].materialIcon,s.className="nomargin",s.append(l),o.append(n,s),o.addEventListener("click",()=>{N.switch(t[0],document.getElementById(`button-page-${t[0]}`))}),e[0].append(o),t[1].addBreak&&e[0].append(document.createElement("hr"))}}}const q=new U,D=new Map([["newnote",{dispName:"New Note",materialIcon:"add_circle",action:()=>{k.show(h.note,!0)},color:r.purple}],["clearall",{dispName:"Clear All Notes",materialIcon:"delete",action:()=>{confirm(`Are you sure you want to clear all notes?

Doing this will clear all notes without return.`)&&(m.toast({title:"",text:"Cleared all notes",delay:3e3}),localStorage.removeItem("notestore"),E.refreshAll())},color:r.red,addBreak:!0}],["newtask",{dispName:"New task",materialIcon:"note_add",action:()=>{k.show(h.task,!0)},color:r.purple}],["clearalltasks",{dispName:"Clear All tasks",materialIcon:"clear_all",action:()=>{confirm(`Are you sure you want to clear all tasks?

Doing this will clear all tasks without return.`)&&(m.toast({title:"",text:"Cleared all tasks",delay:3e3}),localStorage.removeItem("taskstore"),y.refreshAll())},color:r.red}],["finishalltasks",{dispName:"Complete All Tasks",materialIcon:"done_all",action:()=>{y.completeAll()},color:r.green}]]);class F{populatePages(){const e=document.querySelector("div.sidebar>div#pages");for(const t of f)if(t[1].onSidebar){const o=document.createElement("span"),n=document.createElement("button"),s=document.createElement("span");if(s.innerText=t[1].dispName,o.innerText=t[1].materialIcon,o.className="material-icons",n.className="page unselected option",n.id=`button-page-${t[0]}`,n.title=t[1].dispName,n.append(o),n.append(s),n.addEventListener("click",()=>N.switch(t[0],n)),n.addEventListener("mouseenter",()=>{o.style.color=`var(--${r[t[1].color]})`,s.style.color=`var(--${r[t[1].color]})`}),n.addEventListener("mouseleave",()=>{o.style.color="",s.style.color=""}),e==null||e.append(n),t[1].addBreak&&(e==null||e.append(document.createElement("hr"))),t[1].hasCountableContent){const l=document.createElement("span");l.className="counter",l.innerText="?",n.append(l)}}}populateActions(){const e=document.querySelector("div.sidebar>div#actions");for(const t of D){const o=document.createElement("span"),n=document.createElement("button"),s=document.createElement("span"),l=`${Math.floor(Math.random()*32768)}`;s.innerText=t[1].dispName,o.innerText=t[1].materialIcon,o.className="material-icons",o.id=l,n.className="action option",n.title=t[1].dispName,n.append(o),n.append(s),n.addEventListener("click",t[1].action),n.addEventListener("mouseenter",()=>{o.style.color=`var(--${r[t[1].color]})`,s.style.color=`var(--${r[t[1].color]})`}),n.addEventListener("mouseleave",()=>{o.style.color="",s.style.color=""}),e==null||e.append(n),t[1].addBreak&&(e==null||e.append(document.createElement("hr")))}}toggleSidebar(){(localStorage.getItem("sidebar-collapsed")||"false")=="true"?g.expandSidebar():g.collapseSidebar()}expandSidebar(){document.body.classList.remove("sidebar-collapsed"),localStorage.setItem("sidebar-collapsed","false")}collapseSidebar(){document.body.classList.add("sidebar-collapsed"),localStorage.setItem("sidebar-collapsed","true")}init(){this.syncSidebarState(),document.getElementById("sidebar-toggle").addEventListener("click",()=>{g.toggleSidebar(),g.syncSidebarState()})}syncSidebarState(){(localStorage.getItem("sidebar-collapsed")||"false")=="true"?g.collapseSidebar():g.expandSidebar()}}const g=new F;class H{init(){const e=document.createElement("button"),t=document.createElement("span");e.className="action",e.id="sidebar-toggle",t.className="material-icons",t.innerText="more_vert",e.append(t),document.querySelectorAll("div.headerbar .header")[0].append(e)}}const _=new H;C.addColorClasses();const I="home";_.init();k.init();g.init();m.init();g.populateActions();g.populatePages();E.refreshAll();y.refreshAll();N.switch(I,document.getElementById(`button-page-${I}`));q.populateHomeButtons();
