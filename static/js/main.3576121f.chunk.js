(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(t,e,a){t.exports=a(80)},42:function(t,e,a){},49:function(t,e,a){},52:function(t,e,a){},54:function(t,e,a){},56:function(t,e,a){},76:function(t,e,a){},78:function(t,e,a){},80:function(t,e,a){"use strict";a.r(e);var n,r,c=a(0),o=a.n(c),i=a(18),s=a.n(i),u=(a(42),a(2)),l=a.n(u),m=a(5),p=a(4),h=a(6),f=a(9),d=a(8),b=a(10),v=a(15),g=Object(v.inject)("store")(n=Object(v.observer)(n=function(t){function e(){var t,a;Object(p.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).store=a.props.store,a}return Object(b.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(m.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.store.bitcoinStore.watchRate(),this.store.userStore.getUser();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.store.userStore.user,e=this.store.bitcoinStore,a=e.rate,n=e.goingUp;return o.a.createElement("div",{className:"home-page flex-column p-10"},o.a.createElement("span",{className:"capitalize white-text"},"hello ",t.username,"!"),o.a.createElement("span",{className:"capitalize white-text"},o.a.createElement("i",{className:"fab fa-bitcoin"}),"BTC/USD: $",(1/a).toFixed(4),n?o.a.createElement("i",{className:"fas fa-arrow-circle-up green-text"}):o.a.createElement("i",{class:"fas fa-arrow-circle-down red-text"})),o.a.createElement("span",{className:"capitalize white-text"},"coins in wallet: ",t.coins),o.a.createElement("span",{className:"capitalize white-text"},"worth: ",o.a.createElement("i",{className:"fas fa-dollar-sign"}),Math.round(1*t.coins/a)))}}]),e}(c.Component))||n)||n,y=a(22),j=function(t){var e=t.contacts;return o.a.createElement("div",{className:"contact-list flex-column p-10"},e.map(function(t){return o.a.createElement(y.a,{to:"/contact/".concat(t._id),key:t._id},o.a.createElement("div",{className:"contact"},o.a.createElement("img",{className:"circle user-icon mr-10",src:t.pic,alt:t.name}),o.a.createElement("h3",null,t.name)))}))},O=Object(v.inject)("store")(r=Object(v.observer)(r=function(t){function e(){var t,a;Object(p.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).store=a.props.store,a}return Object(b.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(m.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.store.contactStore.getContacts();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.store.contactStore.contacts;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{to:"/contact/edit/new"},o.a.createElement("button",null,o.a.createElement("i",{className:"fas fa-plus"}))),o.a.createElement(j,{contacts:t}))}}]),e}(c.Component))||r)||r;var E={loadFromStorage:function(t){var e=localStorage.getItem(t);return e?JSON.parse(e):null},saveToStorage:function(t,e){localStorage[t]=JSON.stringify(e)}},w={signup:function(t){var e={username:t,coins:100};E.saveToStorage(S,e)},isSignedUp:function(){return!!E.loadFromStorage(S)},getUser:function(){return Promise.resolve(E.loadFromStorage(S))}},S="bitcoinUser";var k=a(84),C=(a(49),function(t){function e(){var t,a;Object(p.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={username:"",isLoggedIn:!1},a.handleSubmit=function(t){t.preventDefault(),w.signup(a.state.username),a.setState({isLoggedIn:!0}),a.props.handleSubmit()},a.handleNameChange=function(){var t=Object(m.a)(l.a.mark(function t(e){var n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.target.value,a.setState({username:n});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),a}return Object(b.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return!0===this.state.isLoggedIn?o.a.createElement(k.a,{to:"/"}):o.a.createElement("div",{className:"signupPage"},"Hey please sign up",o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",value:this.state.username,onChange:this.handleNameChange}),o.a.createElement("button",{type:"submit"},"enter")))}}]),e}(c.Component)),x=a(23),N={getRandomInt:U,makeId:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<t;n++)e+=a.charAt(Math.floor(Math.random()*a.length));return e},makeLorem:function(t){var e="";for(;e.length<t;){var a=U(3,6),n=M(a);Math.random()>.9&&(n+=","),e+=n+" "}return e=(e=e.substring(0,t))[0].toUpperCase()+e.substr(1)},getCurrency:function(t){switch(t){case"ILS":return"\u20aa";case"EUR":return"\u20ac";case"USD":return"$";default:return""}}};function U(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t}function M(t){for(var e="";e.length<t;){e+=z()}return e}function z(){var t="abcdefghijklmnopqrstuvwxyz",e=parseInt(Math.random()*t.length);return t.charAt(e)}var D={getContacts:function(){var t=E.loadFromStorage(I);t?P=t:t=P;return Promise.resolve(t)},getContactById:function(t){return Promise.resolve(P.find(function(e){return t===e._id}))},saveContact:function(t){var e="https://randomuser.me/api/portraits/thumb/men/"+Math.round(90*Math.random())+".jpg";if((t={name:t.name,email:t.email,phone:t.phone,pic:e,_id:t._id})._id){var a=P.findIndex(function(e){return e._id===t._id});P.splice(a,1,t)}else{var n=N.makeId(6);t._id=n,P.push(t)}E.saveToStorage(I,P)}},I="contacts";var P=[{_id:"123123",name:"Yossi Buzaglo",pic:"https://randomuser.me/api/portraits/thumb/men/22.jpg",email:"yoss@gmail.com",phone:"054-2345678"},{_id:"32321321",name:"Valeria Rodriguez",pic:"https://randomuser.me/api/portraits/thumb/women/22.jpg",email:"valerodriguez@gmail.com",phone:"054-23487658"},{_id:"457457",name:"Avner Eshta'ol",pic:"https://randomuser.me/api/portraits/thumb/men/23.jpg",email:"avneresh@gmail.com",phone:"054-2365478"},{_id:"85786",name:"Bugo Laritzki",pic:"https://randomuser.me/api/portraits/thumb/men/25.jpg",email:"bugolar@gmail.com",phone:"054-4325678"}],R=(a(52),function(t){function e(){var t,a;Object(p.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={contact:{name:"",email:"",phone:"",_id:""}},a.handleSubmit=function(t){t.preventDefault(),D.saveContact(a.state.contact)},a.handleNameChange=function(t){a.setState({contact:Object(x.a)({},a.state.contact,{name:t.target.value})})},a.handleEmailChange=function(t){a.setState({contact:Object(x.a)({},a.state.contact,{email:t.target.value})})},a.handlePhoneChange=function(t){a.setState({contact:Object(x.a)({},a.state.contact,{phone:t.target.value})})},a}return Object(b.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(m.a)(l.a.mark(function t(){var e,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("new"===(e=this.props.match.params.id)){t.next=6;break}return t.next=4,D.getContactById(e);case 4:a=t.sent,this.setState({contact:a});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("form",{className:"contactEditPage flex-column",onSubmit:this.handleSubmit},o.a.createElement(y.a,{to:"/contacts"},o.a.createElement("button",{type:"button"},o.a.createElement("i",{className:"fas fa-arrow-left"}))),o.a.createElement("input",{onChange:this.handleNameChange,value:this.state.contact.name,type:"text",placeholder:"name"}),o.a.createElement("input",{onChange:this.handleEmailChange,value:this.state.contact.email,type:"email",placeholder:"email"}),o.a.createElement("input",{onChange:this.handlePhoneChange,value:this.state.contact.phone,type:"text",placeholder:"phone"}),o.a.createElement("button",{className:"capitalize align-self-center"},"create"))}}]),e}(c.Component)),_=(a(54),function(t){function e(){return Object(p.a)(this,e),Object(f.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){var t=this.props.amount;return o.a.createElement("div",null,"Transfer moneys to ",this.props.contact,o.a.createElement("form",{onSubmit:this.props.onSubmit},"Amount:",o.a.createElement("input",{value:t,onChange:this.props.onChange,type:"number",min:0,max:100}),o.a.createElement("button",{type:"submit"},"transfer")))}}]),e}(c.Component)),A=function(t){function e(){var t,a;Object(p.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={contact:{},amount:0,movesList:[]},a}return Object(b.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(m.a)(l.a.mark(function t(){var e,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.id,t.next=3,D.getContactById(e);case 3:a=t.sent,this.setState({contact:a});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"handleSubmit",value:function(t){t.preventDefault();var e=this.state,a=e.contact,n=e.amount,r={name:a.name,amount:n},c=this.state.movesList;c.push(r),this.setState({movesList:c}),console.log(c)}},{key:"handleChange",value:function(t){this.setState({amount:t.target.value})}},{key:"render",value:function(){var t=this.state,e=t.contact,a=t.amount,n=t.movesList;return o.a.createElement("div",{className:"contact-details p-10"},o.a.createElement(y.a,{to:"/contacts"},o.a.createElement("button",{type:"button"},o.a.createElement("i",{className:"fas fa-arrow-left"}))),o.a.createElement("img",{className:"circle user-icon mr-10",src:e.pic,alt:e.name}),o.a.createElement("h3",null,e.name),o.a.createElement("h3",null,"tel: ",e.phone),o.a.createElement("h3",null,"email: ",e.email),o.a.createElement(_,{amount:a,contact:e.name,onChange:this.handleChange.bind(this),onSubmit:this.handleSubmit.bind(this)}),o.a.createElement(y.a,{to:"/contact/edit/".concat(e._id)},"Edit contact"),"Your moves:",n.map(function(t){return o.a.createElement("li",{key:t.amount*Math.random()},"Transferred ",t.amount," to ",t.name)}))}}]),e}(c.Component),L=a(26),B=(a(56),function(t){var e=t.title,a=t.data,n=t.description,r=t.color;return o.a.createElement("div",{className:"chart"},o.a.createElement("div",{className:"chart-name"},e),o.a.createElement(L.Sparklines,{data:a},o.a.createElement(L.SparklinesLine,{color:r})),o.a.createElement("div",{className:"chart-desc"},n))}),T=a(35),F=a.n(T),J={getBitcoinRate:W,getMarketPrice:function(){return Y.apply(this,arguments)},getConfirmedTransactions:function(){return $.apply(this,arguments)},watchBitcoinRate:function(t){var e=function(){var e=Object(m.a)(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(1);case 2:if((a=e.sent)!==q){e.next=5;break}return e.abrupt("return");case 5:a=a.toFixed(8),t(+a,+q),q=a;case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();e();var a=setInterval(e,1e3);return function(){return clearInterval(a)}}};function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return H("https://blockchain.info/tobtc?currency=USD&value=".concat(t))}function Y(){return(Y=Object(m.a)(l.a.mark(function t(){var e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 2:return e=t.sent,t.abrupt("return",{title:e.name,data:e.values.map(function(t){return t.y}),description:e.description});case 4:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function $(){return($=Object(m.a)(l.a.mark(function t(){var e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H("https://api.blockchain.info/charts/n-transactions?format=json&cors=true");case 2:return e=t.sent,t.abrupt("return",{title:e.name,data:e.values.map(function(t){return t.y}),description:e.description});case 4:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var q=null;function H(t){return F.a.get(t).then(function(t){return t.data})}a(76);var V=function(t){function e(){var t,a;Object(p.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={chartsData:[],loading:!0},a}return Object(b.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(m.a)(l.a.mark(function t(){var e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),t.next=3,Promise.all([J.getMarketPrice(),J.getConfirmedTransactions()]);case 3:e=t.sent,this.setState({chartsData:e,loading:!1});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"renderChart",value:function(t,e){var a=t.title,n=t.data,r=t.description;return o.a.createElement(B,{title:a,data:n,description:r,color:e})}},{key:"render",value:function(){var t=this;if(this.state.loading)return o.a.createElement("div",null,"Loading...");var e=["blue","green"];return o.a.createElement("div",{className:"statistic-page"},o.a.createElement("ul",null,this.state.chartsData.map(function(a,n){return o.a.createElement("li",{className:"statistic-chart",key:n},t.renderChart(a,e[n]))})))}}]),e}(c.Component),G=a(83),K=a(82),Q=a(85),X=a(81),Z=(a(78),function(t){function e(){var t,a;Object(p.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={isSignedUp:!0},a}return Object(b.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(m.a)(l.a.mark(function t(){var e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=w.isSignedUp(),this.setState({isSignedUp:e});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){this.setState({isSignedUp:!0})}},{key:"render",value:function(){var t=this;return o.a.createElement(G.a,null,o.a.createElement("div",{className:"App"},this.state.isSignedUp&&o.a.createElement("header",{className:"App-header flex space-between align-center"},o.a.createElement(K.a,{exact:!0,to:"/"},o.a.createElement("h3",{className:"capitalize pointer"},"mister bitcoin")),o.a.createElement(K.a,{to:"/statistics"},o.a.createElement("i",{className:"fas fa-chart-line"})),o.a.createElement(K.a,{to:"/contacts"},o.a.createElement("i",{className:"fas fa-list-ul"}))),!this.state.isSignedUp&&o.a.createElement(k.a,{to:"/signup"}),o.a.createElement(Q.a,null,o.a.createElement(X.a,{path:"/",exact:!0,component:g}),o.a.createElement(X.a,{path:"/contacts",component:O}),o.a.createElement(X.a,{path:"/statistics",component:V}),o.a.createElement(X.a,{path:"/signup",render:function(e){return o.a.createElement(C,Object.assign({},e,{handleSubmit:t.handleSubmit.bind(t)}))}}),o.a.createElement(X.a,{render:function(t){return o.a.createElement(R,t)},path:"/contact/edit/:id"}),o.a.createElement(X.a,{render:function(t){return o.a.createElement(A,t)},path:"/contact/:id"}))))}}]),e}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var tt,et,at,nt,rt,ct,ot,it,st=a(16),ut=a(14),lt=(a(25),a(3)),mt=(tt=function(){function t(e){var a=this;Object(p.a)(this,t),Object(st.a)(this,"rate",et,this),Object(st.a)(this,"goingUp",at,this),Object(st.a)(this,"pastRate",nt,this),this.getRate=function(t,e){a.rate=t,a.goingUp=t>e},this.rootStore=e}return Object(h.a)(t,[{key:"watchRate",value:function(){var t=Object(m.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J.watchBitcoinRate(this.getRate);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),t}(),et=Object(ut.a)(tt.prototype,"rate",[lt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),at=Object(ut.a)(tt.prototype,"goingUp",[lt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),nt=Object(ut.a)(tt.prototype,"pastRate",[lt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Object(ut.a)(tt.prototype,"watchRate",[lt.action],Object.getOwnPropertyDescriptor(tt.prototype,"watchRate"),tt.prototype),tt),pt=(rt=function(){function t(e){Object(p.a)(this,t),Object(st.a)(this,"contacts",ct,this),this.rootStore=e}return Object(h.a)(t,[{key:"contactsCount",get:function(){return this.contacts.length}}]),Object(h.a)(t,[{key:"getContacts",value:function(){var t=Object(m.a)(l.a.mark(function t(e){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.getContacts(e);case 2:this.contacts=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}(),ct=Object(ut.a)(rt.prototype,"contacts",[lt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(ut.a)(rt.prototype,"contactsCount",[lt.computed],Object.getOwnPropertyDescriptor(rt.prototype,"contactsCount"),rt.prototype),Object(ut.a)(rt.prototype,"getContacts",[lt.action],Object.getOwnPropertyDescriptor(rt.prototype,"getContacts"),rt.prototype),rt),ht=(ot=function(){function t(e){Object(p.a)(this,t),Object(st.a)(this,"user",it,this),this.rootStore=e}return Object(h.a)(t,[{key:"getUser",value:function(){var t=Object(m.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getUser();case 2:this.user=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),t}(),it=Object(ut.a)(ot.prototype,"user",[lt.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Object(ut.a)(ot.prototype,"getUser",[lt.action],Object.getOwnPropertyDescriptor(ot.prototype,"getUser"),ot.prototype),ot),ft=a(36),dt=new function t(){Object(p.a)(this,t),this.showNavBar=!0,this.bitcoinStore=new mt(this),this.contactStore=new pt(this),this.userStore=new ht(this)};Object(ft.configureDevtool)({logEnabled:!0}),s.a.render(o.a.createElement(v.Provider,{store:dt},o.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[37,2,1]]]);
//# sourceMappingURL=main.3576121f.chunk.js.map