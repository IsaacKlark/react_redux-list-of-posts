(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(26)},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(4),o=n.n(s),c=(n(19),n(7)),i=n.n(c),l=n(13),u=n(10),d=n(5),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_POSTS":return t.posts;default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_IS_LOADED":return t.isLoaded;default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LOADING":return t.loading;default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_ORIGINAL_POST":return t.originalPost;default:return e}},g=function(e){var t=e.comment;return r.a.createElement("div",null,r.a.createElement("h3",{className:"headers"},t.name),r.a.createElement("p",null,t.email),r.a.createElement("p",null,t.body))},h=function(e){var t=e.ownpost;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"post"},r.a.createElement("h1",{className:"post__title"},t.title),r.a.createElement("p",{className:"post__text"},t.body)),r.a.createElement("section",{className:"userSection"},t.user.name,r.a.createElement("br",null),t.user.email,r.a.createElement("br",null),t.user.address.street,t.user.address.suite,t.user.address.city,t.user.address.zipcode,t.user.address.geo.lat,t.user.address.geo.lng),r.a.createElement("section",{className:"commentSection"},t.comments.map(function(e){return r.a.createElement(g,{key:e.id,comment:e})})))},v=function(e){var t=e.posts;return r.a.createElement("section",{className:"post-list"},t.map(function(e){return r.a.createElement("div",{key:e.id,className:"allPost"},r.a.createElement(h,{ownpost:e}))}))},y=function(e){return fetch(e).then(function(e){return e.json()})},N={setPosts:function(e){return{type:"CHANGE_POSTS",posts:e}},setIsLoaded:function(e){return{type:"CHANGE_IS_LOADED",isLoaded:e}},setIsLoading:function(e){return{type:"CHANGE_LOADING",loading:e}},setOriginalPost:function(e){return{type:"CHANGE_ORIGINAL_POST",originalPost:e}}},O=Object(d.b)(function(e){return{posts:e.posts,isLoaded:e.isLoaded,loading:e.loading,originalPost:e.originalPost}},N)(function(e){var t=e.posts,n=e.setPosts,s=e.isLoaded,o=e.setIsLoaded,c=e.loading,d=e.setIsLoading,m=e.originalPost,p=e.setOriginalPost,f=Object(a.useState)(""),E=Object(u.a)(f,2),g=E[0];var h=function(e,t){var n;return function(){for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];clearTimeout(n),n=setTimeout(function(){return e.apply(void 0,r)},t)}}(E[1],1e3);if(c)return r.a.createElement("p",{className:"App"},"...LOADING");if(!s)return r.a.createElement("section",{className:"App"},r.a.createElement("button",{type:"button",onClick:function(){var e,t,a,r,s,c;return i.a.async(function(m){for(;;)switch(m.prev=m.next){case 0:return d(!0),m.next=3,i.a.awrap(Promise.all([y("https://jsonplaceholder.typicode.com/users"),y("https://jsonplaceholder.typicode.com/comments"),y("https://jsonplaceholder.typicode.com/posts")]));case 3:e=m.sent,t=Object(u.a)(e,3),a=t[0],r=t[1],s=t[2],d(!0),c=s.map(function(e){return Object(l.a)({},e,{user:a.find(function(t){return t.id===e.userId}),comments:r.filter(function(t){return t.postId===e.id})})}),p(c),n(c),d(!1),o(!0);case 14:case"end":return m.stop()}})}},"Load"));var N=m.filter(function(e){return(e.title+e.body).includes(g)});if(JSON.stringify(N)!==JSON.stringify(t))try{n(N)}catch(O){n([])}return r.a.createElement("section",{className:"App"},r.a.createElement("input",{id:"text",type:"text",placeholder:"Search...",onChange:function(e){return h(e.target.value)}}),r.a.createElement("p",null,t.length," ","posts found"),r.a.createElement(v,{posts:t}))}),A=function(){return r.a.createElement(O,null)},b=n(3),L=Object(b.b)({posts:m,isLoaded:p,loading:f,originalPost:E}),I=Object(b.c)(L);o.a.render(r.a.createElement(d.a,{store:I},r.a.createElement(A,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d511966f.chunk.js.map