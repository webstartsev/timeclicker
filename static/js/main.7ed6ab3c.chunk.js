(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){t.exports=a(31)},19:function(t,e,a){},23:function(t,e,a){},25:function(t,e,a){},27:function(t,e,a){},29:function(t,e,a){},31:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(11),r=a.n(i),c=(a(19),a(7)),o=a(13),u=a(2),l=a(3),d=a(5),m=a(4),f=a(6),k=a(1),v=a(12),p=(a(23),a(25),a(27),function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(d.a)(this,Object(m.a)(e).call(this,t))).beforeAction=a.beforeAction.bind(Object(k.a)(Object(k.a)(a))),a}return Object(f.a)(e,t),Object(l.a)(e,[{key:"shouldComponentUpdate",value:function(t){var e=this.props.task;return e.status!==t.task.status||e.time!==t.time}},{key:"beforeAction",value:function(t,e){(0,this.props.onAction)(t,e)}},{key:"showError",value:function(t){t.classList.add("TaskItem-deadline_error")}},{key:"removeError",value:function(t){t.classList.remove("TaskItem-deadline_error")}},{key:"render",value:function(){var t=this.beforeAction,e=this.props,a=e.task,n=e.onChangeDeadline;return s.a.createElement("div",{className:"TaskItem",style:this.style},s.a.createElement("div",{className:"TaskItem-title"},a.title),s.a.createElement("div",{className:"TaskItem-action"},"play"!==a.status&&s.a.createElement("button",{onClick:function(){return t(a.id,"play")},className:"TaskItem-play"},"Play"),"play"===a.status&&s.a.createElement("button",{onClick:function(){return t(a.id,"pause")},className:"TaskItem-pause"},"Pause"),s.a.createElement("button",{onClick:function(){return t(a.id,"stop")},className:"TaskItem-stop"},"Stop")),s.a.createElement("div",{className:"TaskItem-time"},s.a.createElement("div",{className:"TaskItem-deadline"},s.a.createElement("input",{type:"text",ref:"_deadline",defaultValue:a.deadline,onChange:n})),s.a.createElement("div",{className:"TaskItem-diff"})))}}]),e}(s.a.Component));p.defaultProps={task:{},onAction:function(t){return t},time:0,onChangeDeadline:function(t){return t}};var b=p,h=function(t){var e=t.data,a=void 0===e?[]:e,n=t.onAction,i=void 0===n?function(t){return t}:n,r=t.time,c=void 0===r?0:r,o=t.onChangeDeadline,u=void 0===o?function(t){return t}:o;return s.a.createElement("div",{className:"TaskList"},a.map(function(t){return s.a.createElement(b,{key:t.id,task:t,onAction:i,time:c,onChangeDeadline:u})}))},T=(a(29),function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(d.a)(this,Object(m.a)(e).call(this,t))).submit=a.submit.bind(Object(k.a)(Object(k.a)(a))),a}return Object(f.a)(e,t),Object(l.a)(e,[{key:"submit",value:function(t){var e=this.refs._title,a=this.props.onSubmit;t.preventDefault(),""!==e.value&&(a(e.value),e.value="")}},{key:"render",value:function(){return s.a.createElement("form",{className:"AddTask",onSubmit:this.submit},s.a.createElement("input",{ref:"_title",className:"AddTask-input"}),s.a.createElement("input",{type:"submit",value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}))}}]),e}(s.a.Component));T.defaultProps={onSubmit:function(t){return t}};var j=T,y=[{id:"0175d1f0-a8c6-41bf-8d02-df5734d829a4",title:"\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u043e\u043f\u043b\u0430\u0442\u0443",status:"stop",time:0,deadline:""},{id:"0175d1f0-a8c6-41bf-8d02-df5734123123d829a4",title:"sdfsdfsfsdf",status:"stop",time:0,deadline:""},{id:"0175d1f0-a8c6-41bf-8d02-df5734d85346769a4",title:"23424234\u0443 3",status:"stop",time:0,deadline:""}];var O=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(d.a)(this,Object(m.a)(e).call(this,t))).state={tasks:y,currentTask:null,time:0},a.addTask=a.addTask.bind(Object(k.a)(Object(k.a)(a))),a.taskAction=a.taskAction.bind(Object(k.a)(Object(k.a)(a))),a.changeDeadline=a.changeDeadline.bind(Object(k.a)(Object(k.a)(a))),a}return Object(f.a)(e,t),Object(l.a)(e,[{key:"addTask",value:function(t){var e=[this._prepareTask(t)].concat(Object(o.a)(this.state.tasks));this.setState({tasks:e})}},{key:"_prepareTask",value:function(t){return{id:Object(v.v4)(),title:t,status:"stop",time:null,deadline:null}}},{key:"taskAction",value:function(t,e){var a=this,n=this.state.tasks.map(function(n){if(n.id===t){switch(e){case"play":a.startTask(n);break;case"stop":a.stopTask();break;case"pause":a.pauseTask()}return console.log("this.state.time: ",a.state.time),Object(c.a)({},n,{status:e,time:a.state.time})}return"play"===n.status?Object(c.a)({},n,{status:"pause"}):n});this.setState({tasks:n})}},{key:"startTask",value:function(t){var e=this,a=t.time;this.setState({currentTask:t,time:a}),this.timerId=setInterval(function(){var t=a++;e.setState({time:t})},1e3)}},{key:"stopTask",value:function(){clearTimeout(this.timerId),this.setState({currentTask:null})}},{key:"pauseTask",value:function(){clearTimeout(this.timerId),this.setState({currentTask:null})}},{key:"changeDeadline",value:function(t){console.log("value: ",t)}},{key:"render",value:function(){var t=this.state,e=t.tasks,a=t.time,n=this.addTask,i=this.taskAction,r=this.changeDeadline;return s.a.createElement("div",{className:"App"},s.a.createElement(j,{onSubmit:n}),s.a.createElement(h,{data:e,onAction:i,time:a,onChangeDeadline:r}),s.a.createElement("div",{className:"Timer"},0!==a&&function(t){var e=~~(t/3600),a=~~(t%3600/60),n="";return e>0&&(n+=e+"\u0447"),a>0&&(n+=" "+a+"\u043c"),n+=" "+t%60+"\u0441"}(a)))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.7ed6ab3c.chunk.js.map