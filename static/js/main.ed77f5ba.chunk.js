(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(4),j=c.n(s),i=(c(9),c(2)),a=(c(10),c(0));var l=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),j=Object(i.a)(s,2),l=j[0],o=j[1],u=Object(n.useState)([]),b=Object(i.a)(u,2),O=b[0],d=b[1],h=Object(n.useState)(""),A=Object(i.a)(h,2),x=A[0],f=A[1];Object(n.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]);var p=function(e){var t=l.filter((function(t){return t.name.toLowerCase()===e.target.innerText.toLowerCase()}));r(t[0]),d([]),f(t[0].name)};return Object(a.jsxs)("section",{children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("input",{type:"text",placeholder:"Search For A Country",value:x,onChange:function(e){if(f(e.target.value),""!==e.target.value){var t=l.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));d(t)}else d([])}}),Object(a.jsx)("img",{className:"close-btn",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABmklEQVRoge2aTU7DMBCFP7gDUVuOlB6BC8C6lAPAtcoFYEUX3IOwgFVYZCIguJFn/BML+UlWKnWcvq9J7RdNoaqqyqotcADegX7h0YmXVgvxUID5U+PeF2IrEz6AHbDWfgsJtAZuGTz1eF6ZRynepfNl1p7B28GnuJPiVUpHRq0YvL35FI/3Yqly+jtfwEgSVZDSVEFKUwyQa6AJmN/IOaJLs/zeSO0RG0wjc3s5l4+8/WlALoAXqX9FF2emc3034CQgLkM+MFYIlT/Lzq6BCYFQ+bNGFB+YUAiVv5CsNQcTA0LlLzQ0umBiQaj8xUi/P5fV4+R1yJ4DmUHg91WIcSVGFRHjz3J+WL21RK4fdkgCMPuLufyuZt6zwmTfEF0/7BgwWSPK3OoUCpMtNPossSEwWWK8Zp+wwiQB+TcPVpD/UTd7REmlIiJKMlWQ0lRBSpMLpJNjCS23qS7l+KfR4wJ5kuNVMjt2jZ6efYpbvpuhe2CTyJRGG+AO+ETRDIWhBXyqPbz08G5Pj2oZuqdjc3TJYf7DQFVV1aAvuftbeCQwpVAAAAAASUVORK5CYII=",onClick:function(){return f("")},alt:"Clear Input"})]}),O.map((function(e){return Object(a.jsx)("button",{onClick:p,children:e.name},e.name)})),c?Object(a.jsxs)("div",{className:"result",children:[Object(a.jsx)("img",{src:c.flag,alt:c.name}),Object(a.jsx)("table",{children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("td",{children:c.name})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Capital"}),Object(a.jsx)("td",{children:c.capital})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Area"}),Object(a.jsxs)("td",{children:[c.area/1e6," million km",Object(a.jsx)("sup",{children:"2"})]})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Population"}),Object(a.jsx)("td",{children:c.population/1e9})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Continent"}),Object(a.jsx)("td",{children:c.region})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Sub-Continent"}),Object(a.jsx)("td",{children:c.subregion})]})]})})]}):null]})};var o=function(){return Object(a.jsx)(l,{})};j.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(o,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.ed77f5ba.chunk.js.map