(window["webpackJsonpthree-js-sample"]=window["webpackJsonpthree-js-sample"]||[]).push([[0],{20:function(n,e,t){},27:function(n,e,t){n.exports=t(34)},32:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var i=t(1),o=t.n(i),a=t(26),r=t.n(a),s=(t(32),t(20),t(8)),d=t(9),c=t(13),l=t(10),w=t(14),p=t(15),h=t.n(p),u=t(22),v=t(6),g=t(0),m=t(3),f=t(21),b=t(11),E=(t(23),t(24),t(12)),y=t(18),S=t(17),L=t(19);var O=function(n){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(w.a)(e,n),Object(d.a)(e,[{key:"componentDidMount",value:function(){!function(n){var e,t,i=new g.k,o=1,a=0,r=0,s=new g.nb,d=new g.m;(new g.wb).load("./1773008.png"),d.load(["./N00282243.jpg","./N00282243.jpg","./N00282243.jpg","./N00282243.jpg","./N00282243.jpg","./N00282243.jpg"]),s.background=new g.l(0);var c=new g.Fb;c.setSize(window.innerWidth,window.innerHeight),n.appendChild(c.domElement);var l={width:window.innerWidth,height:window.innerHeight},w=new g.ab(75,l.width/l.height,.1,100);w.position.x=0,w.position.y=0,w.position.z=5.5,s.add(w);var p=new E.a;p.load("./japanShrine/scene.gltf",(function(n){n.scene.children.forEach((function(n){n.position.x=0,n.position.y=-2,n.position.z=0,n.scale.set(.05,.05,.05),n.rotation.z=4.7}))}),(function(n){console.log("".concat(n.loaded/n.total*100,"% loaded"))}),(function(n){console.error("An error happened",n)})),p.load("./BlackHoleModel/scene.gltf",(function(n){n.scene.children.forEach((function(n){window.innerWidth<948?(n.scale.set(.02,.02,.02),n.position.x=0):(n.position.x=0,n.scale.set(.02,.02,.02)),n.position.y=-1})),e=new g.d(n.scene),n.animations.forEach((function(n){e.clipAction(n).play()})),s.add(n.scene)}),(function(n){console.log("".concat(n.loaded/n.total*100,"% loaded"))}),(function(n){console.log(n)}));var f=Array(3),O=Object(v.a)(f,3);function N(){return(N=Object(u.a)(h.a.mark((function n(){var e,t,i,o,a,r,d,c;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=new g.sb(.25,20,20),(t=new g.Q).color=new g.l(16777215),i=new g.N(e,t),o=Array(3).fill().map((function(){return g.L.randFloatSpread(100)})),a=Object(v.a)(o,3),r=a[0],d=a[1],c=a[2],r,d,c,i.position.set(r,d,c),s.add(i);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}O[0],O[1],O[2],Array(200).fill().forEach((function(){return N.apply(this,arguments)}));var T=new g.sb(.5,35,35),x=new g.g(1,1,1),M=new g.Y(.5),j=new g.Q;j.roughness=.3,j.metalness=.5,j.color=new g.l(16777215);var z=new g.O;z.transparent=!0,z.opacity=.1;var A=new g.N(T,z);function H(n){n.preventDefault();var e=new g.Bb(n.clientX/window.innerWidth*2-1,-n.clientY/window.innerHeight*2+1,.5);e=e.unproject(w),new g.kb(w.position,e.sub(w.position).normalize()).intersectObject(A,!0).length>0&&m.a.to(w.position,{duration:1,x:A.position.x,y:A.position.y,z:A.position.z,stagger:.5}),window.removeEventListener("touchend",H),window.addEventListener("click",H)}function k(){window.removeEventListener("click",H),window.addEventListener("touchend",H)}window.innerWidth<948?(A.position.y=-1,A.scale.set(2.2,2.2,2.2),s.add(A)):(A.position.y=-1,A.position.x=0,A.scale.set(2.2,2.2,2.2),s.add(A)),window.onload=function(){window.addEventListener("click",H),window.addEventListener("touchstart",k)},new g.N(x,j);var R=new g.N(M,j);window.innerWidth<948?(R.position.x=0,R.position.y=-.5,R.position.z=2,R.scale.set(.25,.25,.25)):(R.position.x=3,R.position.y=-.5,R.position.z=1);var I=new g.cb(16777215,1.5);I.position.x=-2.1,I.position.y=3.4,I.position.z=6.4,s.add(I),new g.b(16777215,.6);var C=new S.a(s,w),W=new L.a(new g.Ab(window.innerWidth,window.innerHeight),1.5,.4,.85);W.threshold=a,W.strength=o,W.radius=r,(t=new y.a(c)).addPass(C),t.addPass(W),window.addEventListener("resize",(function(){l.width=window.innerWidth,l.height=window.innerHeight,w.aspect=l.width/l.height,w.updateProjectionMatrix(),c.setSize(l.width,l.height),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(l.width,l.height)})),window.innerWidth>948&&window.addEventListener("wheel",(function(n){n.deltaY<0?m.a.to(w.position,{duration:1,x:w.position.x-.5,z:w.position.z+.5,stagger:.5}):n.deltaY>0&&m.a.to(w.position,{duration:1,x:w.position.x+.5,z:w.position.z-.5,stagger:.5})}),!0);var P=new b.a(w,n);P.target.set(0,0,0),P.rotateSpeed=.5,P.enableZoom=!1,P.update(),function n(){var o;requestAnimationFrame(n),(o=R).rotation.x+=.005,o.rotation.y+=.005;var a=i.getDelta();e&&e.update(a),c.render(s,w),t.render(),0!=w.position.z||-1!=w.position.y||0!=w.position.x&&5!=w.position.x||(window.location.href="https://SightMan3.github.io/")}()}(this.scene)}},{key:"render",value:function(){var n=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"canvas",ref:function(e){return n.scene=e}}))}}]),e}(i.Component);var N=function(n){function e(){return Object(s.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(w.a)(e,n),Object(d.a)(e,[{key:"componentDidMount",value:function(){!function(n){var e=new g.nb,t=new g.Fb;t.setSize(window.innerWidth,window.innerHeight),n.appendChild(t.domElement);var i,o={width:window.innerWidth,height:window.innerHeight},a=new g.ab(75,o.width/o.height,.1,1e3);a.position.x=676,a.position.y=585,a.position.z=-128,e.add(a);var r,s,d=1.16,c=0,l=1,w=new g.f;(new E.a).load("./SC/scene.gltf",(function(n){(r=n.scene.children).forEach((function(n){n.position.x=676,n.position.y=585,n.position.z=-128,n.scale.set(3,3,3),w.setFromObject(n),s=w.getCenter()})),!0,e.add(n.scene)}),(function(n){console.log("".concat(n.loaded/n.total*100,"% loaded"))}),(function(n){console.log(n)}));var p=new g.sb(20,35,35),v=new g.g(1,1,1),f=(new g.Y(.5),new g.mb(20,20,100)),O=new g.Q;O.roughness=.3,O.metalness=.5,O.color=new g.l(16777215);var N=new g.O;N.transparent=!0,N.opacity=.1;var T=new g.B({color:15951146,linewidth:1,fog:!0}),x=(new g.B({color:0,linewidth:1,fog:!0}),new g.N(v,O),new g.C(f,T)),M=new g.N(p,N);M.position.set(333,101,122),x.position.set(333,101,122),x.rotation.set(-.1,2.1,0),e.add(x),e.add(M);var j=new g.C(f,T),z=new g.N(p,N);z.position.set(42,161,-277),j.position.set(42,161,-277),j.rotation.set(-.1,2.1,0),e.add(j),e.add(z);var A=new g.cb(16777215,1.5);A.position.x=-2.1,A.position.y=3.4,A.position.z=6.4,e.add(A);var H=new S.a(e,a),k=new L.a(new g.Ab(window.innerWidth,window.innerHeight),1.5,.4,.85);function R(n){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(h.a.mark((function n(e){var t,i,o,r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=function(n){return new Promise((function(e){return setTimeout(e,n)}))},e.preventDefault(),t=(t=new g.Bb(e.clientX/window.innerWidth*2-1,-e.clientY/window.innerHeight*2+1,.5)).unproject(a),i=new g.kb(a.position,t.sub(a.position).normalize()),o=i.intersectObject(M,!0),!(i.intersectObject(z,!0).length>0)){n.next=14;break}return m.a.to(a.position,{duration:1,x:M.position.x-150,y:M.position.y+200,z:M.position.z-200,stagger:.5}),n.next=11,r(500);case 11:window.location.href="https://SightMan3.github.io/BlackHole",n.next=19;break;case 14:if(!(o.length>0)){n.next=19;break}return m.a.to(a.position,{duration:1,x:M.position.x+200,y:M.position.y+175,z:M.position.z-100,stagger:.5}),n.next=18,r(500);case 18:window.location.href="https://SightMan3.github.io/SolarSystem";case 19:window.removeEventListener("touchend",R),window.addEventListener("click",R);case 21:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function C(){window.addEventListener("touchend",R),window.removeEventListener("click",R)}k.threshold=c,k.strength=d,k.radius=l,(i=new y.a(t)).addPass(H),i.addPass(k),window.addEventListener("wheel",(function(n){n.deltaY<0?m.a.to(a.position,{duration:1,y:a.position.y+50,z:a.position.z+50,stagger:.5}):n.deltaY>0&&m.a.to(a.position,{duration:1,y:a.position.y-50,z:a.position.z-50,stagger:.5})})),window.addEventListener("load",(function(){console.log(a.position)})),window.onload=function(){window.addEventListener("click",R),window.addEventListener("touchstart",C)},window.onkeydown=function(n){32===n.keyCode&&m.a.to(a.position,{duration:1,x:676,y:585,z:-128,stagger:.5})},window.addEventListener("resize",(function(){o.width=window.innerWidth,o.height=window.innerHeight,a.aspect=o.width/o.height,a.updateProjectionMatrix(),t.setSize(o.width,o.height),t.setPixelRatio(Math.min(window.devicePixelRatio,2))}));var W=new b.a(a,n);W.enableZoom=!1,void 0!=s&&(W.target=s),W.update(),function n(){requestAnimationFrame(n),t.render(e,a),i.render(),x.lookAt(a.position),j.lookAt(a.position),void 0!=r?r.forEach((function(n){m.a.to(n.position,{duration:1,x:-300,y:-250,z:260,stagger:.5}),m.a.to(n.rotation,{duration:1,y:0,stagger:1})})):!1}()}(this.scene)}},{key:"render",value:function(){var n=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"headline_cluster"},"C L U S T E R",o.a.createElement("div",{className:"cluster_small_head"},"M i l k y W a y"),o.a.createElement("div",{className:"cluster_small_head"},"L a n i a k e a"),o.a.createElement("div",{className:"cluster_small_head"},"3 r d \xa0 q u a d r a n t")),o.a.createElement("div",{className:"footer_cluster"},"press & move mous for interaction \xa0 | \xa0 click circles for transport"),o.a.createElement("div",{className:"canvas",ref:function(e){return n.scene=e}}))}}]),e}(i.Component);var T=function(){return o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"section_blackHOle"},o.a.createElement("div",{className:"headline"},"S A G I T A R I U S  A*",o.a.createElement("div",{className:"smallheadline"},"C e n t e r \xa0 o f \xa0 G a l a x y"),o.a.createElement("div",{className:"smallheadline"},"4 m i l i o n \xa0 s o l a r m a s s e s"),o.a.createElement("div",{className:"smallheadline"},"2 5 0 0 0 l y \xa0 a w a y")),o.a.createElement(O,null)))};var x=function(n){function e(n){var t;return Object(s.a)(this,e),(t=Object(c.a)(this,Object(l.a)(e).call(this,n))).State="S O L A R S Y S T E M",t.state={Planet:""},t}return Object(w.a)(e,n),Object(d.a)(e,[{key:"componentDidMount",value:function(){!function(n){var e=document.getElementById("head");e.innerHTML="S O L A R S Y S T E M",new f.a;var t=new g.nb,i=new g.Fb;i.setSize(window.innerWidth,window.innerHeight),n.appendChild(i.domElement);var o={width:window.innerWidth,height:window.innerHeight},a=new g.ab(25,o.width/o.height,.1,1e3);a.position.x=-6,a.position.y=0,a.position.z=18,t.add(a),document.querySelector(".headline_solar"),(new E.a).load("./SolarSystemModel/scene.gltf",(function(n){n.scene.children.forEach((function(n){n.position.x=0,n.position.y=0,n.position.z=0,n.scale.set(20,20,20)})),t.add(n.scene)}),(function(n){console.log("".concat(n.loaded/n.total*100,"% loaded"))}),(function(n){console.error("An error happened",n)}));var r=new g.g(1,1,1),s=(new g.Y(.5),new g.mb(20,20,100),new g.Q);s.roughness=.3,s.metalness=.5,s.color=new g.l(16777215);var d=new g.O;function c(n,e,i,o){var a=new g.sb(o,35,35),r=new g.N(a,d);return r.position.set(n,e,i),t.add(r),r}d.transparent=!0,d.opacity=0,new g.B({color:15951146,linewidth:1,fog:!0}),new g.B({color:0,linewidth:1,fog:!0}),new g.N(r,s);var l={Venus:c(-5.65,-.01,-8.94,.25),Earth:c(-4.93,0,-8.08,.28),Mars:c(-4.26,0,-6.96,.15),Jupiter:c(-1.79,-.01,-3.7,2.2),Saturn:c(1.07,0,1.67,1.8),Uran:c(3.32,0,4.26,1),Npetune:c(4.36,0,6.31,.8),Sun:c(11.7,0,-25.9,20)},w=c(-6.35,.01,-10,.12),p=new g.cb(16777215,1.5);function h(n){n.preventDefault();var t=new g.Bb(n.clientX/window.innerWidth*2-1,-n.clientY/window.innerHeight*2+1,.5);t=t.unproject(a);var i=new g.kb(a.position,t.sub(a.position).normalize()),o=i.intersectObject(w,!0),r=i.intersectObject(l.Venus,!0),s=i.intersectObject(l.Earth,!0),d=i.intersectObject(l.Mars,!0),c=i.intersectObject(l.Jupiter,!0),p=i.intersectObject(l.Saturn,!0),u=i.intersectObject(l.Uran,!0),v=i.intersectObject(l.Npetune,!0),f=i.intersectObject(l.Sun,!0);function b(n,e,t){m.a.to(a.position,{duration:1,x:n,y:e,z:t,stagger:.5}),m.a.to(a.rotation,{duration:1,y:-.5,stagger:.5})}var E=w.position.x,y=w.position.y,S=w.position.z;-6==a.position.x&&18==a.position.z&&(o.length>0?(b(E-2,y,S+5),e.innerHTML="M E R C U R Y",e.innerHTML+="\n                <div>C L O S E S T &nbsp; T O &nbsp; T H E &nbsp; S U N</div>\n                <div>S M A L E S T &nbsp; P L A N E T</div>\n            "):r.length>0?(b(E-1.5,y,S+5),e.innerHTML="V E N U S",e.innerHTML+="\n                <div>T O X I C &nbsp; A T M O S P H E R E</div>\n                <div>1 D A Y &nbsp; I S &nbsp; 2 4 3 &nbsp; E A R T H D A Y S</div>\n                <div>S U R F A C E - 3 9 0 \xb0 C</div>\n            "):s.length>0?(b(E,y,S+5),e.innerHTML="E A R T H",e.innerHTML+="\n                <div>H A B I T A B L E</div>\n                <div>H A S &nbsp; M O O N</div>\n                <div>O U R &nbsp; H O M E</div>\n            "):d.length>0?(b(E+1,y,S+5),e.innerHTML="M A R S",e.innerHTML+="\n                <div>P O S S I B L Y &nbsp; H A B I T A B L E</div>\n                <div>W A T E R &nbsp; S O U R C E S</div>\n            "):c.length>0?(b(E-2,y,S+20),e.innerHTML="J U P I T E R",e.innerHTML+="\n                <div>B I G G E S T &nbsp; P L A N E T</div>\n                <div>G A S &nbsp; G I A N T</div>\n                <div>4 &nbsp; M O O N S</div>\n            "):p.length>0?(b(E+.5,y,S+24),e.innerHTML="S A T U R N",e.innerHTML+="\n                <div>G A S &nbsp; G I A N T</div>\n                <div>82 &nbsp; M O O N S</div>\n                <div>G L O R I O U S &nbsp; R I N G S</div>\n            "):u.length>0?(b(E+6.5,y,S+20),e.innerHTML="U R A N U S",e.innerHTML+="\n                <div>I C E &nbsp; G I A N T</div>\n                <div>1 3 &nbsp; R I N G S</div>\n            "):v.length>0?(b(E+8,y,S+20),e.innerHTML="N E P T U N E",e.innerHTML+="\n                <div>I C E &nbsp; G I A N T</div>\n                <div>F A I N T &nbsp; R I N G S</div>\n                <div>E L I P T I C A L &nbsp; O R B I T</div>\n            "):f.length>0&&(b(E-40,y,S+85),e.innerHTML="S U N",e.innerHTML+="\n                <div>C E N T E R &nbsp; O F &nbsp; S Y S T E M</div>\n                <div>2 7  &nbsp; M I L L I O N &nbsp; C \xb0</div>\n                <div>Y E L L O W &nbsp; D W A R F</div>\n            ")),window.removeEventListener("touchend",h),window.addEventListener("click",h)}function u(){window.removeEventListener("click",h),window.addEventListener("touchend",h)}p.position.x=-2.1,p.position.y=3.4,p.position.z=6.4,t.add(p),window.onload=function(){window.addEventListener("click",h),window.addEventListener("touchstart",u)},window.onkeydown=function(n){32===n.keyCode?(m.a.to(a.position,{duration:1,x:-6,y:0,z:18,stagger:.5}),m.a.to(a.rotation,{duration:1,y:-.32,stagger:.5}),e.innerHTML="S O L A R S Y S T E M"):27===n.keyCode&&(window.location.href="https://SightMan3.github.io/")},window.addEventListener("resize",(function(){o.width=window.innerWidth,o.height=window.innerHeight,a.aspect=o.width/o.height,a.updateProjectionMatrix(),i.setSize(o.width,o.height),i.setPixelRatio(Math.min(window.devicePixelRatio,2))}));var v=new b.a(a,n);v.enableZoom=!1,v.update(),function n(){requestAnimationFrame(n),i.render(t,a)}()}(this.scene),this.state.Planet=localStorage.getItem("planet")}},{key:"render",value:function(){var n=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"headline_cluster headline_solar",id:"head"}),o.a.createElement("div",{className:"footer_cluster"},"press space for position reset \xa0 | \xa0 click planets for more detail"),o.a.createElement("div",{className:"canvas",ref:function(e){return n.scene=e}}))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=t(7),j=t(2),z=document.getElementById("root");r.a.render(o.a.createElement(M.a,null,o.a.createElement(j.c,null,o.a.createElement(j.a,{path:"/",element:o.a.createElement(N,null)}),o.a.createElement(j.a,{path:"/BlackHole",element:o.a.createElement(T,null)}),o.a.createElement(j.a,{path:"/SolarSystem",element:o.a.createElement(x,null)}))),z),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.7563a85b.chunk.js.map