(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","clicked":false,"image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"},{"id":2,"name":"Mr. Krabs","clicked":false,"image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"},{"id":3,"name":"Squidward","clicked":false,"image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"},{"id":4,"name":"Dexter","clicked":false,"image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png"},{"id":5,"name":"Courage","clicked":false,"image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423"},{"id":6,"name":"Doug Funnie","clicked":false,"image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511"},{"id":7,"name":"Bugs Bunny","clicked":false,"image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607"},{"id":8,"name":"Johnny Bravo","clicked":false,"image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist"},{"id":9,"name":"Tommy Pickles","clicked":false,"image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641"},{"id":10,"name":"Rocko","clicked":false,"image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416"},{"id":11,"name":"Captain Planet","clicked":false,"image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836"},{"id":12,"name":"Ickis","clicked":false,"image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png"}]')},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(3),r=a.n(c),s=a(4),o=a(5),l=a(8),m=a(6),g=a(1),d=a(9),u=(a(15),function(e){return n.a.createElement("div",{className:"card hvr-grow"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:"This is image "+e.name,src:e.image,onClick:function(){return e.checkIfClicked(e.id)}})))});a(16);var p=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)},k=(a(17),function(e){return n.a.createElement("div",{className:"main-container"},n.a.createElement("nav",{className:"navbar sticky-top navbar-light bg-light justify-content-end"},n.a.createElement("h5",{className:"text-muted"},"Current Score: ",e.currentScore," | Top Score: ",e.topScore)),n.a.createElement("div",{className:"jumbotron text-muted"},n.a.createElement("h1",null,"Memory Game")))}),f=a(7),h=(a(18),function(e){return n.a.createElement("div",{className:"footer"},n.a.createElement("p",{class:"text-muted text-center"},"Images featuring ",n.a.createElement("i",null,"Disney")," characters are the property of their respective owners."))}),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={images:f,topScore:0,currentScore:0},a.checkIfClicked=a.checkIfClicked.bind(Object(g.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"checkIfClicked",value:function(e){var t=this.state.images.filter((function(t){return t.id===e}))[0],a=this.state.images.slice().sort((function(e,t){return.5-Math.random()}));if(t.clicked){var i=a.map((function(e){return{id:e.id,image:e.image,clicked:!1}}));this.setState({images:i,currentScore:0})}else t.clicked=!0,a[a.findIndex((function(t){return t.id===e}))]=t,this.setState({images:a,currentScore:this.state.currentScore+1,topScore:this.state.currentScore+1>this.state.topScore?this.state.currentScore+1:this.state.topScore})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement(k,{currentScore:this.state.currentScore,topScore:this.state.topScore}),n.a.createElement(p,null,this.state.images.map((function(t){return n.a.createElement(u,{checkIfClicked:e.checkIfClicked,id:t.id,key:t.id,image:t.image})}))),n.a.createElement(h,null))}}]),t}(i.Component);a(19);r.a.render(n.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.a40f25f2.chunk.js.map