webpackJsonp([1],{"+BTi":function(t,o){},"+Rdb":function(t,o){},"/bpg":function(t,o){},"4Bvc":function(t,o){},"8z31":function(t,o){},GXEp:function(t,o){},H3rH:function(t,o){},I4nB:function(t,o){},Iun5:function(t,o){},"M/b1":function(t,o){},NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});e("akml"),e("+BTi");var n=e("wZaX"),a=e.n(n),d=(e("X+ky"),e("HJMx")),i=e.n(d),l=(e("I4nB"),e("STLj")),s=e.n(l),r=(e("cDSy"),e("e0Bm")),c=e.n(r),u=(e("+Rdb"),e("Mezo")),f=e.n(u),T=(e("qunJ"),e("vqwl")),p=e.n(T),v=(e("Yq4J"),e("qubY")),h=e.n(v),g=(e("8z31"),e("SXzR")),m=e.n(g),b=(e("dmRH"),e("EKTV")),k=e.n(b),_=(e("/bpg"),e("ACGT")),C=e.n(_),y=(e("bwiK"),e("SExR")),D=e.n(y),x=(e("GXEp"),e("mtrD")),w=e.n(x),L=(e("Iun5"),e("ttjG")),B=e.n(L),S=(e("jZDA"),e("91Nw")),H=e.n(S),A=(e("d7TW"),e("ajQY")),$=e.n(A),F=(e("NOFV"),e("mWcH")),E=e.n(F),I=(e("ZzA9"),e("cgIP")),j=e.n(I),R=(e("H3rH"),e("6mNG")),z=e.n(R),N=e("7+uW"),O=(e("cwe7"),e("2X9z")),V=e.n(O),q=(e("oq7i"),e("+TD8")),W=e.n(q),J=e("Dd8w"),M=e.n(J),X=e("NYxO"),U={render:function(){var t=this.$createElement,o=this._self._c||t;return o("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":this.activeIndex,mode:"horizontal"},on:{select:this.handleSelect}},[o("el-menu-item",{attrs:{index:"1"}},[this._v("Todo List")])],1)},staticRenderFns:[]};var G=e("VU/8")({name:"Header",data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t,o){}}},U,!1,function(t){e("M/b1")},"data-v-14b6892f",null).exports,Y={name:"TodoItem",props:{todo:Object,index:Number,todoType:String},data:function(){return{visible:!1,isShow:!1,bgColor:"rgba(0,0,0,0)"}},methods:{deleteTodo:function(){this.visible=!1,this.$store.dispatch("deleteTodo",this.todoType,this.index)},handleEnter:function(t){t?(this.isShow=!0,this.bgColor=this.$store.state.allTodo[this.todoType].hoverBackground):(this.isShow=!1,this.bgColor="rgba(0,0,0,0)")}}},Z={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"item",style:{background:t.bgColor},on:{mouseenter:function(o){return t.handleEnter(!0)},mouseleave:function(o){return t.handleEnter(!1)}}},[e("el-checkbox",{staticStyle:{display:"block",padding:"12px 20px"},model:{value:t.todo.finish,callback:function(o){t.$set(t.todo,"finish",o)},expression:"todo.finish"}},[t.todo.finish?e("del",[t._v(t._s(t.todo.content))]):t._e(),t._v(" "),t.todo.finish?t._e():e("span",[t._v(t._s(t.todo.content))])]),t._v(" "),e("div",{staticClass:"deleteContainer"},[e("el-popover",{attrs:{placement:"top",width:"160"},model:{value:t.visible,callback:function(o){t.visible=o},expression:"visible"}},[e("p",[t._v("确定删除任务【"),e("b",[t._v(t._s(t.todo.content))]),t._v("】吗？")]),t._v(" "),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(o){t.visible=!1}}},[t._v("取消")]),t._v(" "),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.deleteTodo}},[t._v("确定")])],1),t._v(" "),e("el-button",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{slot:"reference",type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},slot:"reference"})],1)],1),t._v(" "),e("div",{staticClass:"clear"})],1)},staticRenderFns:[]};var K=e("VU/8")(Y,Z,!1,function(t){e("kDvS")},"data-v-a4788880",null).exports,P=e("mvHQ"),Q=e.n(P),tt=function(t){return JSON.parse(localStorage.getItem(t)||"[]")},ot=function(t,o){localStorage.setItem(t,Q()(o))},et=e("u4Bf"),nt={name:"TodoCard",components:{TodoItem:K,Draggable:e.n(et).a},data:function(){return{task:this.$store.state.allTodo[this.todoType]}},props:{todoType:String},computed:M()({},Object(X.c)(["allTodo"])),watch:{task:{deep:!0,handler:function(t,o){ot(t.title,t.todoList)}}},methods:{openAddDialog:function(){this.$store.dispatch("openAddDialog",this.todoType)}}},at={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("el-col",{attrs:{lg:12,xl:12,md:12}},[e("div",{staticClass:"cardContainer",style:{background:t.allTodo[t.todoType].cardContainerBackground}},[e("div",{staticClass:"card-header",style:{background:t.allTodo[t.todoType].cardHeaderBackground}},[e("span",[t._v(t._s(t.allTodo[t.todoType].title))]),t._v(" "),e("el-button",{staticStyle:{float:"right",padding:"5px"},attrs:{icon:"el-icon-plus",circle:""},on:{click:t.openAddDialog}})],1),t._v(" "),e("div",{staticClass:"cardContent"},[e("draggable",{staticClass:"list-group",attrs:{list:t.allTodo[t.todoType].todoList,group:"task"}},t._l(t.allTodo[t.todoType].todoList,function(o,n){return e("todoItem",{key:n,attrs:{todo:o,index:n,todoType:t.todoType}})}),1)],1)])])},staticRenderFns:[]};var dt=e("VU/8")(nt,at,!1,function(t){e("4Bvc")},"data-v-6b2fd0d8",null).exports,it={name:"AddTodoDialog",computed:M()({},Object(X.c)(["addTodoDialog"])),methods:{addTodo:function(){this.addTodoDialog.todoContent.trim()?this.$store.dispatch("addTodo"):V.a.error({showClose:!0,message:"todo 内容不能为空!"})}}},lt={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("el-dialog",{attrs:{title:"新建Todo",width:"360px",visible:t.addTodoDialog.visible},on:{"update:visible":function(o){return t.$set(t.addTodoDialog,"visible",o)}}},[e("el-form",{attrs:{"label-position":"top","label-width":"80px",model:t.addTodoDialog}},[e("el-form-item",{attrs:{label:"Todo 类型"}},[e("el-select",{staticClass:"add_todo_select",model:{value:t.addTodoDialog.addTodoType,callback:function(o){t.$set(t.addTodoDialog,"addTodoType",o)},expression:"addTodoDialog.addTodoType"}},[e("el-option",{attrs:{label:"很重要-很紧急",value:"task1"}}),t._v(" "),e("el-option",{attrs:{label:"重要-不紧急",value:"task2"}}),t._v(" "),e("el-option",{attrs:{label:"不重要-紧急",value:"task3"}}),t._v(" "),e("el-option",{attrs:{label:"不重要-不紧急",value:"task4"}})],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"Todo 内容"}},[e("el-input",{model:{value:t.addTodoDialog.todoContent,callback:function(o){t.$set(t.addTodoDialog,"todoContent",o)},expression:"addTodoDialog.todoContent"}})],1)],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(o){t.addTodoDialog.visible=!1}}},[t._v("取消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.addTodo}},[t._v("确定")])],1)],1)},staticRenderFns:[]};var st={name:"Container",components:{TodoCard:dt,Header:G,AddTodoDialog:e("VU/8")(it,lt,!1,function(t){e("dHSW")},"data-v-fa5b17b8",null).exports},computed:M()({},Object(X.b)(["allCount","finishCount"])),methods:{deleteFinishedTodo:function(){var t=this;W.a.confirm("确定删除【已完成】的todo?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$store.dispatch("deleteFinishedTodo"),V.a.success({showClose:!0,message:"删除成功!"})}).catch(function(){V.a.info({showClose:!0,message:"已取消删除"})})},deleteAllTodo:function(){var t=this;W.a.confirm("确定删除【所有】的todo?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$store.dispatch("deleteAllTodo"),V.a.success({showClose:!0,message:"删除成功!"})}).catch(function(){V.a.info({showClose:!0,message:"已取消删除"})})}}},rt={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("el-row",[e("el-col",{attrs:{lg:{span:16,offset:4},xl:{span:16,offset:4}}},[e("el-row",[e("el-container",[e("el-header",[e("Header")],1),t._v(" "),e("el-main",[e("div",{staticClass:"controlButtonContainer"},[e("el-badge",{staticClass:"item",attrs:{value:t.finishCount,hidden:0==t.finishCount}},[e("el-button",{attrs:{type:"warning",icon:"el-icon-delete",plain:"",disabled:0==t.finishCount},on:{click:t.deleteFinishedTodo}},[t._v("删除已完成\n              ")])],1),t._v(" "),e("el-badge",{staticClass:"item",attrs:{value:t.allCount,hidden:0==t.allCount}},[e("el-button",{attrs:{type:"danger",icon:"el-icon-delete",plain:"",disabled:0==t.allCount},on:{click:t.deleteAllTodo}},[t._v("\n                全部删除\n              ")])],1)],1),t._v(" "),e("todo-card",{attrs:{todoType:"task1"}}),t._v(" "),e("todo-card",{attrs:{todoType:"task2"}}),t._v(" "),e("todo-card",{attrs:{todoType:"task3"}}),t._v(" "),e("todo-card",{attrs:{todoType:"task4"}}),t._v(" "),e("AddTodoDialog")],1)],1)],1)],1)],1)},staticRenderFns:[]};var ct={components:{Container:e("VU/8")(st,rt,!1,function(t){e("nivM")},"data-v-3577186c",null).exports}},ut={render:function(){var t=this.$createElement;return(this._self._c||t)("Container")},staticRenderFns:[]};var ft,Tt=e("VU/8")(ct,ut,!1,function(t){e("dsiW")},null,null).exports,pt={allTodo:{task1:{title:"很重要-很紧急",cardHeaderBackground:"#FFBEAA",cardContainerBackground:"#ffede7",hoverBackground:"#ffdcd0",todoList:tt("很重要-很紧急")},task2:{title:"重要-不紧急",cardHeaderBackground:"#FFD278",cardContainerBackground:"#ffefcb",hoverBackground:"#fbe2ab",todoList:tt("重要-不紧急")},task3:{title:"不重要-紧急",cardHeaderBackground:"#63d8ff",cardContainerBackground:"#d6f4fe",hoverBackground:"#afebff",todoList:tt("不重要-紧急")},task4:{title:"不重要-不紧急",cardHeaderBackground:"#bdff7c",cardContainerBackground:"#eeffdd",hoverBackground:"#d3fdaa",todoList:tt("不重要-不紧急")}},addTodoDialog:{visible:!1,addTodoType:"task1",todoContent:""}},vt=e("bOdI"),ht=e.n(vt),gt=(ft={},ht()(ft,"add_todo",function(t){var o={content:t.addTodoDialog.todoContent,finish:!1};t.allTodo[t.addTodoDialog.addTodoType].todoList.unshift(o),t.addTodoDialog.todoContent="",t.addTodoDialog.visible=!1}),ht()(ft,"delete_todo",function(t,o){var e=o.todoType,n=o.index;t.allTodo[e].todoList.splice(n,1)}),ht()(ft,"open_add_dialog",function(t,o){var e=o.todoType;t.addTodoDialog.addTodoType=e,t.addTodoDialog.visible=!0}),ht()(ft,"delete_finished_todo",function(t){t.allTodo.task1.todoList=t.allTodo.task1.todoList.filter(function(t){return!t.finish}),t.allTodo.task2.todoList=t.allTodo.task2.todoList.filter(function(t){return!t.finish}),t.allTodo.task3.todoList=t.allTodo.task3.todoList.filter(function(t){return!t.finish}),t.allTodo.task4.todoList=t.allTodo.task4.todoList.filter(function(t){return!t.finish})}),ht()(ft,"delete_all_todo",function(t){t.allTodo.task1.todoList=[],t.allTodo.task2.todoList=[],t.allTodo.task3.todoList=[],t.allTodo.task4.todoList=[]}),ft),mt={addTodo:function(t){(0,t.commit)("add_todo")},deleteTodo:function(t,o,e){(0,t.commit)("delete_todo",{todoType:o,index:e})},openAddDialog:function(t,o){(0,t.commit)("open_add_dialog",{todoType:o})},deleteFinishedTodo:function(t){(0,t.commit)("delete_finished_todo")},deleteAllTodo:function(t){(0,t.commit)("delete_all_todo")}};N.default.use(X.a);var bt=new X.a.Store({state:pt,mutations:gt,actions:mt,getters:{allCount:function(t){return t.allTodo.task1.todoList.length+t.allTodo.task2.todoList.length+t.allTodo.task3.todoList.length+t.allTodo.task4.todoList.length},finishCount:function(t){return t.allTodo.task1.todoList.filter(function(t){return t.finish}).length+t.allTodo.task2.todoList.filter(function(t){return t.finish}).length+t.allTodo.task3.todoList.filter(function(t){return t.finish}).length+t.allTodo.task4.todoList.filter(function(t){return t.finish}).length}}});e("njn1");N.default.use(z.a),N.default.use(j.a),N.default.use(E.a),N.default.use($.a),N.default.use(H.a),N.default.use(B.a),N.default.use(w.a),N.default.use(D.a),N.default.use(C.a),N.default.use(k.a),N.default.use(m.a),N.default.use(h.a),N.default.use(p.a),N.default.use(f.a),N.default.use(c.a),N.default.use(s.a),N.default.use(i.a),N.default.use(a.a),new N.default({el:"#app",components:{App:Tt},template:"<App/>",store:bt})},NOFV:function(t,o){},"X+ky":function(t,o){},Yq4J:function(t,o){},ZzA9:function(t,o){},akml:function(t,o){},bwiK:function(t,o){},cDSy:function(t,o){},cwe7:function(t,o){},d7TW:function(t,o){},dHSW:function(t,o){},dmRH:function(t,o){},dsiW:function(t,o){},jZDA:function(t,o){},kDvS:function(t,o){},nivM:function(t,o){},njn1:function(t,o){},oq7i:function(t,o){},qunJ:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.bb8b13ba3ecce5bf32f2.js.map