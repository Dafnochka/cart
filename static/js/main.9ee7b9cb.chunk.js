(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e){e.exports=[{id:1,name:"\u0421\u0443\u043f\u0435\u0440-\u0442\u043e\u0432\u0430\u0440",rating:2.78,trand:"-",priceSegment:4,comments:[{id:1,text:"blablabla"},{id:2,text:"blablabla"},{id:3,text:"blablabla"},{id:4,text:"blablabla"},{id:5,text:"blablabla"}],checked:!1},{id:2,name:"\u0422\u043e\u0436\u0435 \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u0442\u043e\u0432\u0430\u0440",rating:1.98,trand:"+14",priceSegment:4,comments:[],checked:!1},{id:3,name:"\u041d\u0435\u043f\u043b\u043e\u0445\u043e\u0439 \u0442\u043e\u0432\u0430\u0440",rating:1.69,trand:"+4",priceSegment:3,comments:[],checked:!1}]},51:function(e,t,a){e.exports=a(86)},56:function(e,t,a){},58:function(e,t,a){},72:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(41),i=a.n(r),o=(a(56),a(3)),l=a(4),s=a(6),u=a(5),m=a(7),d=(a(58),a(20)),h=a(15),p=a(43),v=a.n(p),b=a(44),f=a(45),E=a(16);var g=Object(h.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA":return{data:t.payload};case"CHECK":var a=e.data[t.payload].checked,n=Object(E.a)({},e);return n.data[t.payload].checked=!a,Object(E.a)({},n)}return e},view:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{view:"day",chartType:"ColumnChart",brand:"Guketleva task"},t=arguments.length>1?arguments[1]:void 0,a="ColumnChart";switch(t.type){case"SET_VIEW":switch(t.payload){case"day":a="LineChart";break;case"month":case"year":a="ColumnChart"}return Object(E.a)({},e,{view:t.payload,chartType:a})}return e}}),k=v.a,j=Object(h.a)(f.a,b.a,k),O=Object(h.d)(g,j),y=a(9),w=a(50);a(72);var N=a(12),C=(a(74),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("div",{className:"container"},c.a.createElement(y.b,{to:"/",className:"navbar-brand"},this.props.brand),c.a.createElement("div",{className:"collapse navbar-collapse"},c.a.createElement("ul",{className:"navbar-nav"},this.props.children))))}}]),t}(c.a.Component));var _=Object(N.a)(function(e){return{data:e.data.data,view:e.view.view,brand:e.view.brand}})(C),S=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("li",{className:this.props.active?"nav-item active":"nav-item"},c.a.createElement(y.b,{className:"nav-link",to:this.props.href},this.props.children))}}]),t}(c.a.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getData",value:function(){this.props.dispatch({type:"FETCH_DATA",payload:w})}},{key:"setView",value:function(e){this.props.dispatch(function(e){return{type:"SET_VIEW",payload:e}}(e))}},{key:"isActive",value:function(e){return window.location.pathname===e}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(_,{brand:this.brand},c.a.createElement(S,{href:"/",active:this.isActive("/")},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),c.a.createElement(S,{href:"/goods",active:this.isActive("/goods")},"\u0422\u043e\u0432\u0430\u0440\u044b"),c.a.createElement(S,{href:"/shopping_cart",active:this.isActive("/shopping_cart")},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430")),this.props.children,c.a.createElement("footer",{className:"card-footer"},"\xa9 \u0413\u0443\u043a\u0435\u0442\u043b\u0435\u0432\u0430 \u0414\u0430\u0440\u044c\u044f 2019\u0433."))}},{key:"componentDidMount",value:function(){this.getData(),this.setState({chartType:this.props.chartType})}}]),t}(c.a.Component);var x=Object(d.b)(function(e){return{data:e.data.data,view:e.view.view,chartType:e.view.chartType}})(T),A=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),c.a.createElement("h2",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435."),c.a.createElement("p",null,"1.\u0421\u043e\u0437\u0434\u0430\u0442\u044c 2 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b (\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f react-router 3.2.0 \u0438 \u0432\u044b\u0448\u0435): /goods/ \u0438 /shopping_cart/"),c.a.createElement("p",null,"2.\u041d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 /goods/ :"),c.a.createElement("p",null,"- \u0441\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044c \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0447\u043a\u0443 \u043a\u0430\u043a \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0435 \xabgoods_\u043d\u0435\u0432\u044b\u0431\u0440\u0430\u043d\u043e.png\xbb"),c.a.createElement("p",null,"-\u041f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435 \u043f\u043e \u0447\u0435\u043a\u0431\u043e\u043a\u0441\u0430\u043c (\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \xabgoods_\u0432\u044b\u0431\u0440\u0430\u043d\u043e.png\xbb) : \u043c\u0435\u043d\u044f\u0442\u044c \u0441\u0442\u0438\u043b\u044c \u0447\u0435\u043a\u0431\u043e\u043a\u0441\u0430, \u043c\u0435\u043d\u044f\u0442\u044c \u0441\u0442\u0438\u043b\u044c \u043f\u043b\u0430\u0448\u043a\u0438 \u0432\u043d\u0438\u0437\u0443, \u043c\u0435\u043d\u044f\u0442\u044c \u0446\u0438\u0444\u0440\u0443 \u0432 \u043f\u043b\u0430\u0448\u043a\u0435 \u0438 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430 \u201c\u0442\u043e\u0432\u0430\u0440\u201d. \u0415\u0441\u043b\u0438 \u043d\u0438 \u043e\u0434\u0438\u043d \u0447\u0435\u043a\u0431\u043e\u043a\u0441 \u043d\u0435 \u043e\u0442\u043c\u0435\u0447\u0435\u043d \u2013 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u0441\u044f \u043a \u0432\u0438\u0434\u0443 \u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \xabgoods_\u043d\u0435\u0432\u044b\u0431\u0440\u0430\u043d\u043e.png\xbb"),c.a.createElement("p",null,"-\u041f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435 \u043f\u043e \u043a\u043d\u043e\u043f\u043a\u0435 \xab\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443\xbb \u2013 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 /shopping_cart/"),c.a.createElement("p",null,"3.\u041d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 /shopping_cart/:"),c.a.createElement("p",null,"-\u0441\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044c \u0442\u043e, \u0447\u0442\u043e \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0435 \xab\u043f\u0440\u043e\u0442\u043e\u0442\u0438\u043f_\u043a\u043e\u0440\u0437\u0438\u043d\u044b.png\xbb"),c.a.createElement("p",null,"-\u0412 \u0441\u0442\u0440\u043e\u043a\u0435 \u201c\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438\u201d \u0432\u044b\u0432\u043e\u0434\u0438\u043c \u043e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 /goods/ \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0438 \u0438\u0445 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f."))}}]),t}(c.a.Component),F=(a(76),a(78),a(29)),D=a(30),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={checked:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"check",value:function(e){this.props.check(e),this.setState({checked:!this.state.checked})}},{key:"componentDidMount",value:function(){this.props.store&&this.setState({checked:this.props.store[this.props.idField-1].checked})}},{key:"render",value:function(){for(var e=this,t=[],a=Object(E.a)({},this.props),n="",r=0;r<this.props.priceSegment;r++)n+=String.fromCharCode(8381)+" ";for(var i in a.priceSegment=c.a.createElement("div",{className:"segment"},n),this.props.comments?a.comments=[c.a.createElement(F.a,{key:"comments",icon:D.b}),this.props.comments]:a.comments="",this.state.checked?a.checked=c.a.createElement(F.a,{onClick:function(){return e.check(e.props.idField-1)},icon:D.a}):a.checked=c.a.createElement(F.a,{onClick:function(){return e.check(e.props.idField-1)},icon:D.c}),a.store=null,a)t.push(c.a.createElement("div",{key:i,className:i},a[i]));return c.a.createElement("li",{className:"Goods__good"},t)}}]),t}(c.a.Component);var W=Object(d.b)(function(e){return{store:e.data.data}})(H),G=(a(82),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[];for(var t in this.props)e.push(c.a.createElement("div",{key:t,className:t},this.props[t]));return c.a.createElement("li",{className:"Goods__Header"},e)}}]),t}(c.a.Component)),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={checked:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"check",value:function(e){this.props.dispatch(function(e){return{type:"CHECK",payload:e}}(e)),this.setState({checked:!this.state.checked})}},{key:"render",value:function(e){var t,a=this,n=this.props.data.filter(function(e){return e.checked}),r=n.length?"result filled":"result empty";switch(n.length){case 0:t="";break;case 1:t="\u0442\u043e\u0432\u0430\u0440";break;case 2:case 3:t="\u0442\u043e\u0432\u0430\u0440\u0430"}var i=n.length?[c.a.createElement("div",null,"\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438"),c.a.createElement("div",{className:"number"},n.length),c.a.createElement("div",null,t),c.a.createElement("div",{className:"cart"},c.a.createElement(y.b,{to:"/shopping_cart"},"\u041f\u0415\u0420\u0415\u0419\u0422\u0418 \u0412 \u041a\u041e\u0420\u0417\u0418\u041d\u0423"))]:c.a.createElement("div",null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0442\u043c\u0435\u0442\u044c\u0442\u0435 \u0433\u0430\u043b\u043e\u0447\u043a\u0430\u043c\u0438 \u043d\u0435\u0441\u043e\u043a\u043b\u044c\u043a\u043e \u0442\u043e\u0432\u0430\u0440\u043e\u0432"),o=[];return this.props.data.forEach(function(e){o.push(c.a.createElement(W,{key:e.id,idField:e.id,name:e.name,rating:e.rating,trand:e.trand,priceSegment:e.priceSegment,comments:e.comments.length,checked:e.checked,check:function(e){return a.check(e)}}))}),c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432"),c.a.createElement("ul",null,c.a.createElement(G,{idField:"#",name:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",rating:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",trand:"\u0422\u0440\u0435\u043d\u0434",priceSegment:"\u0426\u0435\u043d\u043e\u0432\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442",comments:"\u041e\u0442\u0437\u044b\u0432\u044b",checked:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"}),o)),c.a.createElement("div",{className:r},i))}}]),t}(c.a.Component);var V=Object(N.a)(function(e){return{data:e.data.data}})(I),B=(a(84),["\u041c\u044b \u043a\u043b\u0430\u0441\u0441\u043d\u044b\u0435.","\u041c\u044b \u043a\u043b\u0430\u0441\u0441\u043d\u044b\u0435 \u0438 \u043e\u0447\u0435\u043d\u044c-\u043e\u0447\u0435\u043d\u044c \u043a\u0440\u0443\u0442\u044b\u0435.","\u0414\u0430\u0436\u0435 \u0441\u043b\u043e\u0436\u043d\u043e \u043e\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430\u0448\u0443 \u043a\u0440\u0443\u0442\u043e\u0441\u0442\u044c :)"]),J=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props.data.filter(function(e){return e.checked});switch(t.length){case 0:e=" \u0442\u043e\u0432\u0430\u0440\u0432:";break;case 1:e=" \u0442\u043e\u0432\u0430\u0440:";break;case 2:case 3:e=" \u0442\u043e\u0432\u0430\u0440\u0430:"}var a=[c.a.createElement("div",null,"\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 "),c.a.createElement("div",{className:"number"}," "+t.length+" "),c.a.createElement("div",null,e)],n=[];t.forEach(function(e){n.push(e.name)});var r=B.map(function(e,t){return c.a.createElement("div",{className:"advantage"},c.a.createElement("div",{className:"advantageNum"},t+1),c.a.createElement("div",{className:"advantageText"},e))});return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),c.a.createElement("div",{className:"shopping_result"},a,c.a.createElement("div",null,n.join(", "))),c.a.createElement("h2",null,"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043f\u043e\u043a\u0443\u043f\u043e\u043a \u0443 \u043d\u0430\u0441"),c.a.createElement("div",{className:"advantages"},r),c.a.createElement("div",{className:"separator"}),c.a.createElement("div",{className:"forU"},"\u0418 \u044d\u0442\u043e \u0432\u0441\u0435 - \u0434\u043b\u044f \u0432\u0430\u0441!"))}}]),t}(c.a.Component);var K=Object(N.a)(function(e){return{data:e.data.data}})(J),M=(c.a.Component,function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,{store:O},c.a.createElement(y.d,{history:y.e},c.a.createElement(y.c,{path:"/",component:x},c.a.createElement(y.a,{component:A}),c.a.createElement(y.c,{path:"goods",component:V}),c.a.createElement(y.c,{path:"shopping_cart",component:K}),c.a.createElement(y.c,{path:"*",component:A}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,2,1]]]);
//# sourceMappingURL=main.9ee7b9cb.chunk.js.map