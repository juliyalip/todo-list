(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{12:function(t,e,n){t.exports={container:"filter_container__1ZMlI"}},20:function(t,e,n){},29:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var o,i,r=n(1),a=n.n(r),c=n(9),l=n.n(c),s=(n(20),n(5)),d=n(13),u=n(3),h=n(10),f=n(11),b=n(15),p=n(14),j=n(6),v=n.n(j),m=n(7),O=n.n(m),x=(n(29),n(0)),g=function(t){var e=t.message,n=t.type,o=void 0===n?"":n;return Object(x.jsx)("p",{role:"alert",className:"base base-".concat(o),children:e})},y=function(t){var e=t.value,n=t.onChangeInput,o=t.editItem,i=t.onSubmit,r=t.notification;return Object(x.jsx)("form",{onSubmit:i,children:Object(x.jsxs)("div",{className:O.a.container,children:[r&&Object(x.jsx)(g,{message:"fali is empty"}),Object(x.jsx)("label",{children:"Enter you task"}),Object(x.jsx)("textarea",{rows:"5",cols:"25",name:"inputForm",value:e,onChange:n}),Object(x.jsx)("button",{type:"submit",className:O.a.btn,style:{backgroundColor:o?"green":"darkorange"},children:o?"update todo":"add todo"})]})})},w=n(8),C=n.n(w),_=["title","titleId"];function S(){return S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},S.apply(this,arguments)}function k(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function E(t,e){var n=t.title,a=t.titleId,c=k(t,_);return r.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:e,"aria-labelledby":a},c),void 0===n?r.createElement("title",{id:a},"bin"):n?r.createElement("title",{id:a},n):null,o||(o=r.createElement("path",{d:"M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"})),i||(i=r.createElement("path",{d:"M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"})))}var I,M=r.forwardRef(E),F=(n.p,["title","titleId"]);function T(){return T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},T.apply(this,arguments)}function z(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function N(t,e){var n=t.title,o=t.titleId,i=z(t,F);return r.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:e,"aria-labelledby":o},i),void 0===n?r.createElement("title",{id:o},"pencil2"):n?r.createElement("title",{id:o},n):null,I||(I=r.createElement("path",{d:"M12 20l4-2 14-14-2-2-14 14-2 4zM9.041 27.097c-0.989-2.085-2.052-3.149-4.137-4.137l3.097-8.525 4-2.435 12-12h-6l-12 12-6 20 20-6 12-12v-6l-12 12-2.435 4z"})))}var B=r.forwardRef(N),D=(n.p,function(t){var e=t.items,n=t.onDelete,o=t.updateTodo,i=t.updateCheckbox;return Object(x.jsx)("div",{children:Object(x.jsx)("ul",{className:C.a.list,children:e.map((function(t){var e=t.id,r=t.text,a=t.complited;return Object(x.jsxs)("li",{className:C.a.item,children:[Object(x.jsx)("p",{children:r}),Object(x.jsx)("input",{type:"checkbox",checked:a,onChange:function(){i(e)}}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{type:"button",onClick:function(){o(e)},children:Object(x.jsx)(B,{width:"15",height:"15"})}),Object(x.jsx)("button",{type:"button",onClick:function(){n(e)},children:Object(x.jsx)(M,{width:"15",height:"15"})})]})]},e)}))})})}),L=n(12),P=n.n(L),U=function(t){var e=t.value,n=t.onChangeFilter;return Object(x.jsx)("div",{className:P.a.container,children:Object(x.jsxs)("label",{children:["what do you search ",Object(x.jsx)("input",{type:"text",value:e,onChange:n,name:"filter"})]})})},J=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(h.a)(this,n);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={todos:[],inputForm:"",editTodo:!1,notification:!1,id:v.a.generate(),filter:""},t.handleChange=function(e){var n=e.currentTarget,o=n.name,i=n.value;t.setState(Object(u.a)({},o,i))},t.handleSubmit=function(e){if(e.preventDefault(),!t.state.inputForm)return t.setState({notification:!0}),void setTimeout((function(){t.setState({notification:!1})}),1e3);var n={id:t.state.id,complited:!1,text:t.state.inputForm};t.setState((function(t){return{todos:[].concat(Object(d.a)(t.todos),[n]),inputForm:"",editTodo:!1,id:v.a.generate()}}))},t.handleDelete=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t.complitedCheckbox=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{complited:!t.complited}):t}))}}))},t.handleUpdateTodo=function(e){var n=t.state.todos.filter((function(t){return t.id!==e})),o=t.state.todos.find((function(t){return t.id===e}));t.setState({todos:n,editTodo:!0,inputForm:o.text,id:e})},t}return Object(f.a)(n,[{key:"render",value:function(){var t=this.state,e=t.todos,n=t.inputForm,o=t.filter,i=t.notification,r=e.filter((function(t){return t.text.toLowerCase().includes(o.toLowerCase())})),a=e.reduce((function(t,e){return e.complited?t+1:t}),0);return Object(x.jsxs)("div",{children:[Object(x.jsx)(y,{value:n,onChangeInput:this.handleChange,notification:i,onSubmit:this.handleSubmit,editItem:this.state.editTodo}),Object(x.jsxs)("p",{className:"todoComplited",children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445: ",a]}),e.length>0&&Object(x.jsx)(U,{value:o,onChangeFilter:this.handleChange}),e.length>0&&Object(x.jsx)(D,{items:r,onDelete:this.handleDelete,updateCheckbox:this.complitedCheckbox,updateTodo:this.handleUpdateTodo})]})}}]),n}(r.Component);l.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(J,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={container:"form_container__2wL-E",btn:"form_btn__6UcNY"}},8:function(t,e,n){t.exports={list:"todoList_list__2bYgb",item:"todoList_item__ByFKD",containerBtn:"todoList_containerBtn__1GX8f"}}},[[31,1,2]]]);
//# sourceMappingURL=main.3bcdfa71.chunk.js.map