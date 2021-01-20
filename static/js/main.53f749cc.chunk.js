(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),s=n(11),d=n.n(s);n(17),n(18);function l(){return Object(a.jsxs)("header",{children:[Object(a.jsxs)("h1",{children:[" ",Object(a.jsx)("i",{className:"far fa-file"})," "]}),Object(a.jsx)("h1",{children:"CV GENERATOR"})]})}var h=n(8),r=n(7),o=n(3),j=n(4),u=n(2),p=n(6),b=n(5),O=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={inputHidden:!1,outputHidden:!0,addBtn:!0,general:{}},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"handleChange",value:function(e){this.setState((function(t){return{general:Object(r.a)(Object(r.a)({},t.general),{},Object(h.a)({},e.target.name,e.target.value))}}))}},{key:"handleClick",value:function(e){e.preventDefault(),console.log("clicked"),this.toggleHidden()}},{key:"toggleHidden",value:function(){this.setState((function(e){return{inputHidden:!e.inputHidden,outputHidden:!e.outputHidden}}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"General Information:"}),this.state.inputHidden&&Object(a.jsxs)("div",{className:"general-info-printed",children:[Object(a.jsxs)("p",{children:["Name: ",this.state.general.name]}),Object(a.jsxs)("p",{children:["Email: ",this.state.general.email]}),Object(a.jsxs)("p",{children:["Phone: ",this.state.general.phone]})]}),this.state.outputHidden&&Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{name:"name",value:this.state.general.name,type:"text",placeholder:"Name",onChange:this.handleChange}),Object(a.jsx)("input",{name:"email",value:this.state.general.email,type:"text",placeholder:"Email",onChange:this.handleChange}),Object(a.jsx)("input",{name:"phone",value:this.state.general.phone,type:"text",placeholder:"Phone Number",onChange:this.handleChange})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:this.handleClick,children:this.state.outputHidden?"Add":"Edit"})})]})}}]),n}(i.Component),x=n(10),f=(n(19),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{name:"school",type:"text",placeholder:"School Name",onChange:this.props.handleChange}),Object(a.jsx)("input",{name:"field",type:"text",placeholder:"Field of Study",onChange:this.props.handleChange}),Object(a.jsx)("input",{name:"date",type:"text",placeholder:"Date of Study",onChange:this.props.handleChange}),Object(a.jsx)("button",{onClick:this.props.handleClick,children:"Add"})]})}}]),n}(i.Component)),C=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={inputHidden:!0,schoolList:[],education:{school:"",field:"",date:""}},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"handleClick",value:function(e){this.state.inputHidden||this.updateSchools(),e.preventDefault(),this.setState((function(e){return{inputHidden:!e.inputHidden}}))}},{key:"handleChange",value:function(e){this.setState((function(t){return{education:Object(r.a)(Object(r.a)({},t.education),{},Object(h.a)({},e.target.name,e.target.value))}}))}},{key:"updateSchools",value:function(){var e=this;this.setState((function(t){return{schoolList:[].concat(Object(x.a)(t.schoolList),[{school:e.state.education.school,field:e.state.education.field,date:e.state.education.date}])}}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Educational Experience:"}),Object(a.jsx)("div",{children:this.state.schoolList.map((function(e){return Object(a.jsxs)("div",{className:"school-printed",children:[Object(a.jsxs)("p",{children:["School: ",e.school]}),Object(a.jsxs)("p",{children:["Field of Study: ",e.field," "]}),Object(a.jsxs)("p",{children:["Graduated: ",e.date]})]})}))}),!this.state.inputHidden&&Object(a.jsx)(f,{handleChange:this.handleChange,handleClick:this.handleClick}),this.state.inputHidden&&Object(a.jsxs)("div",{className:"add-education",onClick:this.handleClick,children:[Object(a.jsx)("i",{className:"fas fa-plus"}),Object(a.jsx)("p",{children:"Add Educational Experience"})]})]})}}]),n}(i.Component),m=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{name:"company",type:"text",placeholder:"Company Name",onChange:this.props.handleChange}),Object(a.jsx)("input",{name:"position",type:"text",placeholder:"Position Title",onChange:this.props.handleChange}),Object(a.jsx)("input",{name:"start",type:"text",placeholder:"Start Date",onChange:this.props.handleChange}),Object(a.jsx)("input",{name:"end",type:"text",placeholder:"End Date",onChange:this.props.handleChange}),Object(a.jsx)("input",{name:"duties",type:"text",placeholder:"Duties",onChange:this.props.handleChange}),Object(a.jsx)("button",{onClick:this.props.handleClick,children:"Add"})]})})}}]),n}(i.Component),g=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={inputHidden:!0,jobList:[],practical:{company:"",position:"",start:"",end:"",duties:""}},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"handleClick",value:function(e){e.preventDefault(),this.state.inputHidden||this.updateJobs(),this.setState((function(e){return{inputHidden:!e.inputHidden}}))}},{key:"handleChange",value:function(e){this.setState((function(t){return{practical:Object(r.a)(Object(r.a)({},t.practical),{},Object(h.a)({},e.target.name,e.target.value))}}))}},{key:"updateJobs",value:function(){var e=this;this.setState((function(t){return{jobList:[].concat(Object(x.a)(t.jobList),[{company:e.state.practical.company,position:e.state.practical.position,start:e.state.practical.start,end:e.state.practical.end,duties:e.state.practical.duties}])}}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Practical Experience:"}),Object(a.jsx)("div",{children:this.state.jobList.map((function(e){return Object(a.jsxs)("div",{className:"school-printed",children:[Object(a.jsxs)("p",{children:["Company: ",e.company]}),Object(a.jsxs)("p",{children:["Position: ",e.position," "]}),Object(a.jsxs)("p",{children:["From ",e.start," To ",e.end]}),Object(a.jsxs)("p",{children:["Duties:",e.duties]})]})}))}),!this.state.inputHidden&&Object(a.jsx)(m,{handleChange:this.handleChange,handleClick:this.handleClick}),this.state.inputHidden&&Object(a.jsxs)("div",{onClick:this.handleClick,className:"add-practical",children:[Object(a.jsx)("i",{className:"fas fa-plus"}),Object(a.jsx)("p",{children:"Add Practical Experience"})]})]})}}]),n}(i.Component);function v(){return Object(a.jsxs)("main",{children:[Object(a.jsx)(O,{}),Object(a.jsx)(C,{}),Object(a.jsx)(g,{})]})}function k(){return Object(a.jsx)("footer",{children:Object(a.jsxs)("p",{children:["Created by ",Object(a.jsx)("a",{href:"http://www.jimmontour.com",children:"Jim Montour"}),"  for ",Object(a.jsx)("a",{href:"http://www.theodinproject.com",children:"The Odin Project"}),".  Take a look at the ",Object(a.jsx)("a",{href:"https://github.com/jimmontour/cv-application",children:"GitHub Repo"}),"."]})})}var y=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l,{}),Object(a.jsx)(v,{}),Object(a.jsx)(k,{})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};d.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),H()}},[[22,1,2]]]);
//# sourceMappingURL=main.53f749cc.chunk.js.map