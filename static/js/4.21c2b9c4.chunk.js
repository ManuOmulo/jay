(this.webpackJsonpjay=this.webpackJsonpjay||[]).push([[4],{48:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(26),r=function(e){return{type:c.a,payload:e}}},49:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return j})),n.d(t,"g",(function(){return b}));var c=n(25),r=n(4),a=function(e){return{type:c.a,payload:e}},i=function(e){return function(t){t({type:r.b}),fetch(e).then((function(e){return e.json()})).then((function(e){return t({type:r.c,payload:e.results})})).catch((function(e){return t({type:r.a,payload:e})}))}},s=function(){return function(e){e({type:r.q}),fetch("https://api.themoviedb.org/3/trending/all/day?api_key=4ea1a39dbbbf151bd11a686a7c6ee604").then((function(e){return e.json()})).then((function(t){return e({type:r.r,payload:t.results})})).catch((function(t){return e({type:r.p,payload:t})}))}},o=function(){return function(e){e({type:r.n}),fetch("https://api.themoviedb.org/3/tv/popular?api_key=4ea1a39dbbbf151bd11a686a7c6ee604&language=en-US&page=1").then((function(e){return e.json()})).then((function(t){return e({type:r.o,payload:t.results})})).catch((function(t){return e({type:r.m,payload:t})}))}},l=function(){return function(e){e({type:r.k}),fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4ea1a39dbbbf151bd11a686a7c6ee604&language=en-US&page=1").then((function(e){return e.json()})).then((function(t){return e({type:r.l,payload:t.results})})).catch((function(t){return e({type:r.j,payload:t})}))}},u=function(){return function(e){e({type:r.e}),fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=4ea1a39dbbbf151bd11a686a7c6ee604&language=en-US&page=1").then((function(e){return e.json()})).then((function(t){return e({type:r.f,payload:t.results})})).catch((function(t){return e({type:r.d,payload:t})}))}},j=function(){return function(e){e({type:r.h}),fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=4ea1a39dbbbf151bd11a686a7c6ee604&language=en-US").then((function(e){return e.json()})).then((function(t){return e({type:r.i,payload:t.genres})})).catch((function(t){return e({type:r.g,payload:t})}))}},b=function(){return function(e){e({type:r.t}),fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=4ea1a39dbbbf151bd11a686a7c6ee604&language=en-US").then((function(e){return e.json()})).then((function(t){return e({type:r.u,payload:t.genres})})).catch((function(t){return e({type:r.s,payload:t})}))}}},50:function(e,t,n){"use strict";n(0),n(53);var c=n(1);t.a=function(e){var t=e.type,n="skeleton ".concat(t);return Object(c.jsx)("div",{className:n})}},51:function(e,t,n){"use strict";n(0);var c=n(11),r=n(23),a=n(48),i=(n(52),n(1));t.a=function(){var e=Object(r.c)((function(e){return e.navbarReducer.isVisible})),t=Object(r.b)(),n=function(n){n.preventDefault(),t(Object(a.a)(!e))};return Object(i.jsx)("div",{className:e?"nav visible nav-white":"nav nav-white",children:Object(i.jsx)("div",{className:e?"nav visible nav-red":"nav nav-red",children:Object(i.jsxs)("div",{className:e?"nav visible nav-black":"nav nav-black",children:[Object(i.jsx)("button",{className:"nav-btn close-btn",onClick:n,children:Object(i.jsx)("i",{className:"fas fa-times"})}),Object(i.jsxs)("div",{className:"logo",children:[Object(i.jsx)("h2",{children:"Voirme"}),Object(i.jsx)("h3",{children:"Flix"}),Object(i.jsx)("div",{className:"popcorn"})]}),Object(i.jsxs)("ul",{className:"list",children:[Object(i.jsx)("li",{onClick:n,children:Object(i.jsx)(c.b,{to:"/",children:"HOME"})}),Object(i.jsx)("li",{onClick:n,children:Object(i.jsx)(c.b,{to:"/movies",children:"TRENDING DAILY"})}),Object(i.jsx)("li",{onClick:n,children:Object(i.jsx)(c.b,{to:"/movies/search",children:"SEARCH FAVOURITE"})})]}),Object(i.jsx)("div",{className:"delivery-contacts",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"For Delivery Call: "}),Object(i.jsx)("br",{}),"+254 700 400 321"]})})]})})})}},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n(0);var c=n(1);t.a=function(){return Object(c.jsx)("div",{className:"shimmer-wrapper",children:Object(c.jsx)("div",{className:"shimmer"})})}},55:function(e,t,n){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function r(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw i}}}}n.d(t,"a",(function(){return r}))},56:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(55),r=n(0),a=(n(56),n(23)),i=n(49),s=n(48),o=n(51),l=n(1),u=function(e){var t=e.onSearchSubmit,n=e.handleChange,c=e.searchMovies;return Object(l.jsxs)("div",{className:"searchbar",children:[Object(l.jsx)("input",{type:"search",name:"searchItem",placeholder:"search movie or tv series",onChange:n,onKeyUp:c}),Object(l.jsx)("button",{className:"search-button",onClick:t,children:"Search"})]})},j=function(){var e=Object(a.c)((function(e){return e.searchMoviesReducer.searchFieldMovies})),t=Object(a.b)();return Object(l.jsx)("div",{children:Object(l.jsx)(u,{onSearchSubmit:function(n){n.preventDefault(),t(Object(i.a)("https://api.themoviedb.org/3/search/multi?api_key=4ea1a39dbbbf151bd11a686a7c6ee604&language=en-US&page=1&query=".concat(e)))},handleChange:function(e){e.preventDefault(),t(Object(i.h)(e.target.value))},searchMovies:function(n){13===n.keyCode&&(n.preventDefault(),t(Object(i.a)("https://api.themoviedb.org/3/search/multi?api_key=4ea1a39dbbbf151bd11a686a7c6ee604&language=en-US&page=1&query=".concat(e))))}})})},b=n(50),d=function(e){var t=e.movie,n=e.giveGenre,c="movie"===t.media_type?"Movie":"Series",r=t.genre_ids?t.genre_ids[0]:void 0,a="https://image.tmdb.org/t/p/w1280"+t.poster_path;return Object(l.jsxs)("div",{className:"movie-card",children:[Object(l.jsx)("img",{src:a||Object(l.jsx)(b.a,{type:"search-poster"}),alt:t.original_title}),Object(l.jsxs)("div",{className:"movie-info",children:[Object(l.jsx)("h3",{children:t.title||t.original_name}),Object(l.jsxs)("div",{className:"movie-rating",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("strong",{children:"Type: "}),c]}),Object(l.jsxs)("span",{className:"rate",children:[Object(l.jsx)("strong",{children:"Rating: "}),Object(l.jsx)("i",{className:"fas fa-star"})," ",t.vote_average]}),Object(l.jsxs)("span",{className:"lang",children:[Object(l.jsx)("strong",{children:"Language: "}),t.original_language]})]}),Object(l.jsxs)("h4",{children:[Object(l.jsx)("strong",{children:"Genre: "}),Object(l.jsx)("em",{children:n(r)||Object(l.jsx)("em",{children:"Not found"})})]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Release Date: "}),t.release_date||t.first_air_date]}),Object(l.jsxs)("div",{className:"movie-overview",children:[Object(l.jsx)("h3",{children:"Overview"}),Object(l.jsx)("div",{className:"overview-text",children:Object(l.jsx)("p",{children:t.overview||Object(l.jsx)("em",{children:"No available description found"})})})]})]})]})},h=n(54),f=function(e){var t=e.theme||"light";return Object(l.jsx)("div",{className:"skeleton-wrapper ".concat(t),children:Object(l.jsxs)("div",{className:"skeleton-search",children:[Object(l.jsx)(b.a,{type:"search-poster"}),Object(l.jsx)(b.a,{type:"title"}),Object(l.jsx)(b.a,{type:"text"}),Object(l.jsx)(b.a,{type:"text"}),Object(l.jsxs)("div",{className:"skeleton-overview",children:[Object(l.jsx)(b.a,{type:"title"}),Object(l.jsx)(b.a,{type:"text"}),Object(l.jsx)(b.a,{type:"text"}),Object(l.jsx)(b.a,{type:"text"})]}),Object(l.jsx)(h.a,{})]})})};t.default=function(){var e=Object(a.c)((function(e){return e.requestAllMoviesReducer.allMovies})),t=Object(a.c)((function(e){return e.requestAllMoviesReducer.isPending})),n=Object(a.c)((function(e){return e.requestMovieGenresReducer.movieGenres})),u=Object(a.c)((function(e){return e.requestTvGenresReducer.tvGenres})),b=Object(a.c)((function(e){return e.navbarReducer.isVisible})),h=Object(a.b)(),p="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4ea1a39dbbbf151bd11a686a7c6ee604&page=1";Object(r.useEffect)((function(){h(Object(i.a)(p)),h(Object(i.c)()),h(Object(i.g)())}),[h,p]);var v=n.concat(u),O=function(e){if(void 0===e)return"";var t,n=Object(c.a)(v);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.id===e)return r.name}}catch(a){n.e(a)}finally{n.f()}return""},m=void 0===e?Object(l.jsx)("div",{className:"search-error-container",children:Object(l.jsx)("p",{children:"Please add title to search"})}):0===e.length?Object(l.jsxs)("div",{className:"search-error-container",children:[Object(l.jsx)("p",{children:"Movie title not found"}),Object(l.jsx)("p",{style:{marginTop:10},children:"Might be a spelling mistake. Try again.."})]}):e.map((function(e){return Object(l.jsx)(d,{movie:e,giveGenre:O},e.id)})),x=[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(l.jsx)(f,{theme:"dark"},e)}));return Object(l.jsxs)("div",{className:"movie-window-search",children:[Object(l.jsx)("button",{className:"nav-btn open-btn",onClick:function(e){e.preventDefault(),h(Object(s.a)(!b))},children:Object(l.jsx)("i",{className:"fas fa-bars"})}),Object(l.jsxs)("div",{className:"search-banner",children:[Object(l.jsx)("h2",{children:"Unlimited Movies & Series"}),Object(l.jsx)("p",{children:"Search and we Deliver"})]}),Object(l.jsxs)("div",{className:"logo-top",children:[Object(l.jsx)("h2",{children:"Voirme"}),Object(l.jsx)("h3",{children:"Flix"}),Object(l.jsx)("div",{className:"popcorn"})]}),Object(l.jsx)(o.a,{}),Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"allmovies-search",children:t?x:m})]})}}}]);
//# sourceMappingURL=4.21c2b9c4.chunk.js.map