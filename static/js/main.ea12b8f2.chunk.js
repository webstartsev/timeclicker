(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(51)},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),l=a.n(s),c=a(6),i=a(7),u=a(8),m=a(4),d={ADD_TASK:"ADD_TASK",START_TASK:"START_TASK",STOP_TASK:"STOP_TASK",INTERVAL_START:"INTERVAL_START",INTERVAL_STOP:"INTERVAL_STOP",INTERVAL_TIKTAK:"INTERVAL_TIKTAK"},o=a(19),T={tasks:{"0175d1f0-a8c6-41bf-8d02-df5734d829a4":{title:"\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u043e\u043f\u043b\u0430\u0442\u0443",status:"stop",time:3590,deadline:0,diff:0,user:null},"0175d1f0-a8c6-41bf-8d02-df5734123123d829a4":{title:"sdfsdfsfsdf",status:"stop",time:0,deadline:2,diff:0,user:null},"0175d1f0-a8c6-41bf-8d02-df5734d85346769a4":{title:"23424234\u0443 3",status:"stop",time:0,deadline:15,diff:0,user:null}},user:{name:"Sergey Startsev",role:"admin"},timerId:null,currentTask:null},v=(a(34),a(53)),p=a(54),f=a(52),k=(a(36),a(55)),E=(a(38),function(){return r.a.createElement("nav",{className:"MainMenu"},r.a.createElement("div",{className:"MainMenu-wrap"},r.a.createElement(k.a,{exact:!0,activeClassName:"MainMenu-item_active",className:"MainMenu-item",to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement(k.a,{className:"MainMenu-item",activeClassName:"MainMenu-item_active",to:"/tasks"},"\u0417\u0430\u0434\u0430\u0447\u0438")))}),N=function(e){var t=e.children;return r.a.createElement("div",{className:"PageTemplate"},r.a.createElement(E,null),r.a.createElement("div",{className:"PageTemplate-wrap"},t))};a(41);function b(e){var t=~~(e/3600),a=~~(e%3600/60),n=e%60,r="";return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?(r+=t<10?"0"+t+":":t+":",r+=a<10?"0"+a+":":a+":",r+=n<10?"0"+n:n):t>0?(r+=t<10?"0"+t+":":t+":",r+=a<10?"0"+a:a):(r+=a<10?"0"+a+":":a+":",r+=n<10?"0"+n:n),r}var I=function(e){var t=e.currentTask,a=void 0===t?{}:t;return null==a||r.a.createElement("div",{className:"CurrentTask"},r.a.createElement("div",{className:"CurrentTask-wrapper"},r.a.createElement("div",{className:"CurrentTask-title"},a.title),r.a.createElement("div",{className:"CurrentTask-time"},b(a.time))))},O=Object(i.b)(function(e){return{currentTask:e.currentTask}})(I),S=(a(43),function(e,t){return{type:d.ADD_TASK,payload:{title:e,deadline:t}}}),_=function(e,t){return{type:d.START_TASK,payload:{id:e,user:t}}},A=function(e){return{type:d.STOP_TASK,payload:{id:e}}},j=function(e){return{type:d.INTERVAL_START,payload:{timerId:e}}},y=function(e){return{type:d.INTERVAL_STOP,payload:{timerId:e}}},h=function(e,t){return{type:d.INTERVAL_TIKTAK,payload:{id:e,time:t}}},w=(a(45),function(e){var t,a,n=e.addTask,s=void 0===n?function(e){return e}:n;return r.a.createElement("form",{className:"AddTask",onSubmit:function(e){e.preventDefault(),""!==t.value&&(s(t.value,a.value),t.value="",a.value="")}},r.a.createElement("div",{className:"AddTask-wrap"},r.a.createElement("input",{ref:function(e){return t=e},className:"AddTask-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}),r.a.createElement("input",{ref:function(e){return a=e},onChange:function(e){isNaN(Number.parseInt(e.target.value))&&(e.target.value=""),e.target.value.length>4&&(e.target.value=e.target.value.slice(0,-1))},className:"AddTask-input AddTask-input_size_s",placeholder:"\u0441\u0440\u043e\u043a, \u0447."}),r.a.createElement("input",{type:"submit",className:"AddTask-btn",value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})))}),g=Object(i.b)(function(e){return{title:e.title,deadline:e.deadline}},function(e){return{addTask:Object(c.a)(S,e)}})(w),L=(a(47),a(49),function(e){var t,a=e.tasks,n=void 0===a?{}:a,s=e.user,l=void 0===s?{}:s,c=e.timerId,i=void 0===c?null:c,u=e.startTask,m=void 0===u?function(e){return e}:u,d=e.stopTask,o=void 0===d?function(e){return e}:d,T=e.intervalStart,v=void 0===T?function(e){return e}:T,p=e.intervalStop,f=void 0===p?function(e){return e}:p,k=e.intervalTikTak,E=void 0===k?function(e){return e}:k,N=e.id,I=void 0===N?null:N,O=n[I],S=(t=O.time,~~((60*O.deadline*60-t)/3600)),_=function(e,t){switch(t){case"play":null!==i&&(clearInterval(i),f(i));var a=O.time,n=setInterval(function(){var t=a++;E(e,t)},1e3);m(e,l),v(n);break;case"stop":clearInterval(i),o(e),f(i)}};return r.a.createElement("div",{className:"TaskItem"},r.a.createElement("div",{className:"TaskItem-title"},O.title,null!==O.user&&r.a.createElement("span",{className:"TaskItem-user"},O.user.name)),r.a.createElement("div",{className:"TaskItem-detail"},r.a.createElement("div",{className:"TaskItem-action"},"play"===O.status?r.a.createElement("button",{onClick:function(){return _(I,"stop")},className:"TaskItem-btn TaskItem_type_play"},r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"m354.2,247.4l-135.1-92.4c-4.2-3.1-15.4-3.1-16.3,8.6v184.8c1,11.7 12.4,11.9 16.3,8.6l135.1-92.4c3.5-2.1 8.3-10.7 0-17.2zm-130.5,81.3v-145.4l106.1,72.7-106.1,72.7z"}),r.a.createElement("path",{d:"M256,11C120.9,11,11,120.9,11,256s109.9,245,245,245s245-109.9,245-245S391.1,11,256,11z M256,480.1    C132.4,480.1,31.9,379.6,31.9,256S132.4,31.9,256,31.9S480.1,132.4,480.1,256S379.6,480.1,256,480.1z"}))):r.a.createElement("button",{onClick:function(){return _(I,"play")},className:"TaskItem-btn TaskItem_type_stop"},r.a.createElement("svg",{height:"511.99998pt",viewBox:"1 1 511.99998 511.99998",width:"511.99998pt",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m256 512c-141.386719 0-256-114.617188-256-256s114.613281-256 256-256 256 114.613281 256 256c-.167969 141.316406-114.683594 255.832031-256 256zm0-480c-123.710938 0-224 100.289062-224 224s100.289062 224 224 224 224-100.289062 224-224c-.132812-123.65625-100.34375-223.867188-224-224zm0 0"}),r.a.createElement("path",{d:"m208 368c-8.835938 0-16-7.164062-16-16v-192c0-8.835938 7.164062-16 16-16s16 7.164062 16 16v192c0 8.835938-7.164062 16-16 16zm0 0"}),r.a.createElement("path",{d:"m304 368c-8.835938 0-16-7.164062-16-16v-192c0-8.835938 7.164062-16 16-16s16 7.164062 16 16v192c0 8.835938-7.164062 16-16 16zm0 0"})))),r.a.createElement("div",{className:"TaskItem-times"},r.a.createElement("div",{className:"TaskItem-time"},b(O.time)),r.a.createElement("div",{className:"TaskItem-deadline"},O.deadline),r.a.createElement("div",{className:S<0?"TaskItem-diff TaskItem-diff_error":"TaskItem-diff"},0!==O.deadline&&S))))}),R=function(e){var t=e.tasks,a=void 0===t?{}:t,n=e.user,s=void 0===n?{}:n,l=e.timerId,c=void 0===l?null:l,i=e.startTask,u=void 0===i?function(e){return e}:i,m=e.stopTask,d=void 0===m?function(e){return e}:m,o=e.intervalStart,T=void 0===o?function(e){return e}:o,v=e.intervalStop,p=void 0===v?function(e){return e}:v,f=e.intervalTikTak,k=void 0===f?function(e){return e}:f,E=e.onChangeDeadline,N=void 0===E?function(e){return e}:E;return r.a.createElement("div",{className:"TaskList"},r.a.createElement("div",{className:"TaskList-header"},r.a.createElement("div",{className:"TaskList-col TaskList-col_type_name"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("div",{className:"TaskList-groupe"},r.a.createElement("div",{className:"TaskList-col"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"),r.a.createElement("div",{className:"TaskList-col"},"\u0412\u0440\u0435\u043c\u044f"),r.a.createElement("div",{className:"TaskList-col"},"\u0414\u0435\u0439\u0434\u043b\u0430\u0439\u043d"),r.a.createElement("div",{className:"TaskList-col"},"\u0420\u0430\u0437\u043d\u0438\u0446\u0430"))),Object.keys(a).map(function(e){return r.a.createElement(L,{key:e,id:e,user:s,tasks:a,timerId:c,startTask:u,stopTask:d,intervalStart:T,intervalStop:p,intervalTikTak:k,onChangeDeadline:N})}))},K=Object(i.b)(function(e){return{tasks:e.tasks,user:e.user,timerId:e.timerId}},function(e){return{startTask:Object(c.a)(_,e),stopTask:Object(c.a)(A,e),intervalStart:Object(c.a)(j,e),intervalStop:Object(c.a)(y,e),intervalTikTak:Object(c.a)(h,e)}})(R),D=Object(c.b)(function(e,t){switch(t.type){case d.ADD_TASK:var a=t.payload,n=a.title,r=a.deadline;return Object(m.a)({},e,{tasks:Object(m.a)(Object(u.a)({},Object(o.v4)(),{title:n,status:"stop",time:0,deadline:r||null,user:null}),e.tasks)});case d.START_TASK:var s=t.payload,l=s.id,c=s.user,i=Object.keys(e.tasks).reduce(function(t,a){return Object(m.a)({},t,Object(u.a)({},a,Object(m.a)({},e.tasks[a],{status:"stop",user:null})))},{});return Object(m.a)({},e,{tasks:Object(m.a)({},i,Object(u.a)({},l,Object(m.a)({},i[l],{status:"play",user:c}))),currentTask:i[l]});case d.STOP_TASK:var T=t.payload.id,v=e.tasks;return Object(m.a)({},e,{tasks:Object(m.a)({},v,Object(u.a)({},T,Object(m.a)({},v[T],{status:"stop",user:null}))),currentTask:null});case d.INTERVAL_START:var p=t.payload.timerId;return Object(m.a)({},e,{timerId:p});case d.INTERVAL_STOP:return Object(m.a)({},e,{timerId:null});case d.INTERVAL_TIKTAK:var f=t.payload,k=f.id,E=f.time,N=e.tasks;return Object(m.a)({},e,{tasks:Object(m.a)({},N,Object(u.a)({},k,Object(m.a)({},N[k],{time:E}))),currentTask:Object(m.a)({},N[k],{time:E})});default:return e}},T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(i.a,{store:D},r.a.createElement(v.a,null,r.a.createElement("div",{className:"main"},r.a.createElement(p.a,null,r.a.createElement(f.a,{exact:!0,path:"/",component:function(){return r.a.createElement(N,null,r.a.createElement("h1",null,"Time Clicker"),r.a.createElement(O,null))}}),r.a.createElement(f.a,{path:"/tasks",component:function(){return r.a.createElement(N,null,r.a.createElement(g,null),r.a.createElement(K,null),r.a.createElement(O,null))}}),r.a.createElement(f.a,{component:function(e){var t=e.location;return r.a.createElement(N,null,r.a.createElement("div",{className:"page-404"},r.a.createElement("h1",null,"Resource not found at '",t.pathname,"'")))}}))))),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.ea12b8f2.chunk.js.map