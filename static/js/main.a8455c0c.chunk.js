(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),j=n.n(s),i=(n(9),n(2)),l=(n(10),n(0));var a=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),j=Object(i.a)(s,2),a=j[0],u=j[1],o=Object(c.useState)([]),b=Object(i.a)(o,2),O=b[0],d=b[1],h=Object(c.useState)(""),A=Object(i.a)(h,2),x=A[0],f=A[1],g=Object(c.useState)(""),p=Object(i.a)(g,2),m=p[0],C=p[1];Object(c.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){u(e)}))}),[]);var v=function(e){var t=a.filter((function(t){return t.name.toLowerCase()===e.target.innerText.toLowerCase()}));r(t[0]),d([]),f(t[0].name)};return Object(l.jsxs)("section",{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("input",{type:"text",placeholder:"Search For A Country",value:x,onChange:function(e){if(f(e.target.value),""!==e.target.value){var t=a.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));if(0===t.length)return C("No Country Found"),void d([]);C(""),d(t)}else d([])}}),Object(l.jsx)("img",{className:"close-btn",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABmklEQVRoge2aTU7DMBCFP7gDUVuOlB6BC8C6lAPAtcoFYEUX3IOwgFVYZCIguJFn/BML+UlWKnWcvq9J7RdNoaqqyqotcADegX7h0YmXVgvxUID5U+PeF2IrEz6AHbDWfgsJtAZuGTz1eF6ZRynepfNl1p7B28GnuJPiVUpHRq0YvL35FI/3Yqly+jtfwEgSVZDSVEFKUwyQa6AJmN/IOaJLs/zeSO0RG0wjc3s5l4+8/WlALoAXqX9FF2emc3034CQgLkM+MFYIlT/Lzq6BCYFQ+bNGFB+YUAiVv5CsNQcTA0LlLzQ0umBiQaj8xUi/P5fV4+R1yJ4DmUHg91WIcSVGFRHjz3J+WL21RK4fdkgCMPuLufyuZt6zwmTfEF0/7BgwWSPK3OoUCpMtNPossSEwWWK8Zp+wwiQB+TcPVpD/UTd7REmlIiJKMlWQ0lRBSpMLpJNjCS23qS7l+KfR4wJ5kuNVMjt2jZ6efYpbvpuhe2CTyJRGG+AO+ETRDIWhBXyqPbz08G5Pj2oZuqdjc3TJYf7DQFVV1aAvuftbeCQwpVAAAAAASUVORK5CYII=",onClick:function(){return f("")},alt:"Clear Input"})]}),""!==m?Object(l.jsx)("button",{children:m}):null,O.map((function(e){return Object(l.jsx)("button",{onClick:v,children:e.name},e.name)})),n?Object(l.jsxs)("div",{className:"result",children:[Object(l.jsx)("img",{src:n.flag,alt:n.name}),Object(l.jsx)("table",{children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("td",{children:n.name})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Capital"}),Object(l.jsx)("td",{children:n.capital})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Area"}),Object(l.jsxs)("td",{children:[n.area/1e6," million km",Object(l.jsx)("sup",{children:"2"})]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Population"}),Object(l.jsx)("td",{children:n.population/1e9})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Continent"}),Object(l.jsx)("td",{children:n.region})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Sub-Continent"}),Object(l.jsx)("td",{children:n.subregion})]})]})})]}):null]})};var u=function(){return Object(l.jsx)(a,{})};j.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.a8455c0c.chunk.js.map