(this.webpackJsonpjay=this.webpackJsonpjay||[]).push([[0],{24:function(e,t,n){"use strict";n(0);var a=n(11),c=(n(45),n(1));t.a=function(){return Object(c.jsxs)("div",{className:"main-nav",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("p",{children:"Voirme"})}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)(a.c,{to:"/",exact:!0,className:"main-navlink",activeClassName:"main-navlink-active",children:[Object(c.jsx)("i",{className:"fas fa-home"}),Object(c.jsx)("p",{children:"Home"})]}),Object(c.jsxs)(a.c,{to:"/men",exact:!0,className:"main-navlink",activeClassName:"main-navlink-active",children:[Object(c.jsx)("i",{className:"fas fa-male"}),Object(c.jsx)("p",{children:"Men"})]}),Object(c.jsxs)(a.c,{to:"/photography",exact:!0,className:"main-navlink",activeClassName:"main-navlink-active",children:[Object(c.jsx)("i",{className:"fas fa-camera"}),Object(c.jsx)("p",{children:"Photography"})]}),Object(c.jsxs)(a.c,{to:"/women",exact:!0,className:"main-navlink",activeClassName:"main-navlink-active",children:[Object(c.jsx)("i",{className:"fas fa-female"}),Object(c.jsx)("p",{children:"Women"})]}),Object(c.jsxs)(a.c,{to:"/movies",exact:!0,className:"main-navlink",activeClassName:"main-navlink-active",children:[Object(c.jsx)("i",{className:"fas fa-film"}),Object(c.jsx)("p",{children:"Movies"})]})]}),Object(c.jsx)("div",{className:"favourites",children:Object(c.jsx)("i",{className:"far fa-heart"})})]})}},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="CHANGE_MOVIE_SEARCH_FIELD"},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="CHANGE_IS_VISIBLE"},27:function(e,t,n){},4:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"q",(function(){return i})),n.d(t,"r",(function(){return s})),n.d(t,"p",(function(){return o})),n.d(t,"n",(function(){return l})),n.d(t,"o",(function(){return d})),n.d(t,"m",(function(){return j})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return b})),n.d(t,"j",(function(){return O})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"d",(function(){return E})),n.d(t,"t",(function(){return v})),n.d(t,"u",(function(){return g})),n.d(t,"s",(function(){return f})),n.d(t,"h",(function(){return p})),n.d(t,"i",(function(){return x})),n.d(t,"g",(function(){return N}));var a="REQUEST_ALL_MOVIES_PENDING",c="REQUEST_ALL_MOVIES_SUCCESS",r="REQUEST_ALL_MOVIES_FAILED",i="REQUEST_TRENDING_PENDING",s="REQUEST_TRENDING_SUCCESS",o="REQUEST_TRENDING_FAILED",l="REQUEST_POPULAR_PENDING",d="REQUEST_POPULAR_SUCCESS",j="REQUEST_POPULAR_FAILED",u="REQUEST_NEW_RELEASE_PENDING",b="REQUEST_NEW_RELEASE_SUCCESS",O="REQUEST_NEW_RELEASE_FAILED",h="REQUEST_CURRENTLY_AIRING_PENDING",m="REQUEST_CURRENTLY_AIRING_SUCCESS",E="REQUEST_CURRENTLY_AIRING_FAILED",v="REQUEST_TV_SERIES_GENRES_PENDING",g="REQUEST_TV_SERIES_GENRES_SUCCESS",f="REQUEST_TV_SERIES_GENRES_FAILED",p="REQUEST_MOVIE_GENRES_PENDING",x="REQUEST_MOVIE_GENRES_SUCCESS",N="REQUEST_MOVIE_GENRES_FAILED"},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),i=n.n(r),s=n(23),o=n(13),l=n(29),d=n(30),j=n(2),u=n(25),b={searchFieldMovies:""},O=n(26),h={isVisible:!1},m=n(4),E={isPending:!1,allMovies:[],error:""},v={isPending:!1,trending:[],error:""},g={isPending:!1,popularTv:[],error:""},f={isPending:!1,newReleases:[],error:""},p={isPending:!1,currentlyAiring:[],error:""},x={isPending:!1,movieGenres:[],error:""},N={isPending:!1,tvGenres:[],error:""},S=Object(o.c)({searchMoviesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case u.a:return Object(j.a)(Object(j.a)({},e),{},{searchFieldMovies:t.payload});default:return e}},navbarReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O.a:return Object(j.a)(Object(j.a)({},e),{},{isVisible:t.payload});default:return e}},requestAllMoviesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m.b:return Object(j.a)(Object(j.a)({},e),{},{isPending:!0});case m.c:return Object(j.a)(Object(j.a)({},e),{},{allMovies:t.payload,isPending:!1});case m.a:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload,isPending:!1});default:return e}},requestTrendingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m.q:return Object(j.a)(Object(j.a)({},e),{},{isPending:!0});case m.r:return Object(j.a)(Object(j.a)({},e),{},{trending:t.payload,isPending:!1});case m.p:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload,isPending:!1});default:return e}},requestPopularReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m.n:return Object(j.a)(Object(j.a)({},e),{},{isPending:!0});case m.o:return Object(j.a)(Object(j.a)({},e),{},{popularTv:t.payload,isPending:!1});case m.m:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload,isPending:!1});default:return e}},requestNewRealesesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m.k:return Object(j.a)(Object(j.a)({},e),{},{isPending:!0});case m.l:return Object(j.a)(Object(j.a)({},e),{},{newReleases:t.payload,isPending:!1});case m.j:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload,isPending:!1});default:return e}},requestCurrentlyAiringReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m.e:return Object(j.a)(Object(j.a)({},e),{},{isPending:!0});case m.f:return Object(j.a)(Object(j.a)({},e),{},{currentlyAiring:t.payload,isPending:!1});case m.d:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload,isPending:!1});default:return e}},requestTvGenresReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m.t:return Object(j.a)(Object(j.a)({},e),{},{isPending:!0});case m.u:return Object(j.a)(Object(j.a)({},e),{},{tvGenres:t.payload,isPending:!1});case m.s:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload,isPending:!1});default:return e}},requestMovieGenresReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m.h:return Object(j.a)(Object(j.a)({},e),{},{isPending:!0});case m.i:return Object(j.a)(Object(j.a)({},e),{},{movieGenres:t.payload,isPending:!1});case m.g:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}}),_=n(11),R=n(5),y=n(10),P=n.n(y),I=n(1),T=function(e){return e.error?Object(I.jsxs)("div",{children:["Error! ",Object(I.jsx)("button",{onClick:e.retry,children:"Retry"})]}):e.timedOut?Object(I.jsxs)("div",{children:["Taking a long time... ",Object(I.jsx)("button",{onClick:e.retry,children:"Retry"})]}):e.pastDelay?Object(I.jsx)("div",{children:"Loading..."}):null},U=(n(44),n.p+"static/media/carossel-offer.c60af8c8.jpg"),C=n.p+"static/media/Carossel-men.ec8e2c1a.jpg",A=n.p+"static/media/carossel-jeans.b376409f.jpg",G=n.p+"static/media/carossel-women-1.5199664b.jpg",L=(n(27),function(){return Object(I.jsx)("div",{className:"slider",children:Object(I.jsxs)("figure",{children:[Object(I.jsx)("img",{src:U,alt:"image1"}),Object(I.jsx)("img",{src:C,alt:"image2"}),Object(I.jsx)("img",{src:A,alt:"image3"}),Object(I.jsx)("img",{src:G,alt:"image4"}),Object(I.jsx)("img",{src:U,alt:"image1"})]})})}),w=n(24),k=function(){return Object(I.jsxs)("div",{className:"home-window",children:[Object(I.jsx)(w.a,{}),Object(I.jsxs)("div",{className:"top",children:[Object(I.jsx)("div",{className:"home-logo",children:Object(I.jsx)("p",{children:"Voirme"})}),Object(I.jsx)("i",{className:"far fa-heart"})]}),Object(I.jsx)("div",{className:"home-reel",children:Object(I.jsx)(L,{})}),Object(I.jsxs)("div",{className:"deals",children:[Object(I.jsx)("div",{className:"container-header",children:Object(I.jsx)("h3",{children:"Deals of the Week"})}),Object(I.jsx)("div",{className:"deals-content"})]}),Object(I.jsxs)("div",{className:"new-arrivals",children:[Object(I.jsx)("div",{className:"container-header",children:Object(I.jsx)("h3",{children:"New Arrivals"})}),Object(I.jsx)("div",{className:"new-arrivals-content"})]}),Object(I.jsxs)("div",{className:"recommendations",children:[Object(I.jsx)("div",{className:"container-header",children:Object(I.jsx)("h3",{children:"You May Also Like"})}),Object(I.jsx)("div",{className:"recommendations-content"})]})]})},D=n(31),Q=n(32),M=n(34),V=n(33),F=function(e){Object(M.a)(n,e);var t=Object(V.a)(n);function n(e){var a;return Object(D.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(Q.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(I.jsx)("h1",{children:"Oops \ud83d\udc40!! Something went Wrong \ud83d\ude1f"}):this.props.children}}]),n}(a.Component),q=P()({loader:function(){return n.e(3).then(n.bind(null,68))},loading:T,timeout:1e4,delay:300}),W=P()({loader:function(){return n.e(4).then(n.bind(null,69))},loading:T,timeout:1e4,delay:300}),H=P()({loader:function(){return n.e(7).then(n.bind(null,61))},loading:T,timeout:1e4,delay:300}),Y=P()({loader:function(){return n.e(5).then(n.bind(null,62))},loading:T,timeout:1e4,delay:300}),B=P()({loader:function(){return n.e(10).then(n.bind(null,63))},loading:T,timeout:1e4,delay:300}),J=P()({loader:function(){return n.e(8).then(n.bind(null,64))},loading:T,timeout:1e4,delay:300}),z=P()({loader:function(){return n.e(6).then(n.bind(null,65))},loading:T,timeout:1e4,delay:300}),K=P()({loader:function(){return n.e(9).then(n.bind(null,66))},loading:T,timeout:1e4,delay:300}),X=P()({loader:function(){return n.e(11).then(n.bind(null,67))},loading:T,timeout:1e4,delay:300}),Z=function(){return Object(I.jsx)(_.a,{children:Object(I.jsx)("div",{className:"app",children:Object(I.jsx)(F,{children:Object(I.jsxs)(R.c,{children:[Object(I.jsx)(R.a,{path:"/",exact:!0,component:k}),Object(I.jsx)(R.a,{path:"/movies",exact:!0,component:q}),Object(I.jsx)(R.a,{path:"/movies/search",exact:!0,component:W}),Object(I.jsx)(R.a,{path:"/photography",exact:!0,component:H}),Object(I.jsx)(R.a,{path:"/men",exact:!0,component:Y}),Object(I.jsx)(R.a,{path:"/men/shoes",exact:!0,component:B}),Object(I.jsx)(R.a,{path:"/men/clothing",exact:!0,component:J}),Object(I.jsx)(R.a,{path:"/women",exact:!0,component:z}),Object(I.jsx)(R.a,{path:"/women/shoes",exact:!0,component:X}),Object(I.jsx)(R.a,{path:"/women/clothing",exact:!0,component:K})]})})})})},$=Object(l.createLogger)(),ee=Object(o.d)(S,Object(o.a)(d.a,$));i.a.render(Object(I.jsx)(s.a,{store:ee,children:Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(Z,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4fc0feab.chunk.js.map