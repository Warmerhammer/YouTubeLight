(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{22:function(e,t,i){},41:function(e,t,i){"use strict";i.r(t);var c=i(0),s=i(1),n=i(14),a=i.n(n),r=i(3),d=function(e){var t=e.onFormSubmit,i=Object(s.useState)(""),n=Object(r.a)(i,2),a=n[0],d=n[1];return Object(c.jsx)("div",{className:"search-bar ui segment",children:Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(a)},className:"ui form",children:Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{children:"Search For A Video"}),Object(c.jsx)("input",{type:"text",value:a,onChange:function(e){return d(e.target.value)}})]})})})},o=(i(22),function(e){var t=e.video,i=e.onVideoSelect;return Object(c.jsxs)("div",{onClick:function(){return i(t)},className:"video-item item",children:[Object(c.jsx)("img",{className:"ui image",alt:t.snippet.title,src:t.snippet.thumbnails.medium.url}),Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)("div",{className:"header",children:[t.snippet.title," "]})})]})}),u=function(e){var t=e.videos,i=e.onVideoSelect,s=t.map((function(e){return Object(c.jsx)(o,{onVideoSelect:i,video:e},e.id.videoId)}));return Object(c.jsx)("div",{className:"ui relaxed divided list",children:s})},l=function(e){var t=e.video;if(!t)return Object(c.jsx)("div",{children:"Loading ..."});var i="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"ui embed",children:Object(c.jsx)("iframe",{title:"video player",src:i})}),Object(c.jsxs)("div",{className:"ui segment",children:[Object(c.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(c.jsx)("p",{children:t.snippet.description})]})]})},j=i(5),b=i.n(j),m=i(15),v=i(16),O=i.n(v).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:5,key:"'AIzaSyDWUQ1R7KIBte0Lcicd34-1_JQjCm4O8oE';"}}),p=function(e){var t=Object(s.useState)([]),i=Object(r.a)(t,2),c=i[0],n=i[1];Object(s.useEffect)((function(){a(e)}),[e]);var a=function(){var e=Object(m.a)(b.a.mark((function e(t){var i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/search",{params:{q:t}});case 2:i=e.sent,n(i.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return[c,a]},h=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),i=t[0],n=t[1],a=p("buildings"),o=Object(r.a)(a,2),j=o[0],b=o[1];return Object(s.useEffect)((function(){console.log(j),n(j[0])}),[j]),Object(c.jsxs)("div",{className:"ui container",children:[Object(c.jsx)(d,{onFormSubmit:b}),Object(c.jsx)("div",{className:"ui grid",children:Object(c.jsxs)("div",{className:"ui row",children:[Object(c.jsx)("div",{className:"eleven wide column",children:Object(c.jsx)(l,{video:i})}),Object(c.jsx)("div",{className:"five wide column",children:Object(c.jsx)(u,{onVideoSelect:n,videos:j})})]})})]})};a.a.render(Object(c.jsx)(h,{}),document.querySelector("#root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.108ec9e6.chunk.js.map