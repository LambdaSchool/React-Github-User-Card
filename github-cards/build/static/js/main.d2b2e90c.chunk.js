(this["webpackJsonpgithub-cards"]=this["webpackJsonpgithub-cards"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(16),l=a.n(s),o=(a(23),a(2)),c=a(3),u=a(5),i=a(4),h=a(6),m=a.n(h),p=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return console.log(this.props.userData),n.a.createElement("div",{class:"card usercard"},n.a.createElement("img",{src:this.props.userData.avatar_url,alt:""}),n.a.createElement("div",{className:"card-info"},n.a.createElement("h3",null,this.props.userData.login),n.a.createElement("p",null,"Location: ",this.props.userData.location),n.a.createElement("p",null,"Profile:",n.a.createElement("a",{href:this.props.userData.html_url}," ",this.props.userData.html_url)),n.a.createElement("p",null,"follower count: ",this.props.userData.followers),this.props.followers.map((function(e){return n.a.createElement("a",{href:e.html_url},e.login,", ")})),n.a.createElement("p",null,"following: ",this.props.userData.following),n.a.createElement("p",null,"bio: ",this.props.userData.bio),n.a.createElement("p",null,"User Since: ",this.props.userData.created_at)))}}]),a}(n.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{class:"card followercard"},n.a.createElement("img",{src:this.props.userData.avatar_url,alt:""}),n.a.createElement("div",{className:"card-info"},n.a.createElement("h3",null,this.props.userData.login),n.a.createElement("p",null,"Profile:",n.a.createElement("a",{href:this.props.userData.html_url}," ",this.props.userData.html_url)),n.a.createElement("p",null,"Type: ",this.props.userData.type)))}}]),a}(n.a.Component),d=a(17),E=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).handleChange=function(e){r.setState(Object(d.a)({},e.target.name,e.target.value))},r.handleSubmit=function(e){e.preventDefault(),r.props.searchUser(e,r.state.text),r.setState({text:""})},r.state={text:""},r}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Welcome to Today "),n.a.createElement("form",{onSubmit:this.handleSubmit,action:""},n.a.createElement("input",{name:"text",type:"text",onChange:this.handleChange,placeholder:"UserName",value:this.state.text}),n.a.createElement("button",{onClick:this.handleSubmit},"Find User"),n.a.createElement("br",null),n.a.createElement("br",null)))}}]),a}(n.a.Component),b=(a(41),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).searchUser=function(t,a){t.preventDefault(),e.setState({userName:[a]})},e.state={userData:[],followers:[],userName:"GeraldRyan"},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://api.github.com/users/".concat(this.state.userName)).then((function(t){e.setState({userData:t.data})})).catch("You caught me"),m.a.get("https:api.github.com/users/".concat(this.state.userName,"/followers")).then((function(t){e.setState({followers:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.userName!==this.state.userName&&(m.a.get("https://api.github.com/users/".concat(this.state.userName)).then((function(e){a.setState({userData:e.data})})).catch("You caught me"),m.a.get("https:api.github.com/users/".concat(this.state.userName,"/followers")).then((function(e){a.setState({followers:e.data})})))}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Github User Info"),n.a.createElement(E,{searchUser:this.searchUser}),n.a.createElement("h2",null,"User"),n.a.createElement("div",{className:"cards"},n.a.createElement(p,{userData:this.state.userData,followers:this.state.followers})),n.a.createElement("h2",null,"Followers:"),n.a.createElement("div",{className:"cards"},this.state.followers.map((function(e,t){return n.a.createElement(f,{key:t,userData:e,followers:[]})})))))}}]),a}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.d2b2e90c.chunk.js.map