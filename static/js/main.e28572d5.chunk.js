(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},37:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=a(8),i=(a(37),a(7)),s=a(5),m=a(9),u=a.n(m),v=a(12),p=a(31),d=a(13),f=a.n(d),E="https://api.themoviedb.org/3",h="6ed12e064b90ae1290fa326ce9e790ff",g=function(e,t){return Object(p.a)({},e,t)},b=function(){var e=Object(n.useReducer)(g,{pending:!1,error:null,data:[]}),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){var e="".concat(E,"/movie/popular?api_key=").concat(h,"&page=1");(function(){var t=Object(v.a)(u.a.mark(function t(){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r({pending:!0,error:null}),t.prev=1,t.next=4,f.a.get(e);case 4:a=t.sent,r({pending:!1,data:a.data.results}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({pending:!1,error:t.t0});case 11:case"end":return t.stop()}},t,null,[[1,8]])}));return function(){return t.apply(this,arguments)}})()()},[]),[a]},N=function(e){var t=Object(n.useReducer)(g,{pending:!1,error:null,hits:[]}),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)(function(){var t=e.trim(),a="".concat(E,"/search/movie?api_key=").concat(h,"&page=1&query=").concat(t),n=function(){var e=Object(v.a)(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c({pending:!0,error:null}),e.prev=1,e.next=4,f.a.get(a);case 4:n=e.sent,console.log("[useSearchMovies] done: by name ".concat(t)),c({pending:!1,hits:n.data.results}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c({pending:!1,error:e.t0});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(){return e.apply(this,arguments)}}();e.trim()?n(e.trim()):c({pending:!1,hits:[]})},[e]),[r]},_=function(e){var t=Object(n.useReducer)(g,{pending:!1,error:null,movie:null}),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)(function(){var t="".concat(E,"/movie/").concat(e,"?api_key=").concat(h);(function(){var e=Object(v.a)(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c({pending:!0,error:null}),e.prev=1,e.next=4,f.a.get(t);case 4:a=e.sent,c({pending:!1,movie:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({pending:!1,error:e.t0});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(){return e.apply(this,arguments)}})()()},[e]),[r]};function x(e){var t=e.hit;return r.a.createElement(l.b,{to:"/movie/".concat(t.id)},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("i",{className:"fa fa-film"}),r.a.createElement("li",null,t.title)))}function w(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],o=N(a),l=Object(s.a)(o,1)[0],i=(l.pending,l.error,l.hits);return r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{className:"search-input",placeholder:"Search",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"search-box_icon"},r.a.createElement("i",{className:"fa fa-search",style:{fontSize:18}})),function(e){return e.length?r.a.createElement("div",{className:"search-box_result"},r.a.createElement("ul",{className:"search-box_result_list"},e.map(function(e){return r.a.createElement(x,{key:e.id,hit:e})}))):null}(i))}var O="#00d573",j="#5E35B1",y="#C51162";function k(e){var t=e.score,a=y;return t>=8?a=O:t>=4&&(a=j),r.a.createElement("div",{className:"movie-card_score",style:{backgroundColor:a}},r.a.createElement("span",null,"".concat(10*t,"%")))}var S="https://image.tmdb.org/t/p/w370_and_h556_bestv2";function B(e){var t=e.movie,a=new Date(t.release_date),n="".concat(a.toLocaleString("en-us",{month:"long"}),", ").concat(a.getFullYear());return r.a.createElement("div",{className:"col-6 col-md-4 movie-card "},r.a.createElement(l.b,{to:"/movie/".concat(t.id)},r.a.createElement("img",{alt:"movie cover",className:"movie-cover-photo",src:"".concat(S).concat(t.poster_path)}),r.a.createElement(k,{score:t.vote_average}),r.a.createElement("div",{className:"movie-card_info"},r.a.createElement("span",{className:"movie-card_title"},t.title),r.a.createElement("span",{className:"secondary-text"},n))))}function C(){var e=b(),t=Object(s.a)(e,1)[0],a=(t.pending,t.error,t.data);return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"app-header"},r.a.createElement(w,null)),r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"title-text"},"Popular Movies"),r.a.createElement("div",{className:"row"},a.map(function(e){return r.a.createElement(B,{key:e.id,movie:e})}))))}var F="https://image.tmdb.org/t/p";function M(e){var t=e.movie,a="".concat(Math.floor(t.runtime/60),"h ").concat(t.runtime%60,"min");return r.a.createElement("div",{className:"movie-detail_container"},r.a.createElement("img",{className:"movie-cover-photo_small",src:"".concat(F,"/w185_and_h278_bestv2/").concat(t.poster_path)}),r.a.createElement("div",{className:"movie-detail_info"},r.a.createElement("h2",{className:"title-text movie-detail_title"},t.title),r.a.createElement("div",{className:"secondary-text movie-detail_meta"},r.a.createElement("span",null,t.release_date.split("-")[0]," \u2022 ","".concat(10*t.vote_average,"%")," user score"),r.a.createElement("div",null,a))))}function R(e){var t=e.match.params.id,a=_(t),n=Object(s.a)(a,1)[0],c=(n.pending,n.error,n.movie);return c?r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:""},r.a.createElement("img",{className:"movie-backdrop-photo",src:"".concat(F,"/original/").concat(c.backdrop_path)})),r.a.createElement("div",{className:"container"},r.a.createElement(M,{movie:c}),r.a.createElement("hr",{className:"separator"}),r.a.createElement("div",{className:"movie-detail_overview"},r.a.createElement("h3",{className:"title-text",style:{color:"#fff",paddingBottom:15}},"Overview"),r.a.createElement("p",null,c.overview)))):null}var J=function(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:C}),r.a.createElement(i.a,{path:"/movie/:id",component:R}),r.a.createElement(i.a,{path:"*",render:function(){return r.a.createElement("h1",null,"Path not found")}}))};o.a.render(r.a.createElement(l.a,{basename:"/react-tmdb"},r.a.createElement(function(){return r.a.createElement("div",{className:"app-screen"},r.a.createElement(J,null))},null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e28572d5.chunk.js.map